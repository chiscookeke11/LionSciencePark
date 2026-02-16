"use client"

import { navLinkData } from "@/Data/navlinksData";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";







export default function Navbar() {
    const pathName = usePathname()
    const [showMobileMenu, setShowMobileMenu] = useState(false)


    useEffect(() => {
        document.body.style.overflowY = showMobileMenu ? "hidden" : "auto"

        return () => { document.body.style.overflowY = "auto" }
    }, [showMobileMenu])





    return (
        <nav className="w-full  py-3 md:py-5 px-4 lg:px-[9%]   flex items-center justify-between font-inter  z-50 border-b border-b-black bg-white  " >
            <Link href={"/"} >
                <Image src={"/logo/LSP-logo-blue-removeBG.png"} alt="logo" height={10} width={150} className="w-[100px] h-[50px] md:w-[150px] md:h-[60px] object-center object-cover  " />
            </Link>


            <ul className="hidden lg:flex items-center gap-8  " >
                {navLinkData.map((navlink, index) => (
                    <li key={index} className={` font-medium text-base ${pathName === navlink.url ? "text-[#00BFA6]" : "text-black"}  hover:text-[#00BFA6] duration-300 ease-in-out transition-colors   `} ><Link href={navlink.url} className=""  >{navlink.label}</Link> </li>
                ))}
            </ul>




            <Link href={"/#contact-us"} >
                <div className=" w-[200px] h-[60px] relative hidden lg:flex items-center justify-center rounded-xl group " >
                    <div className="bg-black w-full h-full absolute top-0 left-0 rounded-lg group-hover:left-2 group-hover:top-2 transition-all duration-300 ease-in-out "  ></div>
                    <button className=" text-white  font-inter cursor-pointer bg-[#008CC1] w-full h-full flex items-center justify-center rounded-lg py-3 px-5 absolute top-0 left-0 font-semibold tracking-wider group-hover:bg-[#00BFA6] border-2 border-transparent group-hover:border-black transition-all duration-300 ease-in-out " > Contact Us</button>
                </div>
            </Link>



            <button className="text-[#008CC1] lg:hidden  " onClick={() => setShowMobileMenu(true)} ><Menu size={33} /> </button>





            <div className={`h-screen fixed top-0 left-0 w-full bg-[#081623] z-50  duration-300 ease-in-out transition-all py-6 px-7 flex flex-col items-start gap-7 ${showMobileMenu ? "translate-x-0" : "translate-x-[100%]"} `} >
                <button className="text-[#008CC1] lg:hidden ml-auto " onClick={() => setShowMobileMenu(false)} ><X size={38} /> </button>

                <ul className="flex flex-col items-start gap-10  " >
                    {navLinkData.map((navlink, index) => (
                        <li key={index} className={` font-medium text-lg ${pathName === navlink.url ? "text-[#008CC1]" : "text-white"}  hover:text-[#008CC1] duration-300 ease-in-out transition-colors    `} ><Link href={navlink.url} onClick={() => setShowMobileMenu(false)}  >{navlink.label}</Link> </li>
                    ))}
                </ul>


                <div className=" w-[200px] h-[60px] relative flex items-center justify-center rounded-xl group " >
                    <div className="bg-black w-full h-full absolute top-0 left-0 rounded-lg group-hover:left-2 group-hover:top-2 transition-all duration-300 ease-in-out "  ></div>

                    <Link href={"/#contact-us"} >
                        <button
                            onClick={() => {
                                setShowMobileMenu(false);
                            }}
                            className=" text-white  font-inter text-lg cursor-pointer bg-[#008CC1] w-full h-full flex items-center justify-center rounded-lg py-2 px-5 absolute top-0 left-0 font-semibold tracking-wider group-hover:bg-[#00BFA6] border-2 border-transparent group-hover:border-black transition-all duration-300 ease-in-out " > CONTACT US</button>
                    </Link>
                </div>
            </div>

        </nav>
    )
}