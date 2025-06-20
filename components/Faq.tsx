'use client';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

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
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <section className="section h-auto sm:h-screen  mt-8">
            <div className="w-full h-full flex flex-col items-start justify-start ">

                <h2 className="text-3xl sm:text-4xl font-bold text-[#222] mb-12 ">
                    FREQUENTLY ASKED QUESTIONS (FAQS)
                </h2>
                <div className="w-full">
                    <div className="">
                        {faqData.map((item, index) => (
                            <div key={index} className="py-8 px-0 sm:px-8 md:px-16 relative border-t-2 border-[#E5E7EB] ">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="font-semibold text-md sm:text-lg text-[#222]">
                                        {item.question}
                                    </h3>
                                    {activeIndex === index ? (

                                        <Image
                                            src="/FAQ/min.png"
                                            alt="Collapse Icon"
                                            width={20}
                                            height={20}
                                            className="text-[#222] rotate-180"
                                        />
                                    ) : (
                                        <Image
                                            src="/FAQ/add.png"
                                            alt="Collapse Icon"
                                            width={20}
                                            height={20}
                                            className="text-[#222] rotate-180"
                                        />
                                    )}
                                </div>

                                {activeIndex === index && item.answer && (
                                    <p className="text-[#222] w-full sm:w-[50%] text-sm mt-4">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
