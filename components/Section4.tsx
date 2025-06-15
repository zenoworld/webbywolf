'use client';

import Image from 'next/image';
import React from 'react';

const brands = [
  { src: '/logos/hero.png', alt: 'Hero' },
  { src: '/logos/honda.png', alt: 'Honda' },
  { src: '/logos/bajaj.png', alt: 'Bajaj' },
  { src: '/logos/tvs.png', alt: 'TVS' },
  { src: '/logos/royal-enfield.png', alt: 'Royal Enfield' },
  { src: '/logos/yamaha.png', alt: 'Yamaha' },
  { src: '/logos/ktm.png', alt: 'KTM' },
  { src: '/logos/ather.png', alt: 'Ather' },
  { src: '/logos/ola-electric.png', alt: 'Ola Electric' },
  { src: '/logos/revolt.png', alt: 'Revolt' },
  { src: '/logos/ultraviolette.png', alt: 'Ultraviolette' },
  { src: '/logos/tork.png', alt: 'Tork Motors' },
];

const Section4 = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
