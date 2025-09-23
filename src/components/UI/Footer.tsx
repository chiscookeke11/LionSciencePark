import { navLinkData } from "@/Data/navlinksData";
import { socialsData } from "@/Data/SocialLinksData";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
    return (
        <footer className="w-full pt-20 pb-10 px-10 bg-[#081623] text-white flex flex-col items-center justify-center  gap-18 font-signika " >


            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 place-items-start justify-items-end h-full p-1" >

                <div className=" w-full  " >
                    <Image src={"/logo/LSP-logo-blue-removeBG.png"} width={180} height={180} alt="lsp-logo" className="object-center w-[150px]  " />
                </div>


                <div className=" w-full p-1 flex flex-col items-start gap-4 " >
                    <h4 className="text-xl font-poppins text-[#008CC1] " >Location</h4>
                    <p className=" w-[90%] text-base  font-semibold text-gray-400 " >University of Nigeria, 1 Lion Science Park, Road, Nsukka, Enugu</p>
                </div>



                <div className=" w-full p-1 flex flex-col items-start gap-4 " >
                    <h4 className="text-xl font-poppins text-[#008CC1]" >Links</h4>
                    <ul className={`w-fit flex flex-col items-start gap-3  `} >
                        {navLinkData.map((navlink, index) => (
                            <li key={index} className=" text-sm   text-gray-400 hover:text-gray-200 transition-all duration-150" ><Link href={navlink.url} > {navlink.label}</Link> </li>
                        ))}
                    </ul>
                </div>




                <div className=" w-full p-1 flex flex-col items-start gap-4" >
                    <h4 className="text-xl font-poppins text-[#008CC1]">Socials</h4>
                    <ul className={`w-fit flex items-start gap-7  `} >
                        {socialsData.map((socialLink, index) => (
                            <li key={index} className=" text-sm  text-gray-400 hover:text-gray-200 transition-all duration-250 transform hover:scale-125 " ><Link href={socialLink.url} > {socialLink.icon}</Link> </li>
                        ))}
                    </ul>
                </div>


            </div>

          <hr className="bg-white/10 w-full h-0.5 border-none " />

            <small className="text-xs text-gray-400 font-medium " >© 2025 Lion Science Park. All rights reserved.</small>


        </footer>
    )
}