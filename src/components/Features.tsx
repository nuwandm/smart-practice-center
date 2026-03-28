"use client";

import { motion, type Variants } from "framer-motion";
import {
    UsersRound,
    FileHeart,
    Pill,
    Receipt,
    ShieldCheck,
    LineChart,
    MessagesSquare,
    ClipboardList,
    BellRing,
    QrCode,
    CalendarDays
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 80, damping: 20 }
        }
    };

    const features = [
        {
            title: "Online Appointments via QR Code",
            description: "Patients scan your clinic's unique QR code, fill a 30-second form, and join the queue remotely — from anywhere, any time. Auto SMS confirmation included.",
            icon: QrCode,
            color: "text-teal-400",
            bg: "bg-teal-400/10",
            badge: "New",
        },
        {
            title: "Doctor & Clinic Calendar",
            description: "Visual scheduling calendar for doctors and clinic staff. Manage appointment slots, block unavailable times, set recurring schedules, and view daily or weekly bookings at a glance.",
            icon: CalendarDays,
            color: "text-violet-400",
            bg: "bg-violet-400/10",
        },
        {
            title: "Intelligent Queue & Token Management",
            description: "Real-time token tracking, doctor availability statuses (Start/Pause/Stop), and precise waiting time estimates.",
            icon: UsersRound,
            color: "text-indigo-400",
            bg: "bg-indigo-400/10"
        },
        {
            title: "Comprehensive Patient History",
            description: "Secure electronic medical records, vital signs trends, diagnosis history, and comprehensive medical summaries.",
            icon: FileHeart,
            color: "text-rose-400",
            bg: "bg-rose-400/10"
        },
        {
            title: "Smart Pharmacy & Dispensing",
            description: "Inventory management, robust stock alerts, expiry tracking, and flexible partial/full dispensing workflows.",
            icon: Pill,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10"
        },
        {
            title: "Seamless Billing & Invoicing",
            description: "Automated bill generation from consultations and prescriptions, discount/tax handling, and branded receipts.",
            icon: Receipt,
            color: "text-amber-400",
            bg: "bg-amber-400/10"
        },
        {
            title: "Multi-Role Access Control",
            description: "Tailored dashboards for Clinic Owners, Doctors, Receptionists, and Pharmacists with strict field-level data privacy.",
            icon: ShieldCheck,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10"
        },
        {
            title: "Real-Time Analytics & Reporting",
            description: "Daily financial summaries, doctor performance metrics, insightful patient demographics, and stock evaluations.",
            icon: LineChart,
            color: "text-fuchsia-400",
            bg: "bg-fuchsia-400/10"
        },
        {
            title: "Internal Staff Messaging",
            description: "Instant in-app messaging between doctors, receptionists, and pharmacists — keep your team aligned without leaving the platform.",
            icon: MessagesSquare,
            color: "text-sky-400",
            bg: "bg-sky-400/10"
        },
        {
            title: "Comprehensive Audit Logs",
            description: "Full tamper-proof activity trail — every record access, edit, and transaction is logged with timestamps and user identity.",
            icon: ClipboardList,
            color: "text-orange-400",
            bg: "bg-orange-400/10"
        },
        {
            title: "Low Stock & Expiry Alerts",
            description: "Proactive push notifications for medicines nearing expiry or falling below minimum stock thresholds — never run short again.",
            icon: BellRing,
            color: "text-red-400",
            bg: "bg-red-400/10"
        }
    ];

    return (
        <section id="features" className="w-full py-24 bg-slate-950 text-slate-50 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-semibold tracking-wide text-indigo-400 uppercase">Core Features</h2>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white font-heading">
                            Everything you need to run your clinic smoothly
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
                            Dream Labs Smart PP scales with your medical practice, offering an all-in-one comprehensive solution.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div key={idx} variants={itemVariants} className={`group h-full w-full ${features.length % 3 === 1 && idx === features.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                                <Card className={`h-full bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 relative group ${'badge' in feature ? 'border-teal-500/30 hover:bg-slate-800/60 hover:border-teal-400/50' : 'border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${feature.bg}`}>
                                                <Icon className={`h-6 w-6 ${feature.color}`} />
                                            </div>
                                            {'badge' in feature && (
                                                <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400">
                                                    {(feature as typeof feature & { badge: string }).badge}
                                                </span>
                                            )}
                                        </div>
                                        <CardTitle className="text-xl text-slate-100 font-heading">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-slate-400 text-base leading-relaxed">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
