"use client"

import Image from 'next/image';
import React from 'react';





export default function HeroSection() {
    return (
        <section className=" w-full min-h-screen flex flex-col lg:flex-row items-center justify-center md:justify-between  bg-white gap-20 py-32 overflow-hidden pl-[8%] pr-[2%] font-inter " >

            <div className='w-full max-w-xl  flex flex-col gap-5 items-start ' >
                <h4 className="text-2xl md:text-5xl font-bold font-onest  " >WELCOME TO LION SCIENCE PARK</h4>
                <p className="text-lg md:text-2xl max-w-2xl font-inter " >Den of bright minds reshaping the future through innovation, collaboration, and groundbreaking discoveries.</p>

                <div className=" w-[250px] h-[60px] relative flex items-center justify-center rounded-lg group " >
                    <div className="bg-black w-full h-full absolute top-0 left-0 rounded-lg group-hover:left-2 group-hover:top-2 transition-all duration-300 ease-in-out "  ></div>
                    <button className=" text-white  cursor-pointer bg-[#008CC1] w-full h-full flex items-center justify-center rounded-lg py-3 px-5 absolute top-0 left-0 font-semibold tracking-wider group-hover:bg-[#00BFA6] border-2 border-transparent group-hover:border-black transition-all duration-300 ease-in-out " > Learn More</button>
                </div>
            </div>


            <div className='w-[300px] h-[300px] bg-amber-900 md:w-full md:h-full aspect-square md:aspect-auto max-w-xs md:max-w-xl lg:max-w-2xl flex items-center justify-center  -rotate-8 relative  ' >
                <Image src={"/homepage-images/arrow-svg.svg"} alt='arrow-svg' height={100} width={100} className='absolute -top-10 -left-18 ' />
                <div className='w-full h-full md:h-[550px] border-dashed border-2 border-black rounded-md overflow-hidden z-10 ' >
                    <Image src={"/homepage-images/lsp-building.jpg"} alt='The building image' height={1000} width={1000} priority className='w-full h-full object-center object-cover  ' />
                </div>
            </div>





        </section>
    )
}