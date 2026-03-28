"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 80, damping: 18 }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex items-start overflow-hidden bg-slate-950">

            {/* ── Background image ── */}
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Hero.png`}
                alt="Dream Labs Smart PP dashboard"
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                priority
            />

            {/* ── Professional gradient layers ── */}

            {/* Top: thin navbar blend */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none z-10" />

            {/* Bottom: slim fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />

            {/* Mobile: full dark overlay for readability */}
            <div className="absolute inset-0 bg-slate-950/70 pointer-events-none z-10 sm:hidden" />

            {/* Tablet+: left-to-right dark behind text, fully clear by 45% */}
            <div className="absolute inset-0 hidden sm:block pointer-events-none z-10" style={{ backgroundImage: "linear-gradient(to right, rgba(2,6,23,0.88) 0%, rgba(2,6,23,0.5) 30%, rgba(2,6,23,0.1) 55%, transparent 70%)" }} />

            {/* ── Content — bottom-left ── */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-20 w-full max-w-2xl px-5 sm:px-8 lg:px-16 pt-28 sm:pt-32 lg:pt-44 pb-12"
            >
                {/* Badge */}
                <motion.div variants={fadeInLeft} className="mb-5">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/25 text-[11px] font-black tracking-[0.2em] uppercase backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        The #1 Clinic Management Software in Sri Lanka
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeInLeft}
                    className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-5 font-heading leading-[1.06]"
                >
                    Transform your practice with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                        Intelligent Management
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeInLeft}
                    className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-lg leading-relaxed mb-8"
                >
                    Eliminate waiting room chaos with real-time queues, seamless billing, and
                    integrated pharmacy management. Purpose-built for modern Sri Lankan medical practitioners.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    variants={fadeInLeft}
                    className="flex flex-row flex-wrap gap-4"
                >
                    <a
                        href="https://private-practice-center-client.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center h-13 px-8 text-base bg-white text-slate-950 hover:bg-slate-100 rounded-full shadow-2xl font-bold transition-all"
                    >
                        Get Started Free
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#contact"
                        className="group inline-flex items-center h-13 px-8 text-base rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white backdrop-blur font-semibold transition-all"
                    >
                        Request a Demo
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
