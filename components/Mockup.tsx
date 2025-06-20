'use client'
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Mockup = () => {
    return (
        <motion.section 
            className="w-full h-screen sm:h-[500px] bg-gray-200 flex flex-col sm:flex-row items-center justify-center relative pt-4 pl-4 lg:px-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full sm:w-1/2 h-full flex flex-col items-start justify-center relative ">

                <motion.div 
                    className="w-full sm:w-[70%] relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg text-[color:var(--color-primary)] font-bold uppercase mb-4">Lorem Ipsum</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#222222] mb-4 leading-tight">
                        Lorem Ipsum Dolor<br/> Sit Amet
                    </h2>
                    <p className="text-[#222222] mb-6 text-base">
                        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
                    </p>

                    <div className="flex flex-col items-center sm:items-start sm:flex-row  gap-6 pt-8 ">
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
                </motion.div>
            </div>

            <motion.div 
                className="w-full sm:w-1/2 h-full mt-4 sm:mt-0 relative pr-20 sm:pr-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="/mockup/hold_phone.png"
                    alt="Mockup Image"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </motion.section>
    )
}

export default Mockup
