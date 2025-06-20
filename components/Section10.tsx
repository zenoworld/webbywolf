import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Section10() {
    return (
        <section className="relative w-full px-0  lg:px-15 xl:px-20 py-0 lg:py-10 h-auto sm:min-h-screen  bg-[#F1F1F1] ">

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative ">

                <div className="relative z-10  py-10 px-4 md:px-8 lg:px-0">
                    <h2 className="text-[#3b6fe0] lg:text-[#0546D2] text-3xl sm:text-4xl font-bold mb-6">
                        LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. <br /> DIGNISSIM TELLUS.
                    </h2>

                    <p className="text-white lg:text-[#222] text-sm sm:text-md mb-8">
                        Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar.
                        Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
                        Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                    </p>

                    <button className="flex items-center bg-[#1959AC] text-white font-semibold px-6 py-2 rounded-sm shadow-md hover:bg-[#0039A6] transition">
                        Loreum Ipsum
                        <ArrowRight className="ml-2" />
                    </button>
                </div>


                <div className="absolute inset-0 z-0 block lg:hidden">
                    <Image
                        src="/sec10/sec10_r.png"
                        alt="Bike Sales"
                        width={400}
                        height={500}
                        className="object-cover w-full h-full"
                    />

                    <div className="absolute inset-0 bg-black/60 bg-opacity-60 z-20"></div>
                </div>

                <div className="lg:hidden w-[80%] sm:w-[60%] h-auto z-20 bg-white mx-4 mb-4 p-8 shadow-xl">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                        Lorem ipsum dolor sit
                        <Image src="/sec10/pin.png" alt="pin" width={50} height={50} className="ml-2" />
                    </h3>
                    <div className="text-[#222] space-y-4 text-sm">
                        <p>Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</p>
                    </div>
                </div>
            </div>

            <div className="absolute left-5 bottom-[-100px] md:left-30 md:bottom-[-100px] bg-white shadow-xl p-8 w-[90%] max-w-md z-15 hidden lg:block">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                    Lorem ipsum dolor sit
                    <Image src="/sec10/pin.png" alt="pin" width={50} height={50} className="ml-2" />
                </h3>
                <div className="text-[#222] space-y-4 text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</p>
                </div>
            </div>

            <Image
                src="/sec10/sec10_r.png"
                alt="Bike Sales"
                width={400}
                height={500}
                className=" object-cover absolute right-5 top-[-60] w-[30%] h-[60%] xl:h-[80%] hidden lg:block"
            />

            <div className="absolute left-0 bottom-0  h-4 bg-gradient-to-r from-blue-700 via-green-600 to-purple-900 z-10 w-[90%]" />
        </section>
    )
}
