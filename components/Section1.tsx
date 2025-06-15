'use client';

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

const items = [
  {
    img: "/images/item1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
  },
  {
    img: "/images/item2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
  },
  {
    img: "/images/item3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
  },
];

export default function Section1() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-sm text-[color:var(--color-primary)] font-semibold uppercase">
            Lorem ipsum dolor sit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            LOREM IPSUM <br />
            DOLOR SIT AMET
          </h2>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
            donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
            nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>

          <div className="space-y-6 mt-6">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <Image
                  src={item.img}
                  alt={`item-${index}`}
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
                <p className="text-sm text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-6 items-center mt-6">
            <button className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)] text-white px-5 py-2 rounded flex items-center gap-2 text-sm font-semibold shadow">
              Loreum Ipsum
              <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-2 text-sm text-[color:var(--color-primary)] font-semibold">
              <Phone size={16} />
              123456789
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/bike-section.png"
            alt="bikes"
            width={600}
            height={400}
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
