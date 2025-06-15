'use client';
import Image from 'next/image';

export default function Banner() {
    return (
        <section className="relative h-screen w-full text-white flex justify-center items-center">
            <div className='w-full h-[90%] relative '>

                <Image
                    src="/banner_bg.png"
                    alt="Motorbike Banner"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="z-10"
                />

                <div className="absolute inset-0 bg-black/40 bg-opacity-60 z-20"></div>


                <div className="absolute top-8 left-8 z-20">
                    <div className="bg-white px-8 py-2 font-extrabold text-black text-xl shadow">
                        LOGO
                    </div>
                </div>

                <div className="relative z-30 h-full flex flex-col justify-center items-center text-center  px-6 max-w-5xl mx-auto"> 
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight ">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                    </h1>

                    <p className="mt-6 text-lg md:text-lg max-w-[80%] ">
                        Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
                    </p>

                    <p className="mt-4 text-lg md:text-lg max-w-[80%]">
                       Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
                    </p>
                </div>
            </div>

        </section>
    );
}
