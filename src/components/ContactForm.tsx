"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MessageSquareText, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "94706151051";

const plans = ["Not sure yet", "Basic — LKR 15,000/mo", "Pro — LKR 35,000/mo", "Enterprise — Custom"];

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", clinic: "", phone: "", email: "", plan: plans[0], message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = [
            `👋 Hello! I'd like to request a demo for Dream Labs Smart PP.`,
            ``,
            `📋 *Contact Details*`,
            `• Name: ${form.name}`,
            `• Clinic: ${form.clinic}`,
            `• Phone: ${form.phone}`,
            `• Email: ${form.email}`,
            `• Interested Plan: ${form.plan}`,
            form.message ? `• Message: ${form.message}` : "",
        ].filter(Boolean).join("\n");

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
        setSubmitted(true);
    };

    return (
        <section id="contact" className="w-full py-24 bg-slate-950 border-t border-slate-900 text-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — pitch */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-semibold tracking-wide text-indigo-400 uppercase mb-3">Get In Touch</h2>
                        <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-6 leading-tight">
                            Ready to transform your clinic?
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10">
                            Fill in the form and our team will reach out on WhatsApp within 24 hours to set up a personalised live demo.
                        </p>

                        <ul className="space-y-5">
                            {[
                                { icon: CheckCircle2, text: "Free 14-day trial — no credit card required" },
                                { icon: CheckCircle2, text: "Live walkthrough tailored to your clinic size" },
                                { icon: CheckCircle2, text: "Onboarding support included in every plan" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <item.icon className="h-5 w-5 text-indigo-400 shrink-0" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 space-y-4">
                            <a href="mailto:dreamlabsinfo12@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                <Mail className="h-4 w-4 shrink-0" />
                                dreamlabsinfo12@gmail.com
                            </a>
                            <a href="tel:+94706151051" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                                <Phone className="h-4 w-4 shrink-0" />
                                +94 70 615 1051
                            </a>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                            >
                                <MessageSquareText className="h-4 w-4 shrink-0" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4">
                                        <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-heading">Message Sent!</h3>
                                    <p className="text-slate-400 text-sm max-w-xs">
                                        WhatsApp opened with your details. We&apos;ll get back to you within 24 hours.
                                    </p>
                                    <Button
                                        className="mt-6 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-sm"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send another message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Full Name *</label>
                                            <input
                                                name="name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Dr. Perera"
                                                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Clinic Name *</label>
                                            <input
                                                name="clinic"
                                                type="text"
                                                required
                                                value={form.clinic}
                                                onChange={handleChange}
                                                placeholder="Perera Medical Centre"
                                                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Phone *</label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                required
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+94 77 123 4567"
                                                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Email *</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="doctor@clinic.lk"
                                                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Interested Plan</label>
                                        <select
                                            name="plan"
                                            value={form.plan}
                                            onChange={handleChange}
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                        >
                                            {plans.map(p => <option key={p} value={p}>{p}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Message (optional)</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Tell us about your clinic setup or any specific questions..."
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full h-11 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold text-sm transition-all group"
                                    >
                                        Request Demo via WhatsApp
                                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                    <p className="text-center text-xs text-slate-500">
                                        We respond within 24 hours. No spam, ever.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
