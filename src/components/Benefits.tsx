"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Benefits() {
    const benefits = [
        {
            title: "Zero Chaos in Waiting Rooms",
            description: "Real-time synced displays and automated SMS notifications (via Notify.lk/Twilio) keep your patients informed and your clinic serene."
        },
        {
            title: "Uncompromised Data Security",
            description: "Three-layer defense architecture ensuring complete patient privacy and full compliance with local data protection acts."
        },
        {
            title: "Built for Sri Lanka",
            description: "Optimized for local clinic workflows with built-in LKR currency support and dual NIC format integrations."
        },
        {
            title: "Accessible Anywhere",
            description: "Cloud-based platform fully responsive on mobile, tablet, and desktop for doctors working on the go."
        }
    ];

    return (
        <section className="w-full py-24 border-t border-slate-800 text-slate-50 relative overflow-hidden">
            {/* Background image */}
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Thinking.jpg`}
                alt="Benefits background"
                fill
                className="object-cover object-center"
            />

            {/* Gradient overlays */}
            {/* Mobile: full dark overlay for readability */}
            <div className="absolute inset-0 bg-slate-950/80 pointer-events-none z-10 lg:hidden" />

            {/* Desktop: left-to-right — text readable on left, image clear on right */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none z-10" style={{ backgroundImage: "linear-gradient(to right, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.65) 30%, rgba(2,6,23,0.15) 60%, transparent 80%)" }} />

            {/* Subtle top/bottom edge fades */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-slate-950/60 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-slate-950/60 to-transparent pointer-events-none z-10" />

            {/* Existing glow blob */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 lg:mb-0"
                    >
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 font-heading">
                            Why Choose Dream Labs Smart PP?
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                            We focus on the outcome for your clinic. Streamline operations, improve patient satisfaction, and drastically reduce administrative load.
                        </p>

                        <dl className="space-y-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="relative">
                                    <dt>
                                        <CheckCircle2 className="absolute h-6 w-6 text-indigo-400 mt-1" />
                                        <p className="ml-10 text-xl font-medium leading-6 text-slate-100 font-heading">
                                            {benefit.title}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-10 text-base text-slate-400 leading-relaxed">
                                        {benefit.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
