"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <>
            <Navbar />

            <section className="section min-h-screen flex items-start justify-start md:items-center overflow-hidden">
                <div className="z-10 w-full h-full sm:w-1/2 text-white relative">

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl mb-4 font-heading text-[#222] leading-tight text-center sm:text-start"
                    >
                        Lorem ipsum dolor <br /> sit amet
                    </motion.h1>

                    <div className="w-full flex justify-center sm:hidden mb-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Image
                                src='/masongallery/m4.png'
                                alt="bg"
                                className="block sm:hidden"
                                width={150}
                                height={200}
                            />
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm md:text-md w-full px-4 sm:px-0 sm:w-[80%] lg:w-full text-[#000000] text-center sm:text-start"
                    >
                        Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
                    </motion.p>

                   
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <input
                            type="text"
                            placeholder="Enter something..."
                            className="w-full sm:w-[200px] md:w-[300px] px-4 py-3 rounded-md outline-none border-2 border-gray-400 sm:border-gray-300"
                        />
                        <button
                            type="submit"
                            className="primary-btn hover:primary-btn-hover rounded-sm"
                        >
                            Submit <ArrowRight size={18} />
                        </button>
                    </motion.form>

                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="mt-6 text-black flex items-center gap-2"
                    >
                        <div className="bg-[var(--color-primary)] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                            ✓
                        </div>
                        No credit card required
                    </motion.div>
                </div>
            </section>

        
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute right-0 top-0 h-full w-[60%] md:w-[45%] hidden sm:block clip-hero z-0"
            >
                <Image
                    src="/bike_hero.png"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
        </>
    );
};

export default HeroSection;
