# HB • Portfolio

Portfolio moderne **React + Vite + Tailwind** (frontend) avec effets visuels légers, lazy-loading + skeletons, theming dark/light, et UI orientée performance & accessibilité.  
Le backend (Laravel) sera branché en **V2** pour `/api/contact` et admin.

## 🚀 Stack
- **Frontend**: React 18, Vite, React Router, Framer Motion (léger), Tailwind
- **Data & FX**: React Query (prévu), animations CSS scroll-driven, canvas **ShootingStars** (dark)
- **Qualité**: ESLint, composants accessibles (focus states, aria), design tokens (CSS vars)
- **Déploiement**: GitHub Actions → GitHub Pages (frontend uniquement)

## 📦 Structure
frontend/
src/
components/
effects/ (LightParticles, ShootingStars)
layout/ (Navbar, Footer, Section, SkipToContent, ThemeToggle)
sections/
Hero, Services, Tech, Projects, Skills, Experience, KeyStats, Contact, Cta2
skeleton/ (Hero.skeleton, Services.skeleton, Tech.skeleton, Projects.skeleton, KeyStats.skeleton, Contact.skeleton, Cta2.skeleton)
ui/ (Card, CountUp, LoadingSkeleton, LazyImage, ProgressBar, Reveal, Spinner)
pages/ (Home, NotFound)
styles/ (base, layout, animations, sections, projects, tech, contact, experience)
theme/ (ThemeProvider, useTheme)
main.jsx, App.jsx, index.css
vite.config.js
404.html
.github/workflows/deploy.yml # build & déploiement du frontend

## ✨ Features principales
- **Lazy-loading + Skeletons**: Hero, Services, Tech, Projects (gallery + zoom), **Cta2**, **KeyStats**, **Contact** (pro), etc.
- **ShootingStars** (dark): spawn contrôlé (cap & jitter), traînées qui **disparaissent** progressivement, pause quand l’onglet n’est pas visible.
- **Experience**: timeline + sidebar (Certifications, Quick Stats), “Afficher plus/moins”.
- **Projects**: filtres par stack, tri, pagination “Afficher plus/moins”, zoom image avec overlay, fermeture on-scroll/outside-click, carrousel multi-images.
- **Navbar**: sticky, état actif selon la section en vue, ignore CTA, “Skip to content” accessible.
- **Contact (freelance pro)**: Nom, Email, Société, **Budget**, **Délai**, **Types de projet**, Message, **Fichier**, **RGPD** (validations).  
  - V1: `mailto:` (sans upload)
  - V2: endpoint Laravel `/api/contact` (validation + rate limit + email avec pièce jointe)

## 🛠️ Scripts
```bash
# depuis frontend/
npm install
npm run dev     # dev server (http://localhost:5173)
npm run build   # build de production
npm run preview # prévisualisation du build
