import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Section7() {
  return (
    <section className="relative w-full px-0  lg:px-15 xl:px-20 py-10 sm:py-20 min-h-screen bg-[#F8F8F8] flex items-center justify-center mb-8">
      <div className="w-full flex flex-col lg:flex-row">


        <div className="w-full lg:w-1/2 hidden lg:block">
          <Image
            src="/sec7.png"
            alt="Riders"
            width={800}
            height={600}
            className="w-[80%] h-[80%] object-cover"
          />
        </div>


        <div className="w-full lg:w-1/2 flex flex-col justify-start md:justify-end px-4 md:px-8 py-10 lg:px-16 relative">


          <div className="absolute inset-0 z-0 block lg:hidden">
            <Image
              src="/sec7.png"
              alt="Riders"
              fill
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-black/70 bg-opacity-60 z-20"></div>
          </div>


          <div className="relative z-30">
            <p className="text-[#1959AC] font-semibold text-md mb-2">Lorem ipsum</p>
            <h2 className="text-3xl font-bold leading-tight text-white lg:text-[#222] mb-6">
              <span className="text-[#1959AC]">LOREM</span> IPSUM DOLOR SIT<br /> AMET CONSECTETUR. ENIM <br />DONEC.
            </h2>
            <p className="text-white lg:text-[#333] mb-8 w-[80%] text-base font-inter">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-[#e5e2e2] lg:text-[#222] font-semibold text-lg mb-10">
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
            </div>

            <Button className="bg-[#1959AC] w-[180px] rounded-sm text-white text-base px-6 py-2 hover:bg-[#0546D2]">
              Lorem Ipsum <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
