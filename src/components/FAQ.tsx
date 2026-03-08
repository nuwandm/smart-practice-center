"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    const faqs = [
        {
            question: "Is the software fully compliant with Sri Lankan health regulations?",
            answer: "Yes, our platform is designed with local regulations in mind. It fully supports dual NIC formats and guarantees data residency and three-layer security for patient records."
        },
        {
            question: "Do I need technical knowledge to set up the queue display?",
            answer: "No technical knowledge is required. Any standard smart TV or monitor with a browser can connect to our secure live-queue URL immediately out of the box."
        },
        {
            question: "Can multiple doctors use the system at the same time?",
            answer: "Absolutely. Our 'Pro' and 'Enterprise' plans support multi-doctor concurrent clinics, allowing real-time sync across reception, consultation rooms, and the pharmacy."
        },
        {
            question: "How does the SMS notification system work?",
            answer: "We seamlessly integrate with SMSlenz.lk or Twilio. Patients receive an automatic SMS upon registration, and another update when their token is nearly called, drastically reducing waiting room congestion."
        },
        {
            question: "What happens to my data if my subscription ends?",
            answer: "You own your data. At any point, you can securely export all your patient records, consultation history, and financial reports in standard CSV and PDF formats."
        }
    ];

    return (
        <section id="faq" className="w-full py-24 bg-slate-950 border-t border-slate-900 text-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-semibold tracking-wide text-indigo-400 uppercase">Frequently Asked Questions</h2>
                        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl font-heading">
                            Answers to your queries
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Accordion className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-800 bg-slate-900/60 px-4 sm:px-6 rounded-xl overflow-hidden data-[state=open]:border-indigo-500/50 transition-all duration-300">
                                <AccordionTrigger className="text-left font-medium text-base sm:text-lg hover:no-underline hover:text-indigo-300 py-5 sm:py-6 text-slate-200">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
