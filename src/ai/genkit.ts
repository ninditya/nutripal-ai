import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * GEMINI KEY ROTATION SYSTEM
 * Protects the application from rate limits by automatically rotating 5 API Keys.
 */
const GEMINI_KEYS = [
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3,
  process.env.GEMINI_API_KEY_4,
].filter(Boolean) as string[];

// Initialize using the first key by default
export const ai = genkit({
  plugins: [googleAI({ apiKey: GEMINI_KEYS[0] })],
  model: 'googleai/gemini-2.5-flash',
});

/**
 * Wrapper function to execute AI commands with key rotation mechanism.
 * Catch 429 Quota errors and retry with the next key in the pool.
 */
export async function executeWithRotation(fn: (aiInstance: any) => Promise<any>) {
  let lastError: any = null;

  for (let i = 0; i < GEMINI_KEYS.length; i++) {
    const key = GEMINI_KEYS[i];
    try {
      // Create a temporary instance with the key being tried
      const temporaryAi = genkit({
        plugins: [googleAI({ apiKey: key })],
        model: 'googleai/gemini-2.5-flash',
      });
      return await fn(temporaryAi);
    } catch (error: any) {
      lastError = error;
      const errorMessage = error.message?.toLowerCase() || "";
      const isRotatable = errorMessage.includes('429') ||
                          errorMessage.includes('quota') ||
                          errorMessage.includes('rate limit') ||
                          errorMessage.includes('api key expired') ||
                          errorMessage.includes('expired') ||
                          error.status === 429 ||
                          error.status === 400 ||
                          (error as any).code === 429;

      if (isRotatable && i < GEMINI_KEYS.length - 1) {
        console.warn(`Key ${i + 1} failed (${error.status ?? 'unknown'}). Rotating to key ${i + 2}...`);
        continue;
      }
      // If it's the last key or not a rate limit, throw the error
      throw error;
    }
  }
  throw lastError;
}
