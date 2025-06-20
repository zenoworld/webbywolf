'use client'

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Section9() {
    const tabs = ["Research", "Plan", "Design"];
    const [activeTab, setActiveTab] = useState("Research");

    return (
        <motion.section
            className="section min-h-screen flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-black text-4xl font-bold mb-8">LOREM IPSUM DOLOR SIT AMET</h2>

                    <div className="flex bg-white rounded-md overflow-hidden w-full mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full py-2 px-4 text-lg font-semibold cursor-pointer border-1 border-gray-300 transition-all duration-300 text-black
                                    ${activeTab === tab 
                                        ? 'bg-gray-100' 
                                        : 'bg-white hover:bg-gray-100'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <p className="text-[#66686c] mb-6 w-[85%]">
                        Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, 
                        bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                    </p>

                    <div className="flex items-center text-[#0546D2] font-semibold cursor-pointer group">
                        <span>Check tools</span>
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-all" />
                    </div>
                </motion.div>

                <motion.div
                    className="w-full shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Image 
                        src="/sec9.png" 
                        alt="Handshake" 
                        width={700} 
                        height={500} 
                        className="object-contain w-full h-[300px] lg:h-auto" 
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
