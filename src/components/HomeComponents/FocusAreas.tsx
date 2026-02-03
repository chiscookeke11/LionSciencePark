'use client'

import { FocusAreasData } from "@/Data/FocusAreasData"
import { FocusAreaType } from "@/Types/types"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  data: FocusAreaType
}

const Card = ({ data }: CardProps) => {
  return (
    <div className=" w-full h-full max-w-xs md:max-w-lg  flex flex-col items-center justify-between gap-3 group cursor-pointer border-2 border-black rounded-xl py-8 px-4 bg-white shrink-0 ">
      <div className="w-[280px] md:w-full aspect-square flex items-center justify-center overflow-hidden rounded-[10px] bg-gray-400 transform transition-all duration-300 ease-in-out drop-shadow-2xl">
        <Image
          src={data.img}
          alt={`${data.title}-image`}
          width={500}
          height={500}
          className="object-cover object-center w-full h-full group-hover:scale-125 transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="w-full h-fit px-2 md:px-6 py-4 md:py-10">
        <h2 className="text-2xl md:text-3xl font-semibold font-onest mb-1 md:mb-3 text-[#008CC1]">
          {data.title}
        </h2>
        <p className="font-medium text-base md:text-lg text-[#0a0a0a] ">{data.description}</p>
      </div>
    </div>
  )
}

export default function FocusAreas() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"])

  return (
    <section className="w-full py-24 lg:py-48 px-[3%] md:px-[4%] flex justify-center font-inter bg-white ">
      <div className="w-full max-w-7xl hidden md:flex flex-row gap-20 lg:gap-48 items-center justify-between ">

        <div className="sticky top-[10%] self-start flex flex-col gap-4 " >
          <h1 className="text-3xl md:text-4xl font-onest font-semibold text-black shrink-0 ">
            Focus Areas
          </h1>
          <p className="text-base font-normal text-gray-500 " >Discover the key areas where we innovate, create impact, and drive meaningful change. Each focus area represents our commitment to excellence and progress.</p>
        </div>

        {/* Scroll Container */}
        <div ref={targetRef} className="w-full max-w-3xl relative h-[420vh]  ">
          <div className="w-full h-fit sticky top-[10%] max-w-3xl overflow-hidden  pt-28 ">
            <motion.div className="flex flex-col gap-20 h-full" style={{ y }}>
              {FocusAreasData.map((area, index) => (
                <Card data={area} key={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>




      {/* veiw on mobile devices  */}


      <div className="w-full flex flex-col items-center justify-center gap-10 md:hidden" >
        <h1 className="text-3xl md:text-4xl font-onest font-semibold text-black shrink-0 ">
          Focus Areas
        </h1>



        <div className="w-full h-fit grid grid-flow-col auto-cols-max gap-6 overflow-x-auto py-5">
          {FocusAreasData.map((area, index) => (
            <Card data={area} key={index} />
          ))}
        </div>

      </div>

    </section>
  )
}
