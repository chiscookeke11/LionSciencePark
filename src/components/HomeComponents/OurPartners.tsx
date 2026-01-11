import { ourPartners } from "@/Data/PartnersData";
import Image from "next/image";
import Marquee from "react-fast-marquee";



export default function OurPartners() {
    return (
        <section className="w-full bg-white flex flex-col items-center justify-center gap-10 py-28 px-3 font-inter border-t-2 border-b-2 border-black " >
            <h2 className=" text-base md:text-xl font-semibold text-gray-500  ">Backed by leading industries</ h2>

            <div className=" hidden md:flex items-center justify-center gap-10 lg:gap-14 w-full " >
                {
                    ourPartners.map((partner, index) => (
                        <div title={partner.title} key={index} className="h-28 w-28 flex items-center justify-center" >
                            <Image src={partner.img} height={500} width={500} alt={`${partner.title}-image`} className="h-full w-full object-cover object-center " />
                        </div>
                    ))
                }
            </div>


            <div className="w-full flex items-center justify-center md:hidden " >
                <Marquee  >
                    {
                        ourPartners.map((partner, index) => (
                            <div title={partner.title} key={index} className="h-20 w-20 flex items-center justify-center mx-7" >
                                <Image src={partner.img} height={500} width={500} alt={`${partner.title}-image`} className="h-full w-full object-cover object-center " />
                            </div>
                        ))
                    }
                </Marquee>
            </div>

        </section>
    )
}