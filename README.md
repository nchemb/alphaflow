# AlphaFlow — AI Agency Landing (Next.js + Tailwind)

Dark, techy landing page for AlphaFlow, optimized for Vercel.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Start dev server
npm run dev

# 3) Build & run production
npm run build && npm start
```

## Contact Form (Formspree)

1. Create a form here: https://formspree.io/forms
2. Copy the endpoint (looks like `https://formspree.io/f/xyzabcd`).
3. Open `components/ContactForm.tsx` and replace `your-form-id` with your ID.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. On https://vercel.com: **Add New → Project → Import** your repo.
3. Framework preset should be detected **Next.js**. Hit **Deploy**.

## Connect Domain (GoDaddy → Vercel)

1. In your project on Vercel: **Settings → Domains → Add** `goalphaflow.com`.
2. Vercel will show DNS records. In GoDaddy: **Domain → DNS → Add Records**:
   - If prompted, add the A record(s) to Vercel and a CNAME for `www` to your Vercel target.
3. Wait a few minutes; SSL will auto‑provision.

## Customizing

- Colors & glow are in `tailwind.config.js` and `app/globals.css`.
- Update email in `Footer.tsx` and the contact copy in `ContactForm.tsx`.
- Replace `public/favicon.svg` if you have a logo.
