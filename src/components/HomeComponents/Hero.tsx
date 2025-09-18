"use client"

import { HeroSlideData } from "@/Data/HeroSlideData"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"


export const Hero = () => {
    const [index, setIndex] = useState(0)


    // Auto-slide every 8s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % HeroSlideData.length)
        }, 8000)
        return () => clearInterval(interval)
    }, [])





    return (
        <section className="text-white h-[91vh] flex items-center justify-center bg-transparent w-full overflow-hidden relative font-poppins   " >
            <AnimatePresence mode="wait" >
                <motion.div
                    key={HeroSlideData[index].id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 px-5 "
                >
                    <Image
                        src={HeroSlideData[index].img}
                        alt={HeroSlideData[index].title}
                        height={500}
                        width={500}
                        className=" absolute top-0 left-0 h-full w-full object-cover object-center "
                        priority
                    />

                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6 ">
                        <div className=" flex items-center justify-center flex-col gap-4 max-w-3xl " >
                            <h1 className={`${HeroSlideData[index].id === 1 ? "text-4xl md:text-7xl" : "text-3xl md:text-5xl"} font-bold`} >{HeroSlideData[index].title}</h1>
                            <p className="text-lg md:text-2xl">{HeroSlideData[index].desc}</p>
                        </div>
                    </div>



                </motion.div>

            </AnimatePresence>



        </section>
    )
}