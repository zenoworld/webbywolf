'use client'
import React from "react"
import Image from "next/image"

const Mockup = () => {
    return (
        <section className="w-full h-[500px] bg-gray-200 flex items-center justify-center relative pt-4 px-4 lg:px-24">

            <div className="w-[50%] h-full flex flex-col items-start justify-center relative">

                <div className="w-[70%] relative">
                    <p className="text-lg text-[color:var(--color-primary)] font-bold uppercase mb-4">Lorem Ipsum</p>
                    <h2 className="text-4xl font-black text-[#222222] mb-4 leading-tight">
                        Lorem Ipsum Dolor<br/> Sit Amet
                    </h2>
                    <p className="text-[#222222] mb-6 text-base">
                        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
                    </p>

                    <div className="flex items-end gap-6 pt-8">
                        <Image
                            src="/mockup/playstore.png"
                            alt="Mockup Image"
                            width={150}
                            height={40}
                            className="w-[150px] h-[40px] object-cover rounded"
                        />
                        <Image
                            src="/mockup/appstore.png"
                            alt="Mockup Image"
                            width={150}
                            height={40}
                            className="w-[150px] h-[40px] object-cover  rounded"
                        />
                    </div>
                </div>


            </div>

            <div className="w-[50%] h-full  relative">
                <Image
                    src="/mockup/hold_phone.png"
                    alt="Mockup Image"
                    width={500}
                    height={500}
                    className="w-[80%] h-full object-cover"
                />
            </div>

        </section>
    )
}

export default Mockup