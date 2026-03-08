"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, Smartphone } from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        icon: Zap,
        title: "Zero Chaos in Waiting Rooms",
        description: "Real-time synced displays and automated SMS notifications keep your patients informed and your clinic serene.",
        glow: "rgba(99,102,241,0.25)",
        iconBg: "bg-indigo-500/15",
        iconColor: "text-indigo-300",
        border: "border-indigo-400/15",
    },
    {
        icon: ShieldCheck,
        title: "Uncompromised Data Security",
        description: "Three-layer defence architecture ensuring complete patient privacy and full compliance with local data protection acts.",
        glow: "rgba(6,182,212,0.25)",
        iconBg: "bg-cyan-500/15",
        iconColor: "text-cyan-300",
        border: "border-cyan-400/15",
    },
    {
        icon: Globe,
        title: "Built for Sri Lanka",
        description: "Optimised for local clinic workflows with built-in LKR currency support and dual NIC format integrations.",
        glow: "rgba(52,211,153,0.25)",
        iconBg: "bg-emerald-500/15",
        iconColor: "text-emerald-300",
        border: "border-emerald-400/15",
    },
    {
        icon: Smartphone,
        title: "Accessible Anywhere",
        description: "Cloud-based platform fully responsive on mobile, tablet, and desktop for doctors working on the go.",
        glow: "rgba(167,139,250,0.25)",
        iconBg: "bg-violet-500/15",
        iconColor: "text-violet-300",
        border: "border-violet-400/15",
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 70, damping: 18 } },
};

export default function Benefits() {
    return (
        <section className="relative w-full py-28 border-t border-slate-800 text-slate-50 overflow-hidden">
            {/* Full background image */}
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Thinking.jpg`}
                alt="Benefits background"
                fill
                className="object-cover object-center scale-105"
            />

            {/* Apple-style layered scrims */}
            <div className="absolute inset-0 bg-slate-950/55 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-transparent to-slate-950/60 pointer-events-none z-10" />

            {/* Ambient colour blobs */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-[100px] pointer-events-none z-10" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:max-w-[55%]">

                {/* Section label + heading — left-aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-left max-w-xl mb-14"
                >
                    <p className="text-xs font-black tracking-[0.3em] text-indigo-400 uppercase mb-3">Why Choose Us</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight tracking-tight">
                        Built for{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                            modern clinics
                        </span>
                    </h2>
                    <p className="mt-4 text-base text-slate-300/80 leading-relaxed">
                        We focus on outcomes. Streamline operations, improve patient satisfaction, and eliminate administrative burden — all in one platform.
                    </p>
                </motion.div>

                {/* 2×2 glass tile grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {benefits.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <motion.div key={i} variants={cardVariants}>
                                {/* Apple "ultra-thin material" card */}
                                <div
                                    className={`group relative rounded-3xl border ${b.border} bg-white/[0.05] backdrop-blur-2xl p-6 h-full overflow-hidden transition-all duration-500 hover:bg-white/[0.09] hover:scale-[1.02]`}
                                    style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.07), 0 20px 60px -10px rgba(0,0,0,0.5)` }}
                                >
                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: `radial-gradient(ellipse at 30% 30%, ${b.glow}, transparent 70%)` }}
                                    />

                                    {/* Icon bubble */}
                                    <div className={`relative z-10 w-11 h-11 rounded-2xl ${b.iconBg} flex items-center justify-center mb-4 ring-1 ring-white/10`}>
                                        <Icon className={`h-5 w-5 ${b.iconColor}`} />
                                    </div>

                                    {/* Text */}
                                    <h3 className="relative z-10 text-base font-bold text-white font-heading mb-2 leading-snug">
                                        {b.title}
                                    </h3>
                                    <p className="relative z-10 text-xs text-slate-300/80 leading-relaxed">
                                        {b.description}
                                    </p>

                                    {/* Bottom shine line */}
                                    <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                </div>
            </div>
        </section>
    );
}
