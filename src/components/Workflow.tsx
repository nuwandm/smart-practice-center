"use client";

import { motion } from "framer-motion";
import { UserPlus, Clock, Stethoscope, Pill, CreditCard } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Walk-In",
        subtitle: "A frictionless arrival",
        description: "Patient walks in and the receptionist captures details in seconds. A unique token is issued — zero paperwork, zero chaos.",
        icon: UserPlus,
        gradient: "from-indigo-600 via-violet-600 to-indigo-800",
        glow: "rgba(99,102,241,0.4)",
        accent: "#818cf8",
        num: "01",
    },
    {
        id: 2,
        title: "Waiting",
        subtitle: "Always in the know",
        description: "A live queue display shows the patient their exact position. Smart SMS alerts keep them informed without anxiety.",
        icon: Clock,
        gradient: "from-cyan-600 via-sky-500 to-cyan-800",
        glow: "rgba(6,182,212,0.4)",
        accent: "#67e8f9",
        num: "02",
    },
    {
        id: 3,
        title: "Consultation",
        subtitle: "Medicine meets technology",
        description: "The doctor opens a rich patient timeline — vitals, history, allergies. They prescribe digitally in seconds, fully audit-trailed.",
        icon: Stethoscope,
        gradient: "from-emerald-600 via-teal-500 to-emerald-800",
        glow: "rgba(16,185,129,0.4)",
        accent: "#6ee7b7",
        num: "03",
    },
    {
        id: 4,
        title: "Pharmacy",
        subtitle: "Precision dispensing",
        description: "The pharmacist receives the prescription instantly. They dispense with full stock tracking, expiry checks, and partial-fill support.",
        icon: Pill,
        gradient: "from-amber-600 via-orange-500 to-amber-800",
        glow: "rgba(245,158,11,0.4)",
        accent: "#fcd34d",
        num: "04",
    },
    {
        id: 5,
        title: "Checkout",
        subtitle: "Close the loop",
        description: "Billing is auto-generated from consultation + pharmacy data. One click — a branded receipt is printed. The cycle is complete.",
        icon: CreditCard,
        gradient: "from-rose-600 via-pink-500 to-rose-800",
        glow: "rgba(244,63,94,0.4)",
        accent: "#fda4af",
        num: "05",
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.94 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 70, damping: 18 } },
};

export default function Workflow() {
    return (
        <section id="workflow" className="relative w-full py-28 bg-slate-950 border-t border-slate-900 overflow-hidden">
            {/* Ambient blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-xs font-black tracking-[0.3em] text-cyan-400 uppercase mb-3">Workflow</h2>
                    <p className="text-4xl md:text-5xl font-black text-white font-heading">
                        The Journey of a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                            Patient
                        </span>
                    </p>
                    <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
                        A seamless timeline showcasing the frictionless patient lifecycle.
                    </p>
                </motion.div>

                {/* Connector line (desktop) */}
                <div className="hidden lg:block relative mb-[-20px]">
                    <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                </div>

                {/* Cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
                >
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div key={step.id} variants={cardVariants} className="group">
                                <div
                                    className="relative h-full rounded-2xl bg-slate-900/80 border border-slate-800/60 backdrop-blur-md p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:scale-[1.04]"
                                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${step.glow}`)}
                                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                                >
                                    {/* Ghost number */}
                                    <span
                                        className="absolute -bottom-3 -right-1 text-[90px] font-black leading-none select-none pointer-events-none"
                                        style={{ color: "rgba(255,255,255,0.03)" }}
                                    >
                                        {step.num}
                                    </span>

                                    {/* Step badge */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className="h-px w-5" style={{ background: step.accent }} />
                                        <span
                                            className="text-[9px] font-black tracking-[0.25em] uppercase"
                                            style={{ color: step.accent }}
                                        >
                                            Step {step.num}
                                        </span>
                                        <div className="h-px w-5" style={{ background: step.accent }} />
                                    </div>

                                    {/* Icon with orbiting rings */}
                                    <div className="relative w-24 h-24 mb-5 flex-shrink-0">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 rounded-full border border-dashed"
                                            style={{ borderColor: `${step.accent}35` }}
                                        />
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-2 rounded-full border border-dashed"
                                            style={{ borderColor: `${step.accent}20` }}
                                        />
                                        {/* Orbiting dot */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 7 + idx, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0"
                                        >
                                            <div
                                                className="absolute w-2.5 h-2.5 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                                style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}` }}
                                            />
                                        </motion.div>
                                        {/* Center icon */}
                                        <div
                                            className={`absolute inset-3 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl`}
                                            style={{ boxShadow: `0 6px 24px ${step.glow}` }}
                                        >
                                            <Icon className="h-8 w-8 text-white drop-shadow-lg" />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-xl font-black font-heading mb-1" style={{ color: step.accent }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs font-semibold italic mb-3">{step.subtitle}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>

                                    {/* Bottom accent bar */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ background: `linear-gradient(to right, transparent, ${step.accent}, transparent)` }}
                                    />
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
