"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            description: "Ideal for solo practitioners.",
            price: "3,000",
            setup: "60,000",
            features: [
                "Single Doctor Profile",
                "Token & Queue Management",
                "Basic Patient History",
                "Standard Billing & Invoicing",
                "Email Support"
            ],
            popular: false,
            accentColor: "from-slate-400/10 to-slate-600/5",
            borderColor: "border-slate-700/60",
            checkColor: "text-slate-400",
        },
        {
            name: "Pro",
            description: "Perfect for multi-doctor clinics.",
            price: "5,000",
            setup: "60,000",
            features: [
                "Up to 5 Doctor Profiles",
                "Advanced Queue Syncing",
                "Full Pharmacy & Inventory",
                "Automated SMS Notifications",
                "Priority Email & Chat Support"
            ],
            popular: true,
            accentColor: "from-indigo-500/15 to-cyan-500/10",
            borderColor: "border-indigo-500/50",
            checkColor: "text-indigo-400",
        },
        {
            name: "Enterprise",
            description: "Full suite with priority SLA.",
            price: "Custom",
            setup: "Custom",
            features: [
                "Unlimited Doctor Profiles",
                "Multi-Clinic Support",
                "Advanced Analytics Dashboard",
                "Custom Feature Integrations",
                "24/7 Dedicated Support"
            ],
            popular: false,
            accentColor: "from-emerald-500/10 to-teal-500/5",
            borderColor: "border-emerald-700/40",
            checkColor: "text-emerald-400",
        }
    ];

    return (
        <section id="pricing" className="w-full py-24 bg-slate-900 border-t border-slate-800 text-slate-50 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-indigo-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-semibold tracking-wide text-emerald-400 uppercase">Investment</h2>
                        <p className="mt-2 text-3xl font-extrabold text-white sm:text-5xl font-heading">
                            Simple, transparent investment
                        </p>
                        <p className="mt-4 text-lg text-slate-400">
                            No hidden fees. Free 14-day trial on all plans to experience intelligence at your practice.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.12 }}
                            className="h-full pt-5"
                        >
                            <div className={`relative h-full flex flex-col rounded-2xl border ${plan.borderColor} bg-slate-900/80 backdrop-blur-md overflow-visible transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.popular ? 'shadow-indigo-500/20 shadow-xl' : ''}`}>

                                {/* Gradient top fill */}
                                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${plan.accentColor} pointer-events-none`} />

                                {/* Most Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                                        <span className="inline-flex items-center gap-1 bg-linear-to-r from-indigo-500 to-cyan-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                            <Sparkles className="h-3 w-3" />
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="relative flex flex-col flex-1 p-6">
                                    {/* Header */}
                                    <div className="mb-5">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="text-xl font-bold text-white font-heading">{plan.name}</h3>
                                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                                                14-Day Free Trial
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-400">{plan.description}</p>
                                    </div>

                                    {/* Price block */}
                                    <div className="mb-5 pb-5 border-b border-white/[0.07]">
                                        <div className="flex items-end gap-1 mb-2">
                                            {plan.price !== "Custom" && (
                                                <span className="text-sm font-semibold text-slate-400">LKR</span>
                                            )}
                                            <span className="text-4xl font-black text-white leading-none tracking-tight">{plan.price}</span>
                                            {plan.price !== "Custom" && (
                                                <span className="text-slate-400 text-sm mb-0.5">/mo</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
                                            <span className="text-xs text-slate-400">
                                                One-time setup:{" "}
                                                <span className="font-semibold text-amber-300">
                                                    {plan.setup !== "Custom" ? `LKR ${plan.setup}` : "Custom"}
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 flex-1 mb-6">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-indigo-500/15' : 'bg-white/5'}`}>
                                                    <Check className={`h-3 w-3 ${plan.checkColor}`} />
                                                </div>
                                                <span className="text-sm text-slate-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <a
                                        href="#contact"
                                        className={`block text-center w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                            plan.popular
                                                ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                                                : "bg-white/[0.07] hover:bg-white/12 border border-white/8 text-white"
                                        }`}
                                    >
                                        {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                                    </a>
                                </div>

                                {/* Bottom shine */}
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
