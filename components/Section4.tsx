'use client';

import Image from 'next/image';
import React from 'react';

const brands = [
  { src: '/brand_logo/b1.png', alt: 'Hero' },
  { src: '/brand_logo/b2.png', alt: 'Honda' },
  { src: '/brand_logo/b3.png', alt: 'Bajaj' },
  { src: '/brand_logo/b4.png', alt: 'TVS' },
  { src: '/brand_logo/b5.png', alt: 'Royal Enfield' },
  { src: '/brand_logo/b6.png', alt: 'Yamaha' },
  { src: '/brand_logo/b12.png', alt: 'Tork Motors' },
  { src: '/brand_logo/b7.png', alt: 'KTM' },
  { src: '/brand_logo/b8.png', alt: 'Ather' },
  { src: '/brand_logo/b9.png', alt: 'Ola Electric' },
  { src: '/brand_logo/b10.png', alt: 'Revolt' },
  { src: '/brand_logo/b11.png', alt: 'Ultraviolette' },
];

const Section4 = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 uppercase px-20">
         Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={100}
                height={80}
                className="object-contain hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
