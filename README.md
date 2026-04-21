# AquaNext — AI-Powered Shrimp Farm Management System

**An intelligent, full-stack web platform for modern aquaculture operations.**

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Dual_(Academic_%2F_Commercial)-lightgrey?style=flat-square)

---

## Overview

AquaNext is a production-grade web platform that transforms conventional shrimp farming into a data-driven, AI-assisted operation. The system integrates real-time environmental monitoring, predictive disease detection, intelligent feeding optimization, and a conversational AI assistant — delivered through a modern, responsive web interface.

This platform is developed for a dual purpose:

- **Academic Research** — A supervised university research project (Research ID: `25-26J-385`) investigating the application of artificial intelligence and IoT technologies in aquaculture.
- **Commercial Deployment** — Architected for real-world shrimp farm operations and scalable SaaS productization.

---

## Key Features

| Module | Description |
|---|---|
| Water Quality Monitoring | Real-time dashboards tracking pH, temperature, salinity, dissolved oxygen, and ammonia levels with interactive chart visualizations |
| Disease Detection | AI-powered early warning system for the identification and classification of shrimp diseases |
| Feeding Optimization | Data-driven feeding schedules generated from environmental and biological growth parameters |
| AI Farm Assistant | Conversational AI interface providing farm management guidance and operational decision support |
| Insights & Analytics | Performance reporting and trend analysis with interactive Recharts-based data visualizations |
| Contact & Newsletter | Email-integrated contact and subscriber management system powered by Nodemailer |
| Live Demo Module | In-app interactive demonstration environment for prospective users and stakeholders |
| Research Portal | Academic sections covering research domain, project milestones, methodology, and literature survey |

---

## Technology Stack

### Frontend
- **Framework:** Next.js 15 (App Router), React 19
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4, Material UI v7
- **Animation:** Framer Motion
- **Data Visualization:** Recharts
- **Icons:** Lucide React, React Icons

### Backend & Integrations
- **API Layer:** Next.js Serverless API Routes
- **Email Service:** Nodemailer
- **Media Management:** Cloudinary via `next-cloudinary`

### Infrastructure
- **Deployment:** Vercel / Custom Node.js Server
- **Configuration:** Environment variable-based secure configuration

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/your-org/AquaNext-AI-ShrimpFarm-Web-25-26J-385.git
cd AquaNext-AI-ShrimpFarm-Web-25-26J-385
npm install
```

### Environment Configuration

Create a `.env` file in the project root with the following variables:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
AquaNext-AI-ShrimpFarm-Web-25-26J-385/
├── app/
│   ├── page.tsx                    # Main landing page
│   ├── layout.tsx                  # Root layout and metadata
│   ├── about/                      # Project and team overview
│   ├── ai-assistant/               # AI-powered farm assistant
│   ├── contact/                    # Contact and enquiry form
│   ├── demo/                       # Live interactive demo
│   ├── disease-detection/          # Disease detection module
│   ├── domain/                     # Research domain documentation
│   ├── feeding/                    # Feeding optimization module
│   ├── insights/                   # Analytics and reporting
│   ├── milestones/                 # Research project milestones
│   ├── waterqualitymonitoring/     # Water quality dashboard
│   └── api/                        # Serverless API route handlers
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NewsletterForm.tsx
│   ├── ai-assistant/
│   ├── feeding/
│   └── waterquality/
├── public/                          # Static assets
└── next.config.ts
```

---

## Academic Information

| Field | Details |
|---|---|
| Research Project ID | 25-26J-385 |
| Research Domain | Artificial Intelligence, Aquaculture, IoT, Precision Agriculture |
| Focus Area | Smart Farming / Blue Economy |
| Research Paper | Available upon request |

To request access to the research paper, contact: [deranindu@gmail.com](mailto:deranindu@gmail.com)

---

## Commercial Information

AquaNext is engineered with commercial scalability as a core principle:

- Multi-farm and multi-tenant dashboard support
- Modular AI component architecture
- SaaS-ready deployment via Vercel
- Secure, environment-based API configuration
- Production-grade codebase following Next.js best practices

For licensing inquiries, partnerships, or commercial deployment consultations, contact: [deranindu@gmail.com](mailto:deranindu@gmail.com)

---

## Contributing

Contributions to the open portions of this project are welcome. Please open an issue to discuss any proposed changes before submitting a pull request.

---

## License

This project operates under a dual licensing model:

- **Academic Use** — Free for research and educational purposes with proper attribution.
- **Commercial Use** — A separate commercial license is required. Contact the team for terms.

---

## Contact

**AquaNext Research & Development Team**
Sri Lanka
[deranindu@gmail.com](mailto:deranindu@gmail.com)
