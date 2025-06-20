'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '/sec5_l.png',
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
  },
  {
    icon: '/sec5_l.png',
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
  },
  {
    icon: '/sec5_l.png',
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
  },
]

export default function Section2() {
  return (
    <section className="w-full py-20 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl grid lg:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-md text-[color:var(--color-primary)] font-bold uppercase mb-4">Lorem ipsum dolor sit amet</p>
          <h2 className="text-3xl sm:text-4xl  font-extrabold text-[#222222] mb-4 leading-tight">
            LOREM IPSUM DOLOR SIT<br/> AMET CONSECTETUR. EU<br/> ELIT.
          </h2>
          <p className="text-[#222222] mb-6 text-base">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
            condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat
            lacus suspendisse ornare.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 * index, ease: 'easeInOut' }} 
                key={index} 
                className="flex gap-4">
                <Image
                  src={feature.icon}
                  alt="Feature Icon"
                  width={40}
                  height={40}
                  className="min-w-[40px] max-h-[40px]"
                />
                <div className='relative'>
                  <h3 className="font-semibold text-[#222222]">{feature.title}</h3>
                  <p className="text-sm text-[#222222] mt-1 w-[90%]">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/sec5_r.png"
            alt="Two men talking"
            width={600}
            height={500}
            className="w-[80%] h-auto rounded"
          />
        </motion.div>

      </div>
    </section>
  )
}
