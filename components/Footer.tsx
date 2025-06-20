import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#171E2B] h-auto text-white px-4 py-8 lg:pt-8 lg:pb-20 lg:px-20 relative flex flex-col lg:flex-row gap-4">

            <div className="w-full lg:w-[20%] ">
                <div className="flex">
                    <div className="bg-[#D9D9D9] text-black font-bold text-[24px] py-3 px-8 shadow-lg">
                        LOGO
                    </div>
                </div>
            </div>


            <div className="w-full lg:w-[70%] flex flex-col md:flex-row gap-20   lg:my-20">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-20 w-full">

                    <div>
                        <h4 className="font-semibold text-[20px] mb-6">
                            Lorem Ipsum
                        </h4>
                        <ul className="space-y-3 text-[16px] text-gray-300">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>


                    <div>
                        <h4 className=" font-semibold text-[20px] mb-6">
                            Lorem Ipsum
                        </h4>
                        <ul className="space-y-3 text-[16px] text-gray-300">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-semibold text-[20px] mb-6">
                            Lorem Ipsum
                        </h4>
                        <ul className="space-y-3 text-[16px] text-gray-300">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className=" font-semibold text-[20px] mb-6">
                            Lorem Ipsum
                        </h4>
                        <ul className="space-y-3 text-[16px] text-gray-300">
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
}
