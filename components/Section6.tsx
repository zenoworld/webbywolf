'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Section6() {
  return (
    <motion.section 
      className="bg-[#F1F5F9] relative flex flex-col md:flex-row justify-between gap-2 px-4 md:px-12 lg:px-20 pt-16 w-full h-auto md:h-screen mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false}}
      transition={{ duration: 0.8 }}
    >

      <motion.div 
        className="w-full md:w-[49%] h-full flex flex-col justify-between"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >

        <div className="h-[65%] relative mb-4 md:mb-0">
          <div className="w-[75%] h-full ">
            <p className="text-[#1959AC] font-bold text-lg tracking-wide uppercase font-inter mb-2">
              No Limits
            </p>
            <h2 className="text-[#222222] text-3xl sm:text-4xl uppercase font-bold font-roboto-condensed leading-tight mb-6">
              Lorem ipsum dolor sit <br /> amet
            </h2>
            <p className="text-[#222222] text-base font-inter mb-6">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
              pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <Button className="bg-[#0546D2] hover:bg-[#1959AC] text-white font-inter rounded-sm">
              Loerum Ipsum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="w-[25%] md:w-[20%] h-full absolute top-0 right-0 flex items-end justify-center">
            <Image
              src="/masongallery/m6.png"
              alt="Decorative Image"
              width={200}
              height={200}
              className="w-full h-[50%] sm:h-2/3 md:h-1/2 object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="w-full h-[30%] relative flex items-center justify-between">
          <div className="w-[20%] h-full flex items-end justify-center">
            <Image
              src="/masongallery/m2.png"
              alt="Decorative Image"
              width={200}
              height={200}
              className="w-full h-full sm:h-[70%] object-cover shadow-lg"
            />
          </div>

          <div className="w-[75%] h-full relative">
            <Image
              src="/masongallery/m7.png"
              alt="Decorative Image"
              width={200}
              height={200}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

      </motion.div>

      <motion.div 
        className="w-full md:w-[49%] h-full flex flex-col justify-between relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 0.8}}
      >

        <div className="w-full h-[35%] mb-4 md:mb-0 overflow-hidden relative flex items-center justify-between">
          <div className="w-[20%] h-full relative flex items-end">
            <Image
              src="/masongallery/m4.png"
              alt="Decorative Image"
              width={200}
              height={200}
              className="w-full h-[90%] object-cover shadow-lg"
            />
          </div>
          <div className="w-[75%] h-full relative">
            <Image
              src="/masongallery/m3.png"
              alt="Decorative Image"
              width={200}
              height={200}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="w-full h-[45%] mb-4 md:mb-0">
          <Image
            src="/masongallery/m1.png"
            alt="Decorative Image"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-[10%] relative flex items-end justify-between overflow-hidden">
          <div className="w-[20%] h-full relative overflow-hidden">
            <Image
              src="/masongallery/m8.png"
              alt="Decorative Image"
              width={200}
              height={200}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="w-[75%] relative">
            <Image
              src="/masongallery/m5.png"
              alt="Decorative Image"
              width={200}
              height={200}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

      </motion.div>

    </motion.section>
  );
}
