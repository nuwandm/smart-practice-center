"use client";

import { motion } from "framer-motion";
import {
    CalendarCheck,
    Bell,
    Smartphone,
    Clock,
    Zap,
    ScanLine,
    CheckCircle2,
    ArrowRight,
    User,
    Phone,
    CalendarDays,
} from "lucide-react";

/* ── QR Code SVG (decorative, clinic-specific branding) ── */
function QRCodeSVG({ color = "#67e8f9" }: { color?: string }) {
    const cellSize = 9;
    const matrix = [
        [1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
        [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1],
        [1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0],
        [1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0],
        [0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1],
        [1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1],
        [1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0],
        [0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1],
        [0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0],
        [1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0],
        [1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1],
        [1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0],
        [1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0],
        [1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1],
        [1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1],
        [1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0],
    ];

    const size = 21;
    const padding = 12;
    const total = size * cellSize + padding * 2;

    return (
        <svg viewBox={`0 0 ${total} ${total}`} className="w-full h-full">
            {matrix.map((row, y) =>
                row.map((cell, x) =>
                    cell ? (
                        <rect
                            key={`${x}-${y}`}
                            x={x * cellSize + padding}
                            y={y * cellSize + padding}
                            width={cellSize - 1.5}
                            height={cellSize - 1.5}
                            fill={color}
                            rx="1.5"
                        />
                    ) : null
                )
            )}
        </svg>
    );
}

/* ── Mini phone mockup showing the booking form ── */
function PhoneMockup() {
    return (
        <div className="relative w-48 bg-slate-900 rounded-[2rem] border-2 border-slate-700 p-2 shadow-2xl">
            {/* Notch */}
            <div className="w-16 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
            {/* Screen content */}
            <div className="bg-slate-950 rounded-2xl p-3 space-y-2.5">
                <p className="text-cyan-400 text-[9px] font-black tracking-widest uppercase">Book Appointment</p>
                {/* Name field */}
                <div className="flex items-center gap-1.5 bg-slate-800/80 rounded-lg px-2 py-1.5">
                    <User className="w-2.5 h-2.5 text-slate-500 flex-shrink-0" />
                    <p className="text-slate-300 text-[9px]">Full Name</p>
                </div>
                {/* Phone field */}
                <div className="flex items-center gap-1.5 bg-slate-800/80 rounded-lg px-2 py-1.5">
                    <Phone className="w-2.5 h-2.5 text-slate-500 flex-shrink-0" />
                    <p className="text-slate-300 text-[9px]">Phone Number</p>
                </div>
                {/* Date field */}
                <div className="flex items-center gap-1.5 bg-slate-800/80 rounded-lg px-2 py-1.5">
                    <CalendarDays className="w-2.5 h-2.5 text-slate-500 flex-shrink-0" />
                    <p className="text-slate-300 text-[9px]">Select Date & Time</p>
                </div>
                {/* Button */}
                <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg px-2 py-1.5 text-center">
                    <p className="text-white text-[9px] font-bold">Confirm Booking</p>
                </div>
                {/* Confirmation state */}
                <div className="flex items-center justify-center gap-1 mt-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                    <p className="text-emerald-400 text-[8px] font-semibold">SMS confirmation sent!</p>
                </div>
            </div>
        </div>
    );
}

/* ── Data ── */
const steps = [
    {
        num: "01",
        title: "Patient Scans QR Code",
        desc: "Your clinic gets a unique QR code — display it at the reception desk or share it digitally. Works with any phone camera, no app install needed.",
        icon: ScanLine,
        accent: "#67e8f9",
        glow: "rgba(6,182,212,0.35)",
        gradient: "from-cyan-600 via-sky-500 to-cyan-800",
    },
    {
        num: "02",
        title: "Fills a 30-Second Form",
        desc: "A clean mobile-first form opens instantly. Patient enters name, contact number, and preferred appointment date & time slot.",
        icon: CalendarCheck,
        accent: "#818cf8",
        glow: "rgba(99,102,241,0.35)",
        gradient: "from-indigo-600 via-violet-500 to-indigo-800",
    },
    {
        num: "03",
        title: "Instant SMS Confirmation",
        desc: "The patient receives an SMS with their token number and estimated wait time. Your clinic dashboard updates in real-time — zero manual effort.",
        icon: Bell,
        accent: "#6ee7b7",
        glow: "rgba(16,185,129,0.35)",
        gradient: "from-emerald-600 via-teal-500 to-emerald-800",
    },
];

const pills = [
    { icon: Clock, label: "Available 24/7", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
    { icon: Zap, label: "30-Second Booking", color: "text-indigo-400", bg: "bg-indigo-400/10 border-indigo-400/20" },
    { icon: Smartphone, label: "No App Required", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
    { icon: CheckCircle2, label: "Auto SMS Confirmation", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 70, damping: 18 } },
};

/* ── Component ── */
export default function OnlineAppointment() {
    return (
        <section
            id="online-appointment"
            className="relative w-full py-28 bg-slate-950 border-t border-slate-900 overflow-hidden"
        >
            {/* Ambient blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -left-20 w-[700px] h-[700px] rounded-full bg-cyan-900/10 blur-[160px]" />
                <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[140px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-900/8 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-black tracking-[0.25em] uppercase mb-5">
                        <ScanLine className="w-3.5 h-3.5" />
                        Online Appointments
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white font-heading mt-2">
                        Book Your Visit —{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">
                            One Scan Away
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
                        No phone calls. No queues. Patients scan your clinic&apos;s QR code, fill a
                        30-second form, and they&apos;re in the queue — from anywhere, anytime.
                    </p>
                </motion.div>

                {/* Main grid: QR card + Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left: QR code card ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 55 }}
                        className="flex flex-col items-center"
                    >
                        <div className="relative">
                            {/* Outer glow */}
                            <div className="absolute inset-[-24px] rounded-[2rem] bg-cyan-500/5 blur-3xl" />
                            <div className="absolute inset-[-1px] rounded-[1.75rem] border border-cyan-400/15" />

                            {/* Card */}
                            <div
                                className="relative bg-slate-900/80 border border-slate-700/60 backdrop-blur-xl rounded-[1.75rem] p-8 shadow-2xl"
                                style={{ boxShadow: "0 0 80px rgba(6,182,212,0.12)" }}
                            >
                                {/* Card header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-[10px] font-black tracking-[0.22em] uppercase text-cyan-400">
                                            Dream Labs
                                        </p>
                                        <p className="text-white font-bold text-xl font-heading leading-tight">
                                            Smart PP
                                        </p>
                                    </div>
                                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                                        <ScanLine className="w-5 h-5 text-cyan-400" />
                                    </div>
                                </div>

                                {/* QR code with scanner animation */}
                                <div className="relative w-56 h-56 mx-auto">
                                    {/* Scanning line */}
                                    <motion.div
                                        animate={{ y: [0, 196, 0] }}
                                        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-2 right-2 h-[2px] z-10 rounded-full"
                                        style={{
                                            background: "linear-gradient(to right, transparent, rgba(6,182,212,0.9), transparent)",
                                            boxShadow: "0 0 10px rgba(6,182,212,0.7)",
                                        }}
                                    />
                                    {/* Corner brackets */}
                                    <div className="absolute top-0 left-0 w-7 h-7 border-t-[3px] border-l-[3px] border-cyan-400 rounded-tl" />
                                    <div className="absolute top-0 right-0 w-7 h-7 border-t-[3px] border-r-[3px] border-cyan-400 rounded-tr" />
                                    <div className="absolute bottom-0 left-0 w-7 h-7 border-b-[3px] border-l-[3px] border-cyan-400 rounded-bl" />
                                    <div className="absolute bottom-0 right-0 w-7 h-7 border-b-[3px] border-r-[3px] border-cyan-400 rounded-br" />
                                    {/* QR pattern */}
                                    <div className="w-full h-full p-2">
                                        <QRCodeSVG color="#67e8f9" />
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="mt-6 text-center space-y-1">
                                    <p className="text-slate-300 text-sm font-semibold">
                                        Scan to book your appointment
                                    </p>
                                    <p className="text-cyan-400/50 text-xs font-mono">
                                        book.smartpp.lk/your-clinic
                                    </p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-5 -right-5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
                                style={{ boxShadow: "0 4px 20px rgba(16,185,129,0.5)" }}
                            >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Confirmed!
                            </motion.div>
                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-5 -left-5 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
                                style={{ boxShadow: "0 4px 20px rgba(99,102,241,0.5)" }}
                            >
                                <Bell className="w-3.5 h-3.5" />
                                SMS Sent
                            </motion.div>
                        </div>

                        {/* Phone mockup below QR */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-12 flex items-end gap-6"
                        >
                            <div className="text-right">
                                <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">
                                    Patient sees
                                </p>
                                <p className="text-white font-semibold text-sm">
                                    A simple, beautiful
                                    <br />booking form
                                </p>
                            </div>
                            <PhoneMockup />
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Steps ── */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-8"
                        >
                            How It Works
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            className="space-y-4"
                        >
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={cardVariants}
                                        className="group flex items-start gap-5 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80 cursor-default"
                                        onMouseEnter={e =>
                                            (e.currentTarget.style.boxShadow = `0 0 32px ${step.glow}`)
                                        }
                                        onMouseLeave={e =>
                                            (e.currentTarget.style.boxShadow = "none")
                                        }
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                                            style={{ boxShadow: `0 4px 18px ${step.glow}` }}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <span
                                                className="text-[10px] font-black tracking-widest uppercase"
                                                style={{ color: step.accent }}
                                            >
                                                Step {step.num}
                                            </span>
                                            <h3 className="text-white font-bold font-heading text-lg mt-0.5 mb-1.5">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>

                                        <ArrowRight className="flex-shrink-0 w-5 h-5 text-slate-700 group-hover:text-slate-500 transition-colors mt-1" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTA note */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-8 text-slate-600 text-sm flex items-center gap-2"
                        >
                            <Smartphone className="w-4 h-4 text-slate-600" />
                            Works on any smartphone — iOS, Android, or basic feature phones via SMS.
                        </motion.p>
                    </div>
                </div>

                {/* Bottom benefit pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20 flex flex-wrap justify-center gap-3"
                >
                    {pills.map((pill, idx) => {
                        const Icon = pill.icon;
                        return (
                            <div
                                key={idx}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold ${pill.bg} ${pill.color}`}
                            >
                                <Icon className="w-4 h-4" />
                                {pill.label}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
