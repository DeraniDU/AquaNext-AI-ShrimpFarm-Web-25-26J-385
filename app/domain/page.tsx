'use client';

import { useState } from 'react';

/* ─── Data ─────────────────────────────────────────────── */
const domainSections = [
  {
    id: 'literature',
    label: 'Literature Survey',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    accent: 'bg-cyan-500',
    content: {
      summary: 'A comprehensive review of existing research on AI-driven aquaculture, IoT sensor networks, and ML-based disease prediction in shrimp farming.',
      points: [
        {
          title: 'Traditional Shrimp Farming Challenges',
          desc: 'Studies by FAO (2020) and Naylor et al. (2021) document how conventional shrimp farms in Sri Lanka suffer from water quality inconsistencies, over-feeding, and late disease detection, resulting in average losses of 20–40% of harvests annually.',
        },
        {
          title: 'IoT in Aquaculture',
          desc: 'Parra et al. (2018) and Zhang et al. (2020) demonstrated that IoT-based sensor arrays for real-time pH, dissolved oxygen, ammonia and temperature monitoring can reduce mortality rates by up to 35% through timely intervention.',
        },
        {
          title: 'Machine Learning for Disease Detection',
          desc: 'Research by Liu et al. (2019) applied CNN-based image classification for early-stage white-spot syndrome detection in shrimp with 91% accuracy. Integration with LSTM time-series models improved predictive accuracy to 94%.',
        },
        {
          title: 'AI-Optimised Feeding Systems',
          desc: 'Automated feeding research by Atoum et al. (2015) and Chen et al. (2022) showed that ML-driven feeding schedules reduce feed waste by 30–50% while maintaining or improving growth rates in controlled aquaculture environments.',
        },
        {
          title: 'Digital Aquaculture Platforms',
          desc: 'Recent surveys (Karunasagar, 2023) highlight the growing adoption of integrated dashboards combining sensor telemetry, AI analytics, and farmer advisory tools tailored to South and South-East Asian shrimp farm contexts.',
        },
      ],
    },
  },
  {
    id: 'gap',
    label: 'Research Gap',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    accent: 'bg-amber-500',
    content: {
      summary: 'Despite advances globally, significant gaps remain—particularly for small-to-medium shrimp farms in Sri Lanka operating under local environmental and economic constraints.',
      points: [
        {
          title: 'Lack of Localised AI Models',
          desc: 'Most existing AI models are trained on data from large-scale farms in Thailand, Vietnam, and Ecuador. Models trained on Sri Lankan estuarine and mangrove-adjacent farm data are virtually non-existent, limiting direct applicability.',
        },
        {
          title: 'Fragmented Solutions',
          desc: 'Existing tools address only isolated problems—either feeding OR water quality OR disease detection—with no unified, affordable platform that integrates all three for small-scale Sri Lankan shrimp farmers.',
        },
        {
          title: 'Limited Real-Time Alerting',
          desc: 'Most published systems focus on offline batch analysis. Real-time edge-computing solutions that provide SMS or mobile alerts to farmers with limited internet access have not been developed for the local context.',
        },
        {
          title: 'Absence of Farmer-Friendly Interfaces',
          desc: 'Technical dashboards designed for researchers are inadequate for farmers with low digital literacy. No study has focused on co-designing intuitive, multilingual (Sinhala/Tamil) interfaces for Sri Lankan aquaculture farmers.',
        },
      ],
    },
  },
  {
    id: 'problem',
    label: 'Research Problem',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    color: 'from-red-500 to-pink-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    accent: 'bg-red-500',
    content: {
      summary: 'How can an integrated, AI-powered platform be designed and deployed to help Sri Lankan shrimp farmers achieve sustainable yield improvements, reduce costs, and prevent disease outbreaks in real time?',
      points: [
        {
          title: 'Core Problem Statement',
          desc: 'Sri Lankan shrimp farmers—particularly small and medium-scale operators—lack access to affordable, intelligent, real-time monitoring and decision-support tools tailored to local water conditions, disease profiles, and farming practices.',
        },
        {
          title: 'Economic Impact',
          desc: 'Post-harvest losses due to preventable disease outbreaks and sub-optimal feeding account for LKR 1.2 billion in annual losses across the Sri Lankan shrimp farming industry (NAQDA, 2023).',
        },
        {
          title: 'Environmental Concern',
          desc: 'Over-feeding and poor water management lead to eutrophication of surrounding water bodies, threatening biodiversity in coastal ecosystems. A data-driven approach is urgently needed to make the industry sustainable.',
        },
      ],
    },
  },
  {
    id: 'objectives',
    label: 'Objectives',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    accent: 'bg-green-500',
    content: {
      summary: 'AquaNext aims to design, build, and validate a comprehensive AI platform addressing the full spectrum of shrimp farm management challenges.',
      points: [
        {
          title: 'Objective 1 — Real-Time Water Quality Monitoring',
          desc: 'Develop an IoT sensor network that continuously measures pH, dissolved oxygen, ammonia, temperature, and salinity with automated threshold alerts delivered via mobile and web interfaces.',
        },
        {
          title: 'Objective 2 — AI-Powered Disease Detection',
          desc: 'Train and deploy a deep-learning computer vision model capable of detecting shrimp diseases (EMS, WSD, NHP) from images with ≥90% accuracy, enabling early intervention before mass mortality.',
        },
        {
          title: 'Objective 3 — Intelligent Feeding Optimisation',
          desc: 'Build and validate an ML-based feeding recommendation engine that adapts feeding schedules to real-time growth data, water conditions, and historical consumption patterns to reduce waste by ≥40%.',
        },
        {
          title: 'Objective 4 — Integrated AI Assistant',
          desc: 'Create a conversational AI assistant for farm operators, providing natural-language answers to operational queries, interpreting trend data, and issuing proactive recommendations.',
        },
        {
          title: 'Objective 5 — Accessible UI/UX',
          desc: 'Design and evaluate a multilingual, farmer-accessible dashboard that achieves a System Usability Scale (SUS) score of ≥70 among users with varying digital literacy levels.',
        },
      ],
    },
  },
  {
    id: 'methodology',
    label: 'Methodology',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    accent: 'bg-violet-500',
    content: {
      summary: 'An iterative, agile research-and-development methodology combining quantitative sensor data collection with qualitative farmer feedback loops.',
      points: [
        {
          title: 'Phase 1 — Requirements & Literature Review (Months 1–2)',
          desc: 'Systematic literature review, stakeholder interviews with 15 shrimp farmers across Negombo, Chilaw, and Puttalam districts, and formal requirements specification using IEEE 830 standard.',
        },
        {
          title: 'Phase 2 — Hardware Prototyping & Data Collection (Months 3–5)',
          desc: 'Deployment of Raspberry Pi 4-based sensor nodes with Atlas Scientific probes at pilot farms. Collection of 6-month water quality datasets and annotated disease image datasets (1,200+ images).',
        },
        {
          title: 'Phase 3 — Model Development & Training (Months 4–7)',
          desc: 'Development of CNN (ResNet-50 backbone) for disease detection, LSTM networks for water quality forecasting, and reinforcement learning agents for feed optimisation. Models validated using k-fold cross-validation.',
        },
        {
          title: 'Phase 4 — Platform Development (Months 6–9)',
          desc: 'Full-stack web and mobile application development using Next.js, FastAPI, and React Native. Integration of real-time WebSocket data streams, cloud storage, and LLM-based AI assistant (GPT-4 fine-tuned on aquaculture domain).',
        },
        {
          title: 'Phase 5 — Evaluation & Deployment (Months 9–12)',
          desc: 'Controlled pilot deployment at 3 partner farms. Evaluation using RMSE (sensor accuracy), F1-score (disease detection), yield comparison (feeding system), and SUS questionnaire (usability). Final refinement based on results.',
        },
      ],
    },
  },
  {
    id: 'technologies',
    label: 'Technologies Used',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    color: 'from-teal-500 to-cyan-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    accent: 'bg-teal-500',
    content: {
      summary: 'A modern, cloud-native stack spanning IoT hardware, machine learning, full-stack web development, and mobile application layers.',
      points: [],
      techGroups: [
        {
          group: 'Frontend',
          items: ['Next.js 14 (App Router)', 'React 18', 'TypeScript', 'Tailwind CSS', 'Recharts / Chart.js'],
        },
        {
          group: 'Backend & APIs',
          items: ['FastAPI (Python)', 'Node.js / Express', 'WebSocket (real-time streaming)', 'REST API', 'JWT Authentication'],
        },
        {
          group: 'AI / Machine Learning',
          items: ['TensorFlow / Keras', 'PyTorch (ResNet-50 CNN)', 'LSTM Time-Series Models', 'GPT-4 (Fine-tuned AI Assistant)', 'Scikit-learn'],
        },
        {
          group: 'IoT & Hardware',
          items: ['Raspberry Pi 4', 'Atlas Scientific pH & DO probes', 'Arduino sensors', 'ESP32 WiFi modules', 'MQTT Protocol'],
        },
        {
          group: 'Cloud & DevOps',
          items: ['AWS (EC2, S3, Lambda)', 'Cloudinary (media management)', 'GitHub Actions (CI/CD)', 'Docker / Docker Compose', 'PostgreSQL + Redis'],
        },
        {
          group: 'Mobile',
          items: ['React Native', 'Expo', 'Push Notifications (FCM)', 'Offline-first architecture'],
        },
      ],
    },
  },
];

