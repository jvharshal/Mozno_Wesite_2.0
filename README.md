# Mozno Website 2.0  
*Static Single-Page Application (SPA) built with React + TypeScript + Tailwind CSS*

---

## 🚀 Live URL
[https://jvharshal.github.io/Mozno_Wesite_2.0](https://jvharshal.github.io/Mozno_Wesite_2.0)

---


```bash
# 1. Clone the repo
git clone https://github.com/jvharshal/Mozno_Wesite_2.0.git
cd Mozno_Wesite_2.0

# 2. Install dependencies
npm install

# 3. Run local dev server
npm run dev

# 4. Build for production
npm run build

# 5. Deploy to GitHub Pages
npm run deploy

Mozno_Wesite_2.0/
├─ public/                 # Static assets served at root
│  ├─ dist/               # Copied images / glb / favicon
│  └─ index.html
├─ src/
│  ├─ components/         # Reusable React components
│  ├─ pages/              # Route-level page components
│  ├─ content/blogs/      # 5 Markdown blogs
│  ├─ data/               # JSON service meta
│  └─ index.css           # Tailwind directives
└─ README.md

| Token       | Hex Value | Usage              |
| ----------- | --------- | ------------------ |
| `navy-900`  | `#0f172a` | Header / Footer BG |
| `teal-600`  | `#0d9488` | Primary buttons    |
| `amber-500` | `#f59e0b` | Accent highlights  |


| Route                               | Purpose                                          |
| ----------------------------------- | ------------------------------------------------ |
| `/`                                 | Home – Hero, Services Overview, Why Choose Mozno |
| `/about`                            | Story, Mission, Vision, Founder                  |
| `/services`                         | Tabbed view of 6 service verticals               |
| `/financial-education`              | List of 5 featured blogs → Read More             |
| `/blog/:slug`                       | Full blog article rendered from Markdown         |
| `/contact`                          | Contact form + Google-Sheet integration          |
| `/disclaimer`, `/privacy`, `/terms` | Legal pages                                      |


| File Location            | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `src/content/blogs/*.md` | 5 complete blog posts (inflation, returns, compounding, etc.) |
| `src/data/services.json` | Metadata for 6 service cards & tabs                           |
| `assets/*`               | Source originals → copied to `public/dist/` at build          |



🔌 Integrations
Contact Form → Google Apps Script → Google Sheet
Endpoint: https://script.google.com/macros/s/AKfycbyxvZo8p3oGVQg4GuOy0Ug47FWyA7gEl-IT1PWTuOqZUVxmxjWWkrNVh7Ejl4RzO8Y2/exec
Instagram Feed → Embedded via @the_awareness_initiative
YouTube Feed → Latest uploads from @awareness_initiative
3D Loader → mozno-logo-3d.glb rendered with Three.js in Loader.tsx
🛠️ Tech Stack
Frontend: React 18 + TypeScript
Styling: Tailwind CSS
Build Tool: Vite
Routing: React Router DOM
Markdown: react-markdown + remark-gfm
3D: three, @react-three/fiber, @react-three/drei
Deployment: GitHub Pages via gh-pages branch
📱 Responsive Design
Mobile-first breakpoints (sm, md, lg, xl) applied consistently with Tailwind utilities.
🧪 Post-Deployment Checklist
All images & 3D model load without 404
Contact form submits → Google Sheet record
Social feeds render latest posts/videos
Blog list → detail navigation works
Legal links open correct pages
PageSpeed > 90 for mobile & desktop
📞 Support
For issues or updates, open a GitHub issue or reach out to contact@mozno.in.
© 2025 Mozno Advisory – Empowering Your Financial Journey in India.
