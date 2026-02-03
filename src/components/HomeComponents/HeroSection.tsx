"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion"
import Link from 'next/link';





export default function HeroSection() {
    return (
        <section className=" w-full min-h-screen flex flex-col lg:flex-row items-center justify-center md:justify-between  bg-white gap-20 py-10 md:py-32 overflow-hidden pl-[8%] pr-[2%] font-inter " >

            <div className='w-full max-w-xl  flex flex-col gap-5 items-start text-[#0a0a0a] ' >
                <h4 className="text-3xl md:text-5xl font-bold font-onest relative " >
                    WELCOME TO LION SCIENCE PARK
                    <motion.span
                        initial={{ width: "100%" }}
                        animate={{ width: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                        className="  h-full bg-white absolute top-0 left-0 "
                    >

                    </motion.span>
                </h4>

                <p className="text-lg md:text-2xl max-w-2xl font-inter relative text-[#0a0a0a] " >
                    Den of bright minds reshaping the future through innovation, collaboration, and groundbreaking discoveries.
                    <motion.span
                        initial={{ width: "100%" }}
                        animate={{ width: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
                        className="  h-full bg-white absolute top-0 left-0 " >

                    </motion.span>
                </p>

                <Link href={"/about"} className='w-fit ' >
                    <div className=" w-[250px] h-[60px] relative flex items-center justify-center rounded-lg group " >
                        <div className="bg-black w-full h-full absolute top-0 left-0 rounded-lg group-hover:left-2 group-hover:top-2 transition-all duration-300 ease-in-out "  ></div>
                        <button className=" text-white  cursor-pointer bg-[#008CC1] w-full h-full flex items-center justify-center rounded-lg py-3 px-5 absolute top-0 left-0 font-semibold tracking-wider group-hover:bg-[#00BFA6] border-2 border-transparent group-hover:border-black transition-all duration-300 ease-in-out " > Learn More</button>
                        <motion.span
                            initial={{ width: "100%" }}
                            animate={{ width: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
                            className="  h-full bg-white absolute top-0 left-0 " >

                        </motion.span>
                    </div></Link>
            </div>


            <motion.div
                className='w-[280px] h-[280px]  md:w-full md:h-full aspect-square md:aspect-auto max-w-xs md:max-w-xl lg:max-w-2xl flex items-center justify-center relative  '
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: -8, opacity: 100 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.9 }}
            >
                <Image src={"/homepage-images/arrow-svg.svg"} alt='arrow-svg' height={100} width={100} className='absolute -top-10 -left-12 md:-left-18 h-[80px] w-[80px] md:h-[100px] md:w-[100px] ' />
                <div className='w-full h-full md:h-[550px] border-dashed border-2 border-black rounded-md overflow-hidden z-10 ' >
                    <Image src={"/homepage-images/image.jpg"} alt='The building image' height={1000} width={1000} priority className='w-full h-full object-center object-cover  ' />
                </div>
            </motion.div>





        </section>
    )
}