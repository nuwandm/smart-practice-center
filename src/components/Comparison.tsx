"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
    { feature: "Patient Queue Tracking", manual: "Paper tokens, guesswork", smart: "Real-time digital display" },
    { feature: "Waiting Time Estimate", manual: "None — patients left anxious", smart: "Live SMS + screen updates" },
    { feature: "Patient Medical Records", manual: "Physical files, easy to lose", smart: "Secure digital history" },
    { feature: "Prescription Handling", manual: "Handwritten, prone to errors", smart: "Digital, auto-sent to pharmacy" },
    { feature: "Pharmacy Inventory", manual: "Manual stock count", smart: "Live tracking + expiry alerts" },
    { feature: "Billing & Invoicing", manual: "Manual calculation, slow", smart: "Auto-generated in one click" },
    { feature: "Multi-Doctor Support", manual: "Separate books per doctor", smart: "Real-time sync across all rooms" },
    { feature: "Financial Reports", manual: "End-of-day manual tallying", smart: "Instant dashboard analytics" },
];

export default function Comparison() {
    return (
        <section className="w-full py-24 bg-slate-950 border-t border-slate-900 text-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <h2 className="text-sm font-semibold tracking-wide text-rose-400 uppercase">Why Switch?</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-heading">
                        Manual process vs{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Smart PP</span>
                    </p>
                    <p className="mt-4 text-lg text-slate-400">
                        See exactly what you gain — and what you leave behind.
                    </p>
                </motion.div>

                {/* Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="overflow-x-auto rounded-2xl border border-slate-800"
                >
                    <table className="w-full text-sm min-w-[580px]">
                        <thead>
                            <tr className="border-b border-slate-800">
                                <th className="text-left px-5 py-4 text-slate-400 font-semibold w-[34%]">Feature</th>
                                <th className="px-5 py-4 w-[33%]">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-rose-500" />
                                        <span className="text-rose-400 font-bold">Manual Process</span>
                                    </div>
                                </th>
                                <th className="px-5 py-4 w-[33%]">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                                        <span className="text-indigo-400 font-bold">Dream Labs Smart PP</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <motion.tr
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className={`border-b border-slate-800/60 ${idx % 2 === 0 ? "bg-slate-900/20" : ""} hover:bg-slate-800/30 transition-colors`}
                                >
                                    {/* Feature */}
                                    <td className="px-5 py-4 font-medium text-slate-200">{row.feature}</td>

                                    {/* Manual */}
                                    <td className="px-5 py-4 text-center">
                                        <div className="flex items-start justify-center gap-2">
                                            <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-500 text-xs leading-relaxed">{row.manual}</span>
                                        </div>
                                    </td>

                                    {/* Smart PP */}
                                    <td className="px-5 py-4 text-center">
                                        <div className="flex items-start justify-center gap-2">
                                            <Check className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                                            <span className="text-slate-200 text-xs leading-relaxed font-medium">{row.smart}</span>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Bottom summary badges */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-wrap justify-center gap-3"
                >
                    {["8x faster billing", "Zero paper records", "Real-time queue sync", "Full pharmacy control", "Instant reports"].map((badge) => (
                        <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold">
                            <Check className="h-3 w-3" />
                            {badge}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
