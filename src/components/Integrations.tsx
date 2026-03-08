"use client";

import { motion } from "framer-motion";
import { MessageSquare, Globe, Smartphone, Code2, CreditCard, ShieldCheck } from "lucide-react";

const integrations = [
    {
        name: "Notify.lk",
        category: "SMS Notifications",
        description: "Local Sri Lankan SMS gateway for real-time patient alerts.",
        icon: MessageSquare,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
        border: "border-indigo-400/20",
    },
    {
        name: "Twilio",
        category: "Global SMS",
        description: "International SMS backup for reliable worldwide delivery.",
        icon: Globe,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20",
    },
    {
        name: "Any Browser",
        category: "Cross-Platform",
        description: "Runs on Chrome, Safari, Firefox — no app install needed.",
        icon: Smartphone,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
    },
    {
        name: "LKR Payments",
        category: "Local Currency",
        description: "Full Sri Lankan Rupee support with Visa & Mastercard billing.",
        icon: CreditCard,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
    },
    {
        name: "Open API",
        category: "Custom Integrations",
        description: "RESTful API for connecting with your existing hospital systems.",
        icon: Code2,
        color: "text-fuchsia-400",
        bg: "bg-fuchsia-400/10",
        border: "border-fuchsia-400/20",
    },
    {
        name: "Data Security",
        category: "Three-Layer Protection",
        description: "End-to-end encryption compliant with Sri Lankan health data laws.",
        icon: ShieldCheck,
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        border: "border-rose-400/20",
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 80, damping: 18 } },
};

export default function Integrations() {
    return (
        <section className="w-full py-24 bg-slate-900 border-t border-slate-800 text-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-wide text-cyan-400 uppercase">Integrations</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-heading">
                        Works with the tools you trust
                    </p>
                    <p className="mt-4 text-lg text-slate-400">
                        Built with open standards and local partnerships for seamless connectivity from day one.
                    </p>
                </motion.div>

                {/* Integration cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {integrations.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                className={`group flex items-start gap-4 p-5 rounded-2xl bg-slate-800/40 border ${item.border} backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300`}
                            >
                                <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${item.bg} transition-transform duration-300 group-hover:scale-110`}>
                                    <Icon className={`h-5 w-5 ${item.color}`} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-white font-semibold text-sm font-heading">{item.name}</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.bg} ${item.color} uppercase tracking-wider`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}
