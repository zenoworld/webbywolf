"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Section11() {
    return (
        <motion.section
            className="section h-auto md:h-screen mt-0 lg:mt-20 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#222] mb-4">
                    LOREM IPSUM DOLOR SIT AMET
                </h2>
                <p className="text-[#222] text-sm sm:text-md lg:text-lg">
                    Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare.
                    Risus elit et fringilla habitant ut facilisi.
                </p>
            </div>

            <div className="relative w-full h-[70%] mx-auto flex flex-col md:flex-row items-end sm:items-center justify-end">
                <motion.div
                    className="w-full md:w-1/2 h-full block md:absolute left-0 top-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Image
                        src="/sec11/sec11.png"
                        alt="Bikers"
                        width={1000}
                        height={600}
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                <motion.div
                    className="w-full md:w-[55%] h-full relative flex items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="h-2/3 rounded-md shadow-xl p-8 sm:p-12 bg-white">
                        <h3 className="font-semibold text-xl text-[#475569] mb-4">
                            Artist & Investor
                        </h3>
                        <p className="text-[#222] text-sm mb-10">
                            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing
                            auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac
                            arcu amet nisl quis est ...
                        </p>
                        <button className="flex items-center text-[#0546D2] font-semibold hover:underline">
                            Read Full Story
                            <ArrowRight className="ml-2" size={16} />
                        </button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="flex justify-center items-center mt-12 h-1/6 space-x-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="w-3 h-3 bg-[#80B0ED] rounded-full" />
                <div className="w-12 h-3 bg-[#1959AC] rounded-full" />
                <div className="w-3 h-3 bg-[#80B0ED] rounded-full" />
                <div className="w-3 h-3 bg-[#80B0ED] rounded-full" />
            </motion.div>
        </motion.section>
    );
}
