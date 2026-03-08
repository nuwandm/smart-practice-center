"use client";

import Link from "next/link";
import Image from "next/image";
import { Activity } from "lucide-react";
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

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/logo.png" alt="Dream Labs Smart PP Logo" width={40} height={40} className="object-contain" />
                        <span className="text-xl font-bold text-white font-heading">
                            Dream Labs Smart PP
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-2">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 focus:bg-slate-800 data-[state=open]:bg-slate-800">Features</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900 border-slate-800 text-slate-300">
                                            {[
                                                { title: "Intelligent Queue", href: "#features", desc: "Live tracking & estimates" },
                                                { title: "Patient History", href: "#features", desc: "Digital health records" },
                                                { title: "Smart Pharmacy", href: "#features", desc: "Integrated dispensing" },
                                                { title: "Automated Billing", href: "#features", desc: "Instant invoice generation" }
                                            ].map((item) => (
                                                <li key={item.title}>
                                                    <NavigationMenuLink
                                                        href={item.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                                                    >
                                                        <div className="text-sm font-medium leading-none text-white">{item.title}</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                                                            {item.desc}
                                                        </p>
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

                    <div className="flex items-center gap-4">
                        <Button className="bg-indigo-600 text-white hover:bg-indigo-500 rounded-full px-6">
                            Request Demo
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
