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
        <section className="w-full py-24 border-t border-slate-800 text-slate-50 relative overflow-hidden min-h-130 flex items-center">
            {/* Full background image */}
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Thinking.jpg`}
                alt="Benefits background"
                fill
                className="object-cover object-center"
            />

            {/* Subtle dark scrim so image isn't blown out */}
            <div className="absolute inset-0 bg-slate-950/30 pointer-events-none z-10" />

            {/* Edge fades */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-slate-950/70 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-slate-950/70 to-transparent pointer-events-none z-10" />

            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-center">

                    {/* Glass card — left column only */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/40 p-7 sm:p-8">
                            {/* Top accent line */}
                            <div className="w-10 h-1 rounded-full bg-linear-to-r from-indigo-400 to-cyan-400 mb-5" />

                            <h2 className="text-2xl font-extrabold text-white sm:text-3xl mb-3 font-heading leading-snug">
                                Why Choose Dream Labs Smart PP?
                            </h2>
                            <p className="text-sm text-slate-300 mb-7 leading-relaxed">
                                We focus on the outcome for your clinic — streamline operations, improve patient satisfaction, and reduce administrative load.
                            </p>

                            <dl className="space-y-5">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-white font-heading leading-5 mb-0.5">
                                                {benefit.title}
                                            </p>
                                            <p className="text-xs text-slate-300 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
