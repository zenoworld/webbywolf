'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
    {
        image: "/sec_3/img1.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
        image: "/sec_3/img2.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
        image: "/sec_3/img3.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
        image: "/sec_3/img4.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
];

export default function Section4() {
    return (
        <motion.section
            className="py-16 px-4 lg:px-24 relative h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
        >
            <p className="text-md text-[color:var(--color-primary)] font-bold uppercase">Lorem ipsum dolor sit amet</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">LOREM IPSUM DOLOR SIT</h2>
            <p className="text-[#222222] mb-6 text-base w-full md:w-[50%]">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            <div className="rounded-lg flex justify-center">
                <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-12">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-xl overflow-hidden mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={100}
                                height={100}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                                <a href="#" className="text-blue-600 text-sm font-semibold border-b-2 border-b-blue-600">
                                    Learn More
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
