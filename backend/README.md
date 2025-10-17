# 🗄️ hamza-portfolio/backend — Laravel API & Admin Dashboard

> **By ZesDev**  
> The backend for `hamza-portfolio`: a Laravel API and an Admin Dashboard that allow editing all portfolio content (projects, texts, media) and powering the public frontend.

---

## ✨ Overview

This repository contains the **server-side** application for the `hamza-portfolio` project.  
It provides:
- A **clean REST API** consumed by the React frontend
- An **Admin Dashboard** where the owner (or clients) can update portfolio content without touching code
- Authentication, roles/permissions, media handling, and contact message management

**Goal:** make the portfolio **fully editable** and **production-ready** for real use or client hand-off.

---

## 🧱 Tech Stack

| Area | Technology |
|------|------------|
| **Framework** | Laravel (PHP 8.2+), Laravel 11 ready |
| **Auth** | Laravel Breeze or Fortify (email/password), Sanctum tokens for API |
| **DB** | MySQL / PostgreSQL / SQLite (dev) |
| **ORM** | Eloquent |
| **Media** | File uploads (public disk) — can integrate Spatie Media Library later |
| **Validation** | Form Requests + Laravel validation |
| **Docs** | OpenAPI/Swagger (via l5-swagger or similar) |
| **Testing** | PHPUnit + Pest (optional) |
| **Deployment** | Laravel Sail / Docker / Forge compatible |

---

## 🧩 What This Backend Will Do

### Content Models
- **SiteSettings**: site title, tagline, social links, SEO meta, theme options
- **Hero**: headline, subtext, hero image
- **Service**: title, description, icon
- **Tech**: name, category, badge/logo
- **Project**: title, summary, tech stack, links (live, repo), cover image
- **ProjectImage**: gallery images per project
- **ContactMessage**: name, email, message, status (read/unread)

> These entities power all sections of the frontend (Hero, Services, Tech Stack, Projects, Contact).

### Admin Dashboard (Web)
- Login (owner/client)
- CRUD for **all** content models listed above
- Upload images (cover/gallery), reorder, soft-delete
- Review and reply to contact messages
- Basic analytics (visits, messages, most viewed projects) — optional later

### REST API (for the React frontend)
- Public read endpoints (Projects list, single Project, Tech, Services, etc.)
- Authenticated admin endpoints for create/update/delete
- Pagination, filtering, and simple search where relevant
- Rate limiting, CORS, and proper validation responses

---

## 🔗 Example API Endpoints (Draft)

**Public (read-only)**
- GET /api/v1/hero
- GET /api/v1/services
- GET /api/v1/tech
- GET /api/v1/projects?page=1&tech=React
- GET /api/v1/projects/{slug}
- POST /api/v1/contact { name, email, message }


**Admin (protected)**
- POST /api/v1/auth/login
- POST /api/v1/auth/logout

- GET /api/v1/admin/site-settings
- PATCH /api/v1/admin/site-settings

- POST /api/v1/admin/projects
- PATCH /api/v1/admin/projects/{id}
- DELETE /api/v1/admin/projects/{id}
- POST /api/v1/admin/projects/{id}/images (multipart)
- DELETE /api/v1/admin/projects/{id}/images/{imageId}

- CRUD /api/v1/admin/services
- CRUD /api/v1/admin/tech
- GET /api/v1/admin/contact-messages?status=unread
- PATCH /api/v1/admin/contact-messages/{id} (mark as read)


> Final routes may change slightly during implementation while keeping the same intent.

---

## 🗂️ Suggested Folder Structure
```
hamza-portfolio-backend/
├─ app/
│ ├─ Http/
│ │ ├─ Controllers/ # API & Admin controllers
│ │ ├─ Middleware/
│ │ └─ Requests/ # FormRequest validation
│ ├─ Models/ # Eloquent models (Project, Service, etc.)
│ └─ Policies/ # Authorization policies (later)
├─ database/
│ ├─ factories/
│ ├─ migrations/ # Tables for content models
│ └─ seeders/ # Demo content (optional)
├─ public/ # Public assets (images, storage symlink)
├─ routes/
│ ├─ api.php # API routes (v1)
│ └─ web.php # Admin web routes (if needed)
├─ storage/ # Media storage (local dev)
├─ tests/ # Feature & unit tests
├─ .env.example
└─ README.md
```
---

## 🔐 Security & Admin

- **Auth**: Laravel Breeze/Fortify for session auth; Sanctum for SPA/API tokens
- **Roles/Permissions**: start simple (`admin`), can extend with `spatie/laravel-permission`
- **Validation**: Form Requests everywhere for clean controllers
- **CORS** configured for the frontend origin
- **Rate limiting** on public endpoints (especially `/contact`)

---

## 🚀 Getting Started (Dev)

```bash
# 1) Clone and install
git clone https://github.com/your-username/hamza-portfolio-backend.git
cd hamza-portfolio-backend
composer install
cp .env.example .env

# 2) Configure .env
# DB_* variables, APP_URL, APP_KEY etc.

php artisan key:generate

# 3) Run migrations (+ seeders optional)
php artisan migrate
# php artisan db:seed

# 4) Serve
php artisan serve
# or use Sail / Docker if preferred

```
---
## 🧭 Roadmap
**V1 — MVP Admin + Public API** 

* Auth (admin), basic role
* CRUD for SiteSettings, Services, Tech, Projects, ProjectImages
* Contact messages (capture + admin read)
* Public API for the frontend
* Image uploads + validation

**V2 — UX & Content Power**

* Projects “case study” fields (problems, solutions, results)
* Reorder projects & sections
* Media library (replace/delete)
* Activity log / audit trail

**V3 — Advanced & SaaS-ready**

* Multi-user admin roles (owner, editor)
* Basic analytics (views, messages over time)
* Import/Export content (JSON)
* Draft/Publish states and scheduling

---

## 🧑‍💻 Author

**Created by:** [ZesDev](https://github.com/Hamzabern)  
**Contact:** bernoussihamzaa@gmail.com

---
## 🏷️ License
Released under the **MIT License**.  
© 2025 **ZesDev**. All rights reserved.