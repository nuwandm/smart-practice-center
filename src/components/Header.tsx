"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const featureLinks = [
    { title: "Intelligent Queue", href: "#features", desc: "Live tracking & estimates" },
    { title: "Patient History", href: "#features", desc: "Digital health records" },
    { title: "Smart Pharmacy", href: "#features", desc: "Integrated dispensing" },
    { title: "Automated Billing", href: "#features", desc: "Instant invoice generation" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${
                scrolled
                    ? "bg-slate-950/60 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            {/* Top shine line — visible when scrolled */}
            {scrolled && (
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`}
                            alt="Dream Labs Smart PP Logo"
                            width={34}
                            height={34}
                            className="object-contain shrink-0 rounded-full ring-1 ring-white/10"
                        />
                        <span className="text-base sm:text-lg font-semibold text-white/90 font-heading truncate tracking-tight">
                            Dream Labs Smart PP
                        </span>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-slate-300/80 hover:text-white hover:bg-white/[0.06] focus:bg-white/[0.06] data-[state=open]:bg-white/[0.06] rounded-lg text-sm font-medium transition-colors duration-200">
                                        Features
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[580px] bg-slate-950/90 backdrop-blur-2xl border border-white/[0.07] rounded-2xl shadow-2xl">
                                            {featureLinks.map((item) => (
                                                <li key={item.title}>
                                                    <NavigationMenuLink
                                                        href={item.href}
                                                        className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.06] hover:text-white group"
                                                    >
                                                        <div className="text-sm font-medium text-white/90 mb-0.5">{item.title}</div>
                                                        <p className="text-xs text-slate-400/80 group-hover:text-slate-300 transition-colors">{item.desc}</p>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="#pricing"
                                        className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-300/80 hover:text-white hover:bg-white/[0.06] focus:bg-white/[0.06] rounded-lg text-sm font-medium transition-colors duration-200`}
                                    >
                                        Investment
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="#faq"
                                        className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-300/80 hover:text-white hover:bg-white/[0.06] focus:bg-white/[0.06] rounded-lg text-sm font-medium transition-colors duration-200`}
                                    >
                                        FAQ
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="#online-appointment"
                                        className={`${navigationMenuTriggerStyle()} bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 focus:bg-cyan-400/20 rounded-lg text-sm font-semibold transition-colors duration-200 border border-cyan-400/20`}
                                    >
                                        Book Online
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right side: CTA + hamburger */}
                    <div className="flex items-center gap-2">
                        <a
                            href="#contact"
                            className="hidden sm:inline-flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.13] border border-white/[0.1] text-white rounded-full px-5 text-sm h-9 font-medium transition-all duration-300 backdrop-blur-sm hover:border-white/20"
                        >
                            Request Demo
                        </a>
                        <button
                            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile nav dropdown */}
            {mobileOpen && (
                <div className="md:hidden border-t border-white/[0.06] bg-slate-950/80 backdrop-blur-2xl px-4 py-4">
                    <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase px-3 mb-2">Features</div>
                    <div className="space-y-0.5 mb-3">
                        {featureLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="block px-3 py-2.5 text-slate-300/80 hover:text-white hover:bg-white/[0.06] rounded-xl text-sm transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="border-t border-white/[0.06] my-3" />
                    <div className="space-y-0.5 mb-3">
                        <Link href="#pricing" className="block px-3 py-2.5 text-slate-300/80 hover:text-white hover:bg-white/[0.06] rounded-xl text-sm transition-colors" onClick={() => setMobileOpen(false)}>
                            Pricing
                        </Link>
                        <Link href="#faq" className="block px-3 py-2.5 text-slate-300/80 hover:text-white hover:bg-white/[0.06] rounded-xl text-sm transition-colors" onClick={() => setMobileOpen(false)}>
                            FAQ
                        </Link>
                        <Link href="#online-appointment" className="block px-3 py-2.5 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-xl text-sm font-semibold transition-colors" onClick={() => setMobileOpen(false)}>
                            Book Online
                        </Link>
                    </div>
                    <div className="border-t border-white/[0.06] my-3" />
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-full bg-white/[0.08] hover:bg-white/[0.13] border border-white/[0.1] text-white rounded-full text-sm h-9 font-medium transition-all duration-300"
                    >
                        Request Demo
                    </a>
                </div>
            )}
        </header>
    );
}
