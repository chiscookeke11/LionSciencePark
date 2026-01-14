import FlipCard from "@/components/UI/FlipCard";
import { ServiceData } from "@/Data/ServicesData";
import Image from "next/image";



export default function Page() {
    return (
        <div className="bg-white font-inter" >

            {/* service hero section  */}
            <section className=" w-full h-fit flex items-center justify-center flex-col gap-12 py-20 px-3 text-center  font-inter " >

                <div className=" flex flex-col gap-3 z-30   " >
                    <h2 className="  text-3xl md:text-6xl lg:text-7xl font-bold font-onest " >Our Services</h2>
                    <p className="  text-lg md:text-2xl max-w-2xl " >Explore the wide range of innovative solutions and expertise we offer at Lion Science Park.</p>
                </div>


                <div className="w-full max-w-xs md:max-w-3xl lg:max-w-6xl h-75 md:h-125 lg:h-170 relative rounded-2xl border-2 border-black overflow-hidden "  >
                    <Image src={"/about-us/side.webp"} alt="image" height={1500} width={1500} className=" w-full h-full object-center object-cover " />
                </div>

            </section>




            {/* services section  */}

            <section className=" w-full max-w-7xl mx-auto px-[6%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10 place-items-center justify-items-center justify-center " >



                {ServiceData.map((data, i) => (

                    <FlipCard key={i} data={data} />
                ))}



            </section>






        </div>
    )
}