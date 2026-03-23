import { Activity, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-slate-950 pt-16 pb-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12 border-b border-slate-800 pb-12">

                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`} alt="Dream Labs Smart PP Logo" width={36} height={36} className="object-contain shrink-0 rounded-full" />
                            <span className="text-base sm:text-xl font-bold text-white font-heading">
                                Dream Labs Smart PP
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Transforming Sri Lankan medical practices with intelligent, modern patient management systems.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="#features" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#workflow" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/privacy" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/security" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    Data Security
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
                                <a href="mailto:dreamlabsinfo12@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">dreamlabsinfo12@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-indigo-400 shrink-0" />
                                <a href="tel:+94706151051" className="text-slate-400 hover:text-indigo-400 transition-colors">+94 70 615 1051</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-indigo-400 shrink-0" />
                                <span className="text-slate-400">
                                    Dream Labs Solutions<br />
                                    561,<br />
                                    Eldeniya,<br/>
                                    Kadwatha
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Dream Labs Smart PP. All rights reserved.</p>
                    <div className="flex items-center gap-1 mt-4 md:mt-0">
                        <span>Built for Sri Lanka with</span>
                        <Activity className="h-3 w-3 text-red-500 inline mx-1" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
