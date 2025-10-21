# 🌐 hamza-portfolio — Complete Developer Portfolio Platform

> **By ZesDev**  
> A full-stack portfolio project designed to showcase work, manage content, and evolve into a customizable SaaS portfolio builder.

---

## ✨ Overview

**hamza-portfolio** is a complete developer portfolio project consisting of:

1. **Frontend** — a modern, animated React website built with Vite and Tailwind CSS.  
2. **Backend** — a Laravel API and admin dashboard (under development) that allows editing all content dynamically.

The project aims to be **both a personal portfolio** and a **base platform** that can be **sold or reused** by other developers and freelancers who want to manage their portfolio easily.

---

## 🎯 Project Goal

To create a **complete, customizable portfolio system** where:
- The **frontend** showcases your projects and skills beautifully.
- The **backend** lets you manage all content (texts, images, projects, links) without touching code.
- Future clients can **buy and personalize** their own version of the portfolio via the admin dashboard.

Ultimately, `hamza-portfolio` will serve as a **ready-to-sell SaaS portfolio template**.

---

## 🧩 Project Structure
```
hamza-portfolio/
│
├── frontend/ # React + Vite + Tailwind frontend
│ ├── src/
│ ├── public/
│ └── README.md
│
├── backend/ # Laravel API & Admin Dashboard
│ ├── app/
│ ├── database/
│ ├── routes/
│ └── README.md
│
├── .gitignore
├── package.json
└── README.md # (this file)
```
---

## 🖥️ Frontend Summary

> Path: `/frontend`

The **frontend** is a responsive and elegant single-page portfolio application built with:
- **React + Vite** for performance
- **Tailwind CSS** for styling
- **Lazy loading** and **skeletons** for smooth UX
- **Local assets** (WebP + fallback)
- Sections: Hero · Services · Tech Stack · Projects · CTA · Contact

### ✅ Current Features
- Fully responsive (mobile → desktop)
- Clean, minimal UI design
- Static content via `content.json`
- Smooth navigation and animations

### 🔮 Planned (Frontend)
- Multilingual support (English/French)
- Dynamic project detail pages
- SEO optimization (meta tags + OG images)

For more details, see the [frontend README](./frontend/README.md).

---

## ⚙️ Backend Summary

> Path: `/backend`

The **backend** is being developed with **Laravel** and will serve as the content manager (API + Admin panel).  
It allows editing all sections of the frontend directly from a dashboard:
- Projects (title, description, images, stack)
- Services
- Tech stack
- Hero text & call-to-action
- Contact messages

### ✅ Planned Features
- REST API for frontend data
- Authentication (Laravel Breeze / Sanctum)
- CRUD dashboard for all sections
- File upload for project images
- Contact form integration
- Simple analytics (views, messages, activity logs)

For more details, see the [backend README](./backend/README.md).

---

## 🧱 Tech Stack Overview

| Domain | Stack |
|--------|-------|
| **Frontend** | React + Vite + Tailwind CSS |
| **Backend** | Laravel (PHP 8.2+) |
| **Database** | MySQL / SQLite |
| **API** | REST + JSON |
| **Auth** | JWT / Laravel Sanctum |
| **Version Control** | Git + GitHub |
| **Deployment** | Netlify / Vercel (Frontend), Laravel Forge / Docker (Backend) |

---

## 🚀 Vision & Roadmap

### **V1 — Static Portfolio (DONE ✅)**
- React + Vite frontend  
- Sections: Hero, Services, Tech, Projects, Contact  
- Static JSON content  
- WebP images + fallback  
- Clean UI + lazy loading  

### **V2 — Dynamic Portfolio (IN PROGRESS ⚙️)**
- Laravel API + Admin dashboard  
- CRUD for all content  
- Auth (Admin login)  
- File uploads for project images  
- Live data connection frontend ↔ backend  

### **V3 — SaaS Portfolio Builder (COMING 💎)**
- Multi-user admin system (each client has their own dashboard)  
- Template system (different portfolio styles)  
- Subscription model (paid tiers for hosting)  
- Analytics + Contact Insights  
- Export / Import system for content and templates  

---

## 📦 Installation (Development)

### Frontend
```bash
cd frontend
npm install
npm run dev
```
## Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```
---
## 🌐 Deployment
| Component | Recommended Platform |
|------|-------------|
| **Frontend** | Netlify / Vercel |
| **Backend** |	Laravel Forge / Ploi / Docker |
| **Database** | MySQL (PlanetScale / Render / Supabase) |

---

## 💬 Contact

**Created by:** [ZesDev](https://github.com/Hamzabern)  
**Contact:** bernoussihamzaa@gmail.com
**GitHub**: (https://github.com/Hamzabern)
[![Deploy](https://img.shields.io/badge/Live-Demo-blue)](https://hamzabern.github.io/hamza-portfolio/)

---

## 🏷️ License
Released under the **MIT License**.  
© 2025 **ZesDev**. All rights reserved.
