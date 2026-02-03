"use client"

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";



export default function AboutUs() {

    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

    return (
        <section ref={targetRef} className="py-24 px-6 flex flex-col md:flex-row items-center justify-evenly gap-16 font-inter bg-[#008CC1] "  >




            <div className=" h-[280px] w-[280px] lg:w-[600px] lg:h-[500px]  flex items-center justify-center relative    " >
                <motion.div className="absolute -top-3 md:-top-6 -right-6 md:-right-10 z-20   " style={{ rotate }} >
                    <Image src={"/homepage-images/splater.avif"} alt='arrow-svg' height={70} width={70} className="w-[40] h-[40] md:w-[70] md:h-[70] " />
                </motion.div>
                <div className="w-full h-full bg-black absolute top-3 left-3 rounded-2xl " />

                <Image src={"/homepage-images/ict.webp"} alt="image" height={500} width={500} className="w-full h-full object-center object-cover z-10 rounded-2xl" />


            </div>

            <div className="w-full max-w-2xl text-start " >
                <h2 className=" text-3xl md:text-4xl mb-2 font-semibold md:mb-4 text-white font-onest " >About Us</h2>
                <p className=" font-medium text-base md:text-xl text-black ">Lion Science Park (LSP) is the first university-based science park in Africa, established at the University of Nigeria, Nsukka (UNN). We serve as a hub where academia, industry, and government converge to drive innovation, research, and entrepreneurship.
                    <br />
                    <br />

                    Our mission is to transform ideas into sustainable solutions by supporting startups, researchers, and companies with incubation programs, co-working spaces, and technology transfer services. Through strategic partnerships and cutting-edge initiatives, we are building a vibrant innovation ecosystem that powers economic growth and societal development.</p>
            </div>
        </section>
    )
}