/* ─── Page ─────────────────────────────────────────────── */
export default function DomainPage() {
  const [activeTab, setActiveTab] = useState('literature');
  const active = domainSections.find((s) => s.id === activeTab)!;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pt-16">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 sm:py-28 px-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-700/30 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Research Domain
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Domain
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore the research background, identified gaps, problem statement, objectives, methodology,
            and technology stack underpinning the AquaNext AI Shrimp Farm platform.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {domainSections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === s.id
                    ? `bg-gradient-to-r ${s.color} text-white shadow-md`
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                </svg>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center shadow-lg`}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={active.icon} />
              </svg>
            </div>
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest ${active.text} mb-1`}>Research Component</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{active.label}</h2>
            </div>
          </div>
          <p className={`text-sm sm:text-base leading-relaxed text-slate-600 max-w-4xl pl-1 border-l-4 ${active.border} pl-4 py-1`}>
            {active.content.summary}
          </p>
        </div>

        {/* Tech Groups (only for Technologies) */}
        {active.content.techGroups && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {active.content.techGroups.map((group, gi) => (
              <div
                key={gi}
                className={`rounded-2xl border ${active.border} ${active.bg} p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
              >
                <h3 className={`text-sm font-bold uppercase tracking-wider ${active.text} mb-4`}>{group.group}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-2 text-slate-700 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${active.accent} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Standard Points */}
        {active.content.points.length > 0 && (
          <div className="space-y-5">
            {active.content.points.map((point, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl border ${active.border} bg-white hover:${active.bg} p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${active.color} rounded-l-2xl`} />
                <div className="pl-4">
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`mt-0.5 w-6 h-6 rounded-lg bg-gradient-to-br ${active.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pl-9">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Research Paper CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Full Research Paper
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Read the Complete Research Paper
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-3 max-w-2xl mx-auto">
            The full AquaNext research paper documenting platform design, experimental results, and findings is available upon request. Email us to receive access.
          </p>
          <p className="text-cyan-400 text-sm font-semibold mb-8">
            📧 deranindu@gmail.com
          </p>
          <a
            href="mailto:deranindu@gmail.com?subject=Request%20for%20AquaNext%20Research%20Paper&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20access%20to%20the%20full%20AquaNext%20research%20paper.%0A%0AName%3A%20%0AInstitution%2FOrganisation%3A%20%0AReason%20for%20request%3A%20%0A%0AThank%20you."
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/40 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Request Access via Email
          </a>
        </div>
      </section>

    </div>
  );
}
