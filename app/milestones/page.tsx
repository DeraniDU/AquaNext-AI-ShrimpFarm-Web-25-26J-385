'use client';

import { useState } from 'react';

/* ─── Data ─────────────────────────────────────────────── */
const milestones = [
  {
    id: 1,
    phase: 'PP',
    title: 'Project Proposal',
    date: 'October 2024',
    status: 'completed',
    description:
      'Formal submission of the AquaNext project proposal outlining the research problem, objectives, scope, and preliminary methodology to the faculty evaluation panel.',
    deliverables: [
      'Problem Statement & Justification',
      'Research Objectives & Scope',
      'Preliminary Literature Review',
      'Project Timeline & Resource Plan',
      'Team Roles & Responsibilities',
    ],
    cloudinaryLink: 'https://collection.cloudinary.com/dti7ckwyy/fa1893e9242e36184f68003863a04823',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    id: 2,
    phase: 'PP1',
    title: 'Progress Presentation 1',
    date: 'January 2025',
    status: 'completed',
    description:
      'First formal progress evaluation covering IoT hardware prototyping, initial data collection from pilot farms, and early-stage ML model development for water quality prediction.',
    deliverables: [
      'IoT Sensor Node Prototype',
      'Pilot Farm Data Collection Report',
      'Water Quality ML Model (v1)',
      'Dashboard UI Wireframes',
      'Updated Literature Review',
    ],
    cloudinaryLink: 'https://collection.cloudinary.com/dti7ckwyy/36ed607f925a1ace385a37c90e47d617',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  },
  {
    id: 3,
    phase: 'PP2',
    title: 'Progress Presentation 2',
    date: 'March 2025',
    status: 'completed',
    description:
      'Second progress review demonstrating a working disease detection module, integrated AI-powered feeding system, and functional web dashboard with live IoT data streams.',
    deliverables: [
      'Disease Detection Model (CNN, ≥90% accuracy)',
      'AI Feeding Optimisation Module',
      'Integrated Web Dashboard (Beta)',
      'Real-Time WebSocket Integration',
      'Usability Evaluation Report (v1)',
    ],
    cloudinaryLink: 'https://collection.cloudinary.com/dti7ckwyy/9371e23f24dbb1257717c4400a729752',
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
  {
    id: 4,
    phase: 'FA',
    title: 'Final Assessment',
    date: 'May 2025',
    status: 'upcoming',
    description:
      'Comprehensive evaluation of the completed AquaNext platform, covering all modules, pilot deployment results, performance benchmarks, and full technical documentation.',
    deliverables: [
      'Complete Platform Deployment',
      'Pilot Farm Evaluation Results',
      'Final Research Paper',
      'System Documentation',
      'Presentation to Panel',
    ],
    cloudinaryLink: null,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    id: 5,
    phase: 'VIVA',
    title: 'Viva Voce',
    date: 'June 2025',
    status: 'upcoming',
    description:
      'Oral defence of the AquaNext research project before a panel of academic and industry experts, demonstrating deep understanding of all technical decisions and results.',
    deliverables: [
      'Oral Presentation',
      'Live System Demonstration',
      'Q&A with Evaluation Panel',
      'Research Contribution Summary',
    ],
    cloudinaryLink: null,
    color: 'from-red-500 to-pink-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
];

/* ─── Page ─────────────────────────────────────────────── */
export default function MilestonesPage() {
  const [active, setActive] = useState<number | null>(null);
  const completed = milestones.filter((m) => m.status === 'completed').length;
  const total = milestones.length;
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pt-16">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 sm:py-28 px-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-700/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full" />
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Project Progress
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Milestones
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Track the AquaNext research journey from initial proposal through to final viva defence, with links to all presentation materials.
          </p>

          {/* Overall Progress */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-semibold text-sm">Overall Progress</span>
              <span className="text-cyan-300 font-bold text-sm">{completed}/{total} Completed</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-slate-400 text-xs mt-2 text-right">{progress}% complete</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Progress Pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {milestones.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(active === m.id ? null : m.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                active === m.id
                  ? `bg-gradient-to-r ${m.color} text-white border-transparent shadow-md`
                  : `${m.bg} ${m.text} ${m.border} hover:shadow-md`
              }`}
            >
              {m.status === 'completed' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {m.phase}
            </button>
          ))}
        </div>

        {/* Timeline Cards */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-violet-400 to-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, idx) => {
              const isRight = idx % 2 === 0;
              const isActive = active === m.id || active === null;
              return (
                <div
                  key={m.id}
                  className={`relative flex items-start gap-6 sm:gap-0 transition-all duration-300 ${
                    !isActive ? 'opacity-40' : 'opacity-100'
                  } ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isRight ? 'sm:pr-10' : 'sm:pl-10'} pl-14 sm:pl-0`}>
                    <div
                      className={`group rounded-2xl border-2 ${m.border} bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer`}
                      onClick={() => setActive(active === m.id ? null : m.id)}
                    >
                      {/* Card Top Bar */}
                      <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${m.text} mb-1 block`}>{m.date}</span>
                            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-slate-800">{m.title}</h3>
                          </div>
                          <span
                            className={`shrink-0 ml-3 px-2.5 py-1 rounded-lg text-xs font-bold border ${
                              m.status === 'completed'
                                ? 'bg-green-50 text-green-700 border-green-200'
                                : 'bg-amber-50 text-amber-700 border-amber-200'
                            }`}
                          >
                            {m.status === 'completed' ? '✓ Completed' : '⏳ Upcoming'}
                          </span>
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{m.description}</p>

                        {/* Deliverables */}
                        <div className={`rounded-xl ${m.bg} border ${m.border} p-4 mb-4`}>
                          <p className={`text-xs font-bold uppercase tracking-wider ${m.text} mb-2`}>Key Deliverables</p>
                          <ul className="space-y-1.5">
                            {m.deliverables.map((d, di) => (
                              <li key={di} className="flex items-center gap-2 text-slate-700 text-xs">
                                <svg className={`w-3.5 h-3.5 ${m.text} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        {m.cloudinaryLink ? (
                          <a
                            href={m.cloudinaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${m.color} text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all`}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Presentation
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-400 text-sm font-semibold cursor-not-allowed">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Not Yet Available
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-6 flex flex-col items-center z-10">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-lg border-4 border-white`}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={m.icon} />
                      </svg>
                    </div>
                    <span className={`mt-1 text-[10px] font-black ${m.text} hidden sm:block`}>{m.phase}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Research Paper CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Research Paper
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Access our Full Research Paper
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-3 max-w-2xl mx-auto">
            The complete AquaNext research documentation is available upon request. Send us an email and we will share access to the full paper covering all phases of development, results, and recommendations.
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
