"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`} alt="Dream Labs Smart PP Logo" width={36} height={36} className="object-contain shrink-0 rounded-full" />
                        <span className="text-base sm:text-xl font-bold text-white font-heading truncate">
                            Dream Labs Smart PP
                        </span>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-2">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 focus:bg-slate-800 data-[state=open]:bg-slate-800">Features</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900 border-slate-800 text-slate-300">
                                            {featureLinks.map((item) => (
                                                <li key={item.title}>
                                                    <NavigationMenuLink
                                                        href={item.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                                                    >
                                                        <div className="text-sm font-medium leading-none text-white">{item.title}</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-slate-400">{item.desc}</p>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#pricing" className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 focus:bg-slate-800`}>
                                        Pricing
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#faq" className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 focus:bg-slate-800`}>
                                        FAQ
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right side: CTA + hamburger */}
                    <div className="flex items-center gap-2">
                        <Button className="hidden sm:inline-flex bg-indigo-600 text-white hover:bg-indigo-500 rounded-full px-5 text-sm">
                            Request Demo
                        </Button>
                        <button
                            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile nav dropdown */}
            {mobileOpen && (
                <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4">
                    <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase px-3 mb-2">Features</div>
                    <div className="space-y-1 mb-3">
                        {featureLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-sm transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="border-t border-slate-800 my-3" />
                    <div className="space-y-1 mb-3">
                        <Link
                            href="#pricing"
                            className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-sm transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#faq"
                            className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-sm transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            FAQ
                        </Link>
                    </div>
                    <div className="border-t border-slate-800 my-3" />
                    <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-500 rounded-full text-sm">
                        Request Demo
                    </Button>
                </div>
            )}
        </header>
    );
}
