import { ourPartners } from "@/Data/PartnersData";
import Image from "next/image";
import Marquee from "react-fast-marquee";



export default function OurPartners() {
    return (
        <section className="w-full bg-white flex flex-col items-center justify-center gap-10 py-18 px-3 font-poppins " >
            <h2 className=" text-3xl md:text-4xl font-semibold text-black ">Our Partners</ h2>

            <div className=" hidden md:flex items-center justify-center gap-10 lg:gap-14 w-full" >
                {
                    ourPartners.map((partner, index) => (
                        <div title={partner.title} key={index} className="h-32 w-32 flex items-center justify-center" >
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