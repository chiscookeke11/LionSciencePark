import { ourPartners } from "@/Data/PartnersData";
import Image from "next/image";



export default function OurPartners() {
    return (
        <section className="w-full bg-white flex items-center justify-center gap-14 py-24 px-3 " >

            {
                ourPartners.map((partner, index) => (
                    <div title={partner.title} key={index} className="h-32 w-32 flex items-center justify-center" >
                        <Image src={partner.img} height={500} width={500} alt={`${partner.title}-image`}  className="h-full w-full object-cover object-center " />
                    </div>
                ))
            }

        </section>
    )
}