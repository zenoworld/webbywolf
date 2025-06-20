'use client';
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur",
        answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    }
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <motion.section
            className="section h-auto sm:h-screen mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full h-full flex flex-col items-start justify-start">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#222] mb-12">
                    FREQUENTLY ASKED QUESTIONS (FAQS)
                </h2>

                <div className="w-full">
                    {faqData.map((item, index) => (
                        <div key={index} className="py-8 px-0 sm:px-8 md:px-16 relative border-t-2 border-[#E5E7EB]">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-semibold text-md sm:text-lg text-[#222]">
                                    {item.question}
                                </h3>

                                <Image
                                    src={activeIndex === index ? "/FAQ/min.png" : "/FAQ/add.png"}
                                    alt="Toggle Icon"
                                    width={20}
                                    height={20}
                                    className="text-[#222]"
                                />
                            </div>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.p
                                        key="content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-[#222] w-full sm:w-[50%] text-sm mt-4"
                                    >
                                        {item.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
