import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="section h-auto sm:h-screen flex flex-col justify-center items-center  text-[#222]">

          
            <div className="  flex flex-col justify-center items-center relative">

                <div className="flex items-center mb-6">
                    <div className="bg-gray-300 px-6 py-3 font-bold text-xl text-black">
                        LOGO
                    </div>
                </div>

                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
                    LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. DUI.
                </h2>

                <p className="w-full sm:w-1/2 text-center mb-8">
                    Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
                </p>

                
                <button className="flex items-center bg-[#0546D2] text-white font-semibold px-6 py-2 rounded-sm shadow-md hover:bg-[#0039A6] transition">
                    Loreum Ipsum
                    <ArrowRight className="ml-2" />
                </button>
            </div>

        </section>
    );
}
