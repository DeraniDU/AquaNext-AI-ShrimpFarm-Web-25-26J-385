<h1 align="center">
  🦐 AquaNext — AI-Powered Shrimp Farm Management System
</h1>

<p align="center">
  <b>Smart aquaculture at scale — powered by AI, built for the future of shrimp farming.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer_Motion-latest-e91e8c?style=for-the-badge&logo=framer" />
  <img src="https://img.shields.io/badge/Cloudinary-integrated-3448c5?style=for-the-badge&logo=cloudinary" />
</p>

---

## 📌 Overview

**AquaNext** is an intelligent, full-stack web platform designed to transform traditional shrimp farming into a data-driven, AI-assisted operation. It combines real-time environmental monitoring, predictive disease detection, smart feeding optimization, and an intelligent AI assistant — all within a modern, responsive web interface.

This platform serves a **dual purpose**:
- 🎓 **Academic Research** — Developed as a supervised research project (ID: `25-26J-385`), exploring the intersection of AI, IoT, and aquaculture.
- 💼 **Commercial Deployment** — Built with production-grade architecture suitable for real-world shrimp farm operations and SaaS productization.

---

## ✨ Features

| Feature | Description |
|---|---|
| 💧 **Water Quality Monitoring** | Real-time dashboards tracking pH, temperature, salinity, dissolved oxygen & ammonia |
| 🦠 **Disease Detection** | AI-powered early warning system to detect and classify shrimp diseases |
| 🍽️ **Feeding Optimization** | Smart feeding schedules driven by environmental and growth data |
| 🤖 **AI Assistant** | Conversational AI for farm management advice and decision support |
| 📊 **Insights & Analytics** | Data-driven farm performance reports with interactive Recharts visualizations |
| 📬 **Newsletter & Contact** | Email integration via Nodemailer for subscriber management and enquiries |
| 🎬 **Live Demo Module** | Interactive in-app demo for prospective users and stakeholders |
| 🎓 **Research Portal** | Academic sections covering domain, milestones, methodology, and literature |

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4, MUI (Material UI v7)
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Charts:** Recharts

### Backend & Services
- **API Routes:** Next.js App Router API (serverless)
- **Email:** Nodemailer
- **Media Management:** Cloudinary (`next-cloudinary`)

### Infrastructure
- **Deployment Target:** Vercel / Custom Server
- **Environment Config:** `.env` based secure configuration

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/AquaNext-AI-ShrimpFarm-Web-25-26J-385.git

# Navigate into the project
cd AquaNext-AI-ShrimpFarm-Web-25-26J-385

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
AquaNext-AI-ShrimpFarm-Web-25-26J-385/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout
│   ├── about/                    # About the project
│   ├── ai-assistant/             # AI Farm Assistant
│   ├── contact/                  # Contact form
│   ├── demo/                     # Live demo module
│   ├── disease-detection/        # Disease detection module
│   ├── domain/                   # Research domain page
│   ├── feeding/                  # Feeding optimization
│   ├── insights/                 # Analytics & insights
│   ├── milestones/               # Research milestones
│   ├── waterqualitymonitoring/   # Water quality dashboard
│   └── api/                      # Serverless API routes
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NewsletterForm.tsx
│   ├── ai-assistant/
│   ├── feeding/
│   └── waterquality/
├── public/                        # Static assets
└── next.config.ts
```

---

## 🎓 Academic Information

- **Research Project ID:** `25-26J-385`
- **Research Areas:** Artificial Intelligence, Aquaculture, IoT, Precision Agriculture
- **Domain:** Smart Farming / Blue Economy
- **Research Paper:** Available upon request — contact [deranindu@gmail.com](mailto:deranindu@gmail.com)

---

## 💼 Commercial Use

AquaNext is designed with commercial scalability in mind:
- Multi-farm dashboard support
- Modular AI component architecture
- SaaS-ready deployment via Vercel
- Secure API design with environment-based configuration

For commercial licensing or partnership enquiries, contact [deranindu@gmail.com](mailto:deranindu@gmail.com).

---

## 🤝 Contributing

Contributions are welcome for the open portions of this project. Please open an issue first to discuss proposed changes.

---

## 📄 License

This project is dual-licensed:
- **Academic Use:** Free for research and educational purposes with attribution.
- **Commercial Use:** Contact the team for licensing terms.

---

<p align="center">Built with ❤️ by the AquaNext Team — Sri Lanka 🇱🇰</p>
