'use client';
import Image from 'next/image';

export default function Banner2() {
    return (
        <section className="relative h-screen w-full text-white flex justify-center items-center">
            <div className='w-full h-[90%] relative '>

                <Image
                    src="/banner/banner2_bg.png"
                    alt="Motorbike Banner"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="z-10"
                />

                <div className="absolute inset-0 bg-black/10 bg-opacity-60 z-20"></div>


                <div className="absolute top-8 left-8 z-20">
                    <div className="bg-gray-300 px-6 py-3 font-bold text-xl text-black">
                        LOGO
                    </div>
                </div>

                <div className="relative z-30 h-full flex flex-col justify-center items-center text-center  px-6 max-w-3xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight uppercase">
                        dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing 
                    </h1>

                </div>
            </div>

        </section>
    );
}
