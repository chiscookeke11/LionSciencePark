import { startupData } from "@/Data/StartupsData";
import Image from "next/image";
import Marquee from "react-fast-marquee";



export default function StartupHero() {
    return (
        <section className="w-full h-[80vh] flex items-center justify-between gap-20 flex-col pt-20 " >

            <div className=" w-full max-w-4xl flex flex-col items-center gap-3 justify-center text-center px-[3%] " >
                <h1 className=" font-onest text-4xl md:text-6xl lg:text-7xl font-bold  ">Our Startups</h1>
                <p className=" text-xl md:text-2xl max-w-2xl ">Explore the startups nurtured at Lion Science Park UNN. From groundbreaking research to market-ready solutions, our incubated ventures are building the future of innovation in Nigeria and beyond.</p>
            </div>



            <div className="w-full  py-5  " >
                <Marquee speed={100} gradient={false} pauseOnHover  >
                    {
                        startupData.map((data, index) => (
                            <div key={index} className="size-[250px] md:size-[350px] mx-2 bg-gray-200 rounded-xs relative overflow-hidden " title={data.name} >
                                <div className="absolute inset-0 h-full w-full bg-black/15 z-10 hover:bg-transparent cursor-pointer transition-all duration-150 ease-in-out  " />
                                <Image src={data.image} alt="image" fill className="object-cover object-center " />
                            </div>
                        ))
                    }
                </Marquee>
            </div>


        </section>
    )
}