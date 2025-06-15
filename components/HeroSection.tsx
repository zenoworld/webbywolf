"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
const HeroSection = () => {
    return <>

        <Navbar />
        <section className="relative w-full h-screen flex items-center overflow-hidden">
            {/* Left Content */}
            <div className="z-10 px-8 sm:px-20 w-1/2 text-white">
                <h1 className="text-4xl sm:text-5xl font-heading text-[#222] leading-tight">
                    Lorem ipsum dolor <br /> sit amet
                </h1>

                <p className="mt-4 text-lg sm:text-xl text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Form */}
                <form className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <input
                        type="text"
                        placeholder="Enter something..."
                        className="w-full sm:w-[300px] px-4 py-3 rounded-md outline-none border border-gray-300"
                    />
                    <button
                        type="submit"
                        className="primary-btn hover:primary-btn-hover"
                    >
                        Submit <ArrowRight size={18} />
                    </button>
                </form>

                {/* Check icon */}
                <div className="mt-6 text-black flex items-center gap-2">
                    <div className="bg-[var(--color-primary)] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                    </div>
                    No credit card required
                </div>
            </div>

            {/* Right Image with clip path */}
        </section>
        <div className="absolute right-0 top-0 h-full w-[45%] clip-hero z-0">
            <Image
                src="/bike_hero.png"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
            />
        </div>
    </>

};

export default HeroSection;
