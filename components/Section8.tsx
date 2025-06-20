"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section8() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    useEffect(() => {
        const updateCardsPerView = () => {
            const width = window.innerWidth;
            if (width >= 1280) {
                setCardsPerView(4);
            } else if (width >= 1024) {
                setCardsPerView(3);
            } else if (width >= 768) {
                setCardsPerView(2);
            } else {
                setCardsPerView(1);
            }
        };

        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev - cardsPerView < 0 ? cards.length - cardsPerView : prev - cardsPerView
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev + cardsPerView >= cards.length ? 0 : prev + cardsPerView
        );
    };

    const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerView);
    if (visibleCards.length < cardsPerView) {
        visibleCards.push(...cards.slice(0, cardsPerView - visibleCards.length));
    }

    return (
        <motion.section
            className="section min-h-screen bg-[#0546D2]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full">

                <div className="flex justify-between items-start flex-col md:flex-row mb-12">
                    <div className="w-full">
                        <p className="text-white font-semibold text-lg mb-2">
                            Join other Sun harvesters
                        </p>
                        <div className="flex flex-col lg:flex-row justify-between items-start w-full h-auto sm:h-full pr-6 md:pr-18 ">
                            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                                LOREM IPSUM DOLOR SIT AMET
                            </h2>
                            <button className="bg-white text-black rounded px-10 sm:px-16 py-2 font-semibold hover:opacity-90 mb-4 md:mt-0">
                                Lorem Ipsum
                            </button>
                        </div>
                        <p className="text-[#CFE0FF] max-w-2xl">
                            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
                        </p>
                    </div>
                </div>

                <div className={`grid gap-6 transition-all duration-300 ${cardsPerView === 1 ? 'grid-cols-1' :
                    cardsPerView === 2 ? 'grid-cols-2' :
                        cardsPerView === 3 ? 'grid-cols-3' :
                            'grid-cols-4'
                    }`}>
                    {visibleCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-lg px-6 py-8 shadow-sm flex flex-col justify-between h-full ${index === currentIndex ? "xl:scale-y-110" : ""}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div>
                                <div className="text-[#0546D2] text-3xl mb-2">
                                    <Image src={card.icon} alt="Icon" width={40} height={40} />
                                </div>
                                <p className="text-[#222] mb-2">{card.text}</p>
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src={card.avatar}
                                    alt={card.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-3"
                                />
                                <p className="font-semibold">{card.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {cardsPerView !== 4 && (
                    <div className="flex justify-center gap-8 py-8">
                        <div
                            onClick={handlePrev}
                            className="w-[48px] h-[48px] rounded-full border-2 border-white text-white text-2xl flex justify-center items-center rotate-180 cursor-pointer"
                        >
                            →
                        </div>
                        <div
                            onClick={handleNext}
                            className="w-[48px] h-[48px] rounded-full border-2 border-white text-white text-2xl flex justify-center items-center pb-1 cursor-pointer"
                        >
                            →
                        </div>
                    </div>
                )}
            </div>

            <div className="xl:flex justify-start hidden gap-4 py-12">
                <div onClick={handlePrev} className="w-[48px] h-[48px] rounded-full border-2 border-white text-white text-2xl flex justify-center items-center rotate-180 cursor-pointer">→</div>
                <div onClick={handleNext} className="w-[48px] h-[48px] rounded-full border-2 border-white text-white text-2xl flex justify-center items-center pb-2 cursor-pointer">→</div>
            </div>

        </motion.section>
    );
}

const cards = [
    {
        icon: "/sec8/i1.png",
        text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
        name: "Jane Cooper",
        avatar: "/sec8/ava1.png",
    },
    {
        icon: "/sec8/i2.png",
        text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
        name: "Ralph Edwards",
        avatar: "/sec8/ava2.png",
    },
    {
        icon: "/sec8/i3.png",
        text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
        name: "Courtney Henry",
        avatar: "/sec8/ava3.png",
    },
    {
        icon: "/sec8/i4.png",
        text: "Hendrerit augue ut netus, quis integer netus. Sed rhoncus magnis habitasse habitant Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
        name: "Cameron Williamson",
        avatar: "/sec8/ava4.png",
    },
];
