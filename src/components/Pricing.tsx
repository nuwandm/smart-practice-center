"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            description: "Ideal for solo practitioners.",
            price: "15,000",
            features: [
                "Single Doctor Profile",
                "Token & Queue Management",
                "Basic Patient History",
                "Standard Billing & Invoicing",
                "Email Support"
            ],
            popular: false
        },
        {
            name: "Pro",
            description: "Perfect for multi-doctor clinics.",
            price: "35,000",
            features: [
                "Up to 5 Doctor Profiles",
                "Advanced Queue Syncing",
                "Full Pharmacy & Inventory",
                "Automated SMS Notifications",
                "Priority Email & Chat Support"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            description: "Full suite with priority SLA.",
            price: "Custom",
            features: [
                "Unlimited Doctor Profiles",
                "Multi-Clinic Support",
                "Advanced Analytics Dashboard",
                "Custom Feature Integrations",
                "24/7 Dedicated Support"
            ],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="w-full py-24 bg-slate-900 border-t border-slate-800 text-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-semibold tracking-wide text-emerald-400 uppercase">Pricing</h2>
                        <p className="mt-2 text-3xl font-extrabold text-white sm:text-5xl font-heading">
                            Simple, transparent pricing
                        </p>
                        <p className="mt-4 text-xl text-slate-400">
                            No hidden fees. Free 14-day trial on all plans to experience intelligence at your practice.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className={plan.popular ? "pt-5" : ""}
                        >
                            <Card className={`relative h-full flex flex-col bg-slate-900 border overflow-visible ${plan.popular ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20' : 'border-slate-800'} backdrop-blur-md transition-all duration-300 hover:-translate-y-2`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white font-heading flex items-center justify-between">
                                        {plan.name}
                                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10">14-Day Free Trial</Badge>
                                    </CardTitle>
                                    <CardDescription className="text-slate-400 pt-2">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="mb-8">
                                        <span className="text-4xl font-extrabold text-white">{plan.price !== 'Custom' ? 'LKR ' : ''}{plan.price}</span>
                                        {plan.price !== 'Custom' && <span className="text-slate-400 text-lg">/mo</span>}
                                    </div>
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-5 w-5 text-indigo-400 flex-shrink-0 mr-3" />
                                                <span className="text-slate-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className={`w-full h-12 text-base font-semibold ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                                        {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
