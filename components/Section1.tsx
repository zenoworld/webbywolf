'use client';

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    img: "/sec1_r_first.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
  },
  {
    img: "/sec1_r_sec.png",
    text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
  },
  {
    img: "/sec1_r_third.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
  },
];

export default function Section1() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl flex flex-col lg:flex-row gap-8 items-center">


        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-md text-[color:var(--color-primary)] font-bold uppercase">
            Lorem ipsum dolor sit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            LOREM IPSUM <br />
            DOLOR SIT AMET
          </h2>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
            donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
            nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>

          <div className="space-y-6 mt-6">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 * index, ease: 'easeInOut' }}
                key={index}
                className="flex gap-4 items-center">
                <Image
                  src={item.img}
                  alt="item image"
                  width={100}
                  height={100}
                  className="rounded w-[100px] h-[100px] object-cover"
                />
                <p className="text-sm text-gray-800">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center mt-8">
            <button className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)] cursor-pointer text-white px-5 py-2 rounded flex items-center gap-2 text-sm font-semibold shadow">
              Loreum Ipsum
              <ArrowRight size={16} />
            </button>
            <div className="flex cursor-pointer items-center gap-2 text-sm text-[color:var(--color-primary)] font-semibold">
              <Phone size={16} />
              123456789
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center lg:w-1/2"
        >
          <Image
            src="/sec1_right.png"
            alt="bikes"
            width={600}
            height={400}
            className="w-[70%] h-auto rounded"
          />
        </motion.div>

      </div>
    </section>
  );
}
