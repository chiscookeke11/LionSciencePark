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
    }, [])





    return (
        <nav className="w-full  bg-transparent py-3 px-4 lg:px-10 lg:pr-20  flex items-center justify-between font-poppins fixed top-0 left-0 z-50  " >
            <Link href={"/"} >
                <Image src={"/logo/LSP-logo-blue-removeBG.png"} alt="logo" height={10} width={150} className="w-[100px] h-[50px] md:w-[150px] md:h-[60px] object-center object-cover  " />
            </Link>


            <ul className="hidden lg:flex items-center gap-10  " >
                {navLinkData.map((navlink, index) => (
                    <li key={index} className={` font-medium text-base ${pathName === navlink.url ? "text-[#4ab4b8]" : "text-[var(--foreground)]"}  hover:text-[#4ab4b8] duration-300 ease-in-out transition-colors   `} ><Link href={navlink.url} className=""  >{navlink.label}</Link> </li>
                ))}
            </ul>

            <button className="text-[#4ab4b8] lg:hidden " onClick={() => setShowMobileMenu(true)} ><Menu size={33} /> </button>





            <div className={`h-screen fixed top-0 left-0 w-full bg-[#081623] z-50  duration-300 ease-in-out transition-all py-6 px-7 flex flex-col items-start gap-7 ${showMobileMenu ? "translate-x-0" : "translate-x-[100%]"} `} >
                <button className="text-[#4ab4b8] lg:hidden ml-auto " onClick={() => setShowMobileMenu(false)} ><X size={38} /> </button>

                <ul className="flex flex-col items-start gap-10  " >
                    {navLinkData.map((navlink, index) => (
                        <li key={index} className={` font-medium text-xl ${pathName === navlink.url ? "text-[#4ab4b8]" : "text-[var(--foreground)]"}  hover:text-[#4ab4b8] duration-300 ease-in-out transition-colors    `} ><Link href={navlink.url} onClick={() => setShowMobileMenu(false)}  >{navlink.label}</Link> </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}