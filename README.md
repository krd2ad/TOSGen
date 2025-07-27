# 🛡️ Privacy Policy Generator

Generate, customize, and host privacy policies and terms of service powered by AI. Designed for indie developers, small teams, and startups that need fast, reliable, and compliant legal documents.

Live site: [your-username.github.io/privacy-policy-gen](https://your-username.github.io/privacy-policy-gen)

---

## ✨ Features

- 🧠 **AI-Enhanced Generation** – Generate clauses based on your app type, location, and data collection needs
- 🔒 **Supabase Auth** – Secure login using email/password or social sign-in
- 📝 **Editable Policies** – Save, edit, and version your policies
- 📄 **Hosted & Shareable** – Share public links or embed in your site
- 🧾 **Export Options** – Download in HTML, PDF, or Markdown (paid tier)
- 💸 **Stripe Subscriptions** – Optional paid plan for extra features (via Supabase Edge Functions)

---

## 📁 Project Structure

```
privacy-policy-gen/
├── public/             # Static assets
├── src/
│   ├── pages/          # index.html, dashboard.html, etc.
│   ├── components/     # Header, Footer, PolicyForm, etc.
│   ├── scripts/        # JS: auth.js, ai.js, policies.js
│   └── styles/         # Tailwind or CSS
├── supabase/           # DB schema, edge functions, Stripe webhooks
├── .github/workflows/  # GitHub Actions deploy to Pages
├── .env.example
├── README.md
└── index.html
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/privacy-policy-gen.git
cd privacy-policy-gen
```

### 2. Set up your environment
- Copy `.env.example` to `.env`
- Fill in your Supabase + OpenAI + Stripe keys

### 3. Install dependencies
```bash
npm install
```

### 4. Run locally
```bash
npm run dev
```

### 5. Deploy to GitHub Pages
- Push to `main` branch
- GitHub Actions will auto-deploy from `./dist` to Pages

---

## 🧠 AI Integration

We use OpenAI's GPT API to customize privacy policy clauses based on:
- App type (e.g. mobile, web, SaaS)
- Region (e.g. GDPR, CCPA)
- Data collected (email, location, health, etc.)

Configure prompts in `src/scripts/ai.js`.

---

## 🗄️ Supabase Schema

Tables:
- `users` – via Supabase Auth
- `policies` – stores user policy drafts and content
- `subscriptions` – tracks premium plan users

See `supabase/schema.sql` for details.

---

## 📦 Coming Soon

- 📌 Policy versioning
- 🧾 Auto-update on legal changes
- 🧩 Markdown embed for GitHub Readmes
- 🌐 Custom domain hosting (Pro tier)

---

## 📜 License

MIT License © 2025 [Your Name]

---

## 💬 Feedback & Contributions

Have ideas, issues, or want to contribute? Open a GitHub issue or PR!
