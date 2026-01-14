import FlipCard from "@/components/UI/FlipCard";
import { ServiceData } from "@/Data/ServicesData";
import Image from "next/image";



export default function Page() {
    return (
        <div className="bg-white font-inter" >

            {/* service hero section  */}
            <section className=" w-full h-[70vh] bg-black flex items-center justify-center flex-col gap-4 text-white  py-4 px-3 text-center bg-no-repeat bg-center bg-cover relative overflow-hidden bg-fixed " style={{ backgroundImage: "url('/about-us/side.webp')" }} >
                <div className=" bg-black/45 absolute inset-0 h-full w-full " />

                <div className=" flex flex-col gap-3 z-30 " >
                    <h2 className=" font-onest text-4xl md:text-8xl font-bold  " >Our Services</h2>
                    <p className="font-inter  text-lg md:text-2xl max-w-2xl " >Explore the wide range of innovative solutions and expertise we offer at Lion Science Park.</p>
                </div>


                <Image src={"/service-images/wave-haikei.svg"} alt="wave" width={500} height={500} className="w-full absolute bottom-0 lg:bottom-[-200px] left-0 " />
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