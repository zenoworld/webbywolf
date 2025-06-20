'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Banner1() {
    return (
        <section className="relative h-screen w-full text-white flex justify-center items-center">
            <div className='w-full h-full sm:h-[90%] relative bg-amber-500'>

                <Image
                    src="/banner/banner1_bg.png"
                    alt="Motorbike Banner"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="z-10 object-contain"
                />

                <div className="absolute inset-0 bg-black/40 bg-opacity-60 z-20"></div>

                <div className="absolute top-2 left-2 sm:top-8 sm:left-8 z-20">
                    <div className="bg-gray-300 px-6 py-3 font-bold text-xl text-black">
                        LOGO
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1.5 }}
                    className="relative z-30 h-full flex flex-col justify-center items-center text-center px-2 w-full sm:max-w-5xl mx-auto"
                >
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight ">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                    </h1>

                    <p className="mt-6 text-sm sm:text-md md:text-lg w-full sm:w-[80%]">
                        Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
                    </p>

                    <p className="mt-4 text-sm sm:text-md md:text-lg w-full sm:w-[80%]">
                        Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
