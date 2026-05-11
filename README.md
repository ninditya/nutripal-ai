# 🥗 NutriPal — Your AI-Powered Nutrition Partner

> Web app AI-driven untuk personal nutrition tracking & meal planning. Dibangun dengan Next.js 15, Supabase, dan Google Gemini untuk memberikan pengalaman nutrisi yang personal, presisi, dan menyenangkan.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-99.3%25-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-DB%20%2B%20Auth-3ECF8E.svg?logo=supabase&logoColor=white)](https://supabase.com/)
[![Gemini](https://img.shields.io/badge/Gemini-2.5%20Flash-4285F4.svg?logo=google&logoColor=white)](https://ai.google.dev/)

---

## 📖 Tentang Project

**NutriPal** adalah aplikasi web modern yang menggabungkan **AI generatif** dengan **real-time data tracking** untuk membantu pengguna mengelola pola makan dan kesehatan mereka. Aplikasi ini menyediakan personal nutrition assistant yang dapat:

- 📸 **Mengenali makanan dari foto** dan langsung memberikan breakdown nutrisi
- 🍽️ **Merencanakan menu harian otomatis** berdasarkan profil & target kalori
- 💧 **Memantau hidrasi & active burn** dari sinkronisasi fitness device
- 🤖 **Memberikan rekomendasi AI** sesuai bahan yang tersedia di dapur
- 📊 **Tracking real-time** dengan visualisasi tren makro mingguan

---

## ✨ Fitur Utama

### 🔐 1. Secure Login & Onboarding
- One-click sign-in (simulasi Google login)
- Setup biometrik: gender, umur, berat, tinggi
- Auto-kalkulasi **BMI** dengan kategorisasi (Ideal, Overweight, dll)
- Konfigurasi **health markers** & **food allergies**

### 📊 2. Dashboard (Today)
Command center harian dengan:
- **Energy Balance & Macro Tracking** — Progress kalori vs target (protein/karbo/lemak)
- **Hydration & Active Burn** — Log air minum + monitor kalori terbakar
- **Weekly Macro Trends** — Visualisasi tren 7 hari
- **Daily Food Record** — Log meal lengkap dengan AI insight & health score

### 📅 3. Meal Planner
- Penjadwalan menu harian (advance planning)
- Tambah meal manual atau biarkan **AI auto-calculate** nutrisi
- Lihat full recipe dengan step-by-step instructions

### 📸 4. Snap — AI Food Recognition
- Foto makanan via kamera/galeri
- AI breakdown otomatis: kalori, makro, health score, ingredients
- **Expert Insight** & **allergen warning**
- Update meal yang sudah dijadwalkan dengan foto baru

### 🔍 5. Explore Hub
- **ML Curation (Delivery Hub)** — Rekomendasi makanan dari layanan delivery (di-score AI sesuai profil)
- **Recipe From Pantry** — Input bahan yang tersedia → AI generate resep kreatif
- **Predictive Path (AI Meal Plan)** — AI buat full meal plan harian + swap suggestions

### 👤 6. Profile & Fitness Sync
- Edit biometrik & dietary preferences (langsung update rekomendasi AI)
- Sinkronisasi dengan wearable (mock Apple Watch integration)
- Visualisasi tren aktivitas mingguan

---

## 🏗️ Arsitektur

```
┌─────────────────────────────────────────────┐
│   Frontend (Next.js 15 + React 19)          │
│   ├─ App Router + Server Components         │
│   ├─ Tailwind CSS + ShadCN UI               │
│   └─ Custom Hooks (useProfile, useMeals...) │
└───────────────┬─────────────────────────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
┌──────────────┐   ┌─────────────────────┐
│  Supabase    │   │  Google Genkit      │
│  ├─ Postgres │   │  ├─ Gemini 2.5 Flash│
│  ├─ Auth     │   │  ├─ Vision API      │
│  └─ Realtime │   │  └─ 4-Key Rotation  │
└──────────────┘   └─────────────────────┘
```

---

## 🗂️ Struktur Repository

```
nutripal-ai/
│
├── src/                      # Source code utama
│   ├── app/                  # Next.js App Router pages
│   ├── components/           # React components (ShadCN UI)
│   ├── hooks/                # Custom React hooks
│   │   ├── useProfile.ts
│   │   ├── useDailyLog.ts
│   │   ├── useMeals.ts
│   │   └── useDailyLogs.ts
│   ├── lib/                  # Utilities & helpers
│   └── ai/                   # Genkit AI flows
│
├── components.json           # ShadCN UI config
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS config
├── postcss.config.mjs        # PostCSS config
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router + Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [ShadCN UI](https://ui.shadcn.com/)
- **Language:** TypeScript 99.3%

### Backend & Database
- **BaaS:** [Supabase](https://supabase.com/)
  - PostgreSQL database
  - Row-Level Security (RLS) untuk data isolation
  - Real-time subscriptions
  - Supabase Auth (anonymous user management)

### AI & Machine Learning
- **Framework:** [Google Genkit](https://firebase.google.com/docs/genkit)
- **Model:** Gemini 2.5 Flash (text + vision)
- **Reliability:** 4-key rotation system untuk handle rate limits

### State Management
- **Custom React Hooks** dengan Supabase real-time channels
- Live data sync antar device tanpa refresh manual

---

## ⚙️ Instalasi

### 1. Prasyarat

- **Node.js** 20+ dan npm
- **Supabase account** (untuk database & auth)
- **Google AI Studio API keys** (untuk Gemini)
- Git

### 2. Clone Repository

```bash
git clone https://github.com/ninditya/nutripal-ai.git
cd nutripal-ai
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Environment Variables

Buat file `.env.local` di root folder:

```env
# === Supabase ===
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# === Google Gemini (4-Key Rotation) ===
GOOGLE_API_KEY_1=your-gemini-api-key-1
GOOGLE_API_KEY_2=your-gemini-api-key-2
GOOGLE_API_KEY_3=your-gemini-api-key-3
GOOGLE_API_KEY_4=your-gemini-api-key-4

# === App Config ===
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> 💡 **Tip:** Buat 4 API key Gemini gratis di [Google AI Studio](https://aistudio.google.com/) untuk memanfaatkan fitur key rotation.

### 5. Setup Database Supabase

1. Buka [Supabase Dashboard](https://app.supabase.com/)
2. Buat project baru
3. Setup tabel untuk: `profiles`, `meals`, `daily_logs`, `food_records`
4. Aktifkan **Row-Level Security (RLS)** untuk semua tabel
5. Salin URL & API keys ke `.env.local`

---

## 🚀 Cara Menjalankan

### Development Mode

```bash
npm run dev
```

Buka browser:
```
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## 🔐 Security Highlights

- 🛡️ **Row-Level Security (RLS)** — Data isolation di level database Supabase
- 🔑 **Environment Variables** — Pemisahan strict antara public (`NEXT_PUBLIC_*`) dan server-side credentials
- 🔄 **API Key Rotation** — 4-key rotation untuk Gemini menghindari rate limit & single point of failure
- 🚫 **Anonymous Auth** — Demo login tanpa expose data sensitif

---

## 🎯 User Journey

```
1. Login           →  One-click sign-in (Google mock)
       ↓
2. Onboarding      →  Input biometrik + health markers
       ↓
3. Dashboard       →  Today's energy balance & macros
       ↓
4. Plan Meals      →  Schedule meals (manual or AI auto-calc)
       ↓
5. Snap Food       →  Foto → AI breakdown → auto-log
       ↓
6. Explore         →  Delivery curation / Pantry recipes / AI meal plan
       ↓
7. Profile         →  Edit biometrik & sync wearables
       ↓
8. Logout          →  Secure sign out
```

---

## 🎨 UI Components

Project ini menggunakan **ShadCN UI** — koleksi komponen yang accessible, customizable, dan modern. Komponen yang tersedia di `components.json`:

- 🎴 Cards & Layouts
- 📋 Forms & Inputs
- 🎚️ Progress bars & Sliders
- 🪟 Modals & Dialogs
- 📊 Charts (untuk macro trends)
- 🔔 Toasts & Notifications

---

## 🤖 AI Features Deep Dive

### Image-to-Nutrition Pipeline
```
Photo Upload → Gemini Vision API → Food Identification →
Nutrition Database Lookup → Health Score → Allergen Check →
Expert Insight Generation
```

### Meal Plan Generation
```
User Profile (BMI, allergies, targets) →
Genkit Flow with Gemini 2.5 Flash →
Balanced Breakfast + Lunch + Dinner →
Full Recipe + Swap Alternatives
```

### Delivery Curation Scoring
```
Available Delivery Options →
Score against User Profile + Daily Targets →
Ranked Recommendations
```

---

## 📊 Stats Project

- 🚀 **375+ commits** — Iterasi development aktif
- 📦 **99.3% TypeScript** — Type-safe end to end
- ⚡ **Turbopack** — Build & dev server super cepat
- 🔄 **Real-time sync** — Data update tanpa refresh

---

## 🚢 Deployment

Project Next.js ini siap di-deploy ke berbagai platform:

| Platform        | Kompatibilitas | Catatan                            |
| --------------- | -------------- | ---------------------------------- |
| **Vercel**      | ✅ Recommended | Native support, auto-deploy        |
| **Netlify**     | ✅ Compatible  | Dengan Next.js adapter             |
| **Railway**     | ✅ Compatible  | Node.js runtime                    |
| **Self-hosted** | ✅ Compatible  | `npm run build && npm start`       |

### Deploy ke Vercel

1. Push repository ke GitHub
2. Login ke [Vercel](https://vercel.com/)
3. Import project → pilih `nutripal-ai`
4. Tambahkan semua environment variables
5. Deploy!

---

## 📝 Catatan Penting

- 🔥 Project ini menggunakan **Next.js 15 App Router** — pastikan familiar dengan Server/Client Components.
- 🤖 Fitur AI memerlukan **Gemini API keys** — gratis tier sudah cukup untuk testing.
- 🗄️ Data Supabase memerlukan **RLS yang benar** agar isolasi user-level berfungsi.
- 📸 Fitur Snap (food recognition) membutuhkan **kamera permission** di browser.
- 🔄 Real-time channels Supabase akan auto-reconnect saat koneksi terputus.

---

## 📄 Lisensi

Project ini bersifat private/educational.

---

## 👤 Author

**ninditya**
- GitHub: [@ninditya](https://github.com/ninditya)

---

<p align="center">
  🥗 Built with care for healthier living, powered by AI
</p>
