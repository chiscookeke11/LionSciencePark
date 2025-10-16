import { ServiceData } from "@/Data/ServicesData";
import Image from "next/image";



export default function Page() {
    return (
        <div className="bg-white" >

            {/* service hero section  */}
            <section className=" w-full h-[80vh] bg-black flex items-center justify-center flex-col gap-4 text-white  py-4 px-3 text-center bg-no-repeat bg-center bg-cover relative " style={{ backgroundImage: "url('/about-us/side.webp')" }} >
                <div className=" bg-black/45 absolute inset-0 h-full w-full " />

                <div className=" flex flex-col gap-3 z-30 " >
                    <h2 className=" font-poppins text-4xl md:text-8xl font-bold  " >Our Services</h2>
                    <p className="font-signika  text-lg md:text-2xl max-w-2xl " >Explore the wide range of innovative solutions and expertise we offer at Lion Science Park.</p>
                </div>
            </section>




            {/* services section  */}

            <section className=" w-full px-[6%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10 place-items-center justify-items-center " >



                {ServiceData.map((data, i) => (
                    <div key={i} className="w-full max-w-sm flex items-center justify-center relative cursor-pointer bg-red-500 min-h-[300px] h-full rounded-sm overflow-hidden group py-[200px] " >


                    <Image src={"/about-us/about-us-hero.webp"} fill alt="service-image" className="object-cover object-center" />
                    <div className=" bg-white/55 absolute inset-0 h-full w-full group-hover:bg-black/55 duration-300 ease-in-out " />
                    <div className="w-full h-full flex items-center justify-center flex-col gap-4 absolute top-0 left-0 z-40 px-5 " >
                        <h3 className=" font-bold text-3xl text-[#081623] group-hover:text-white duration-300 transition-all ease-in-out font-signika text-center " > {data.title} </h3>
                        <p  className=" font-semibold text-base opacity-0 group-hover:opacity-100  text-center  text-white transition-all duration-300 ease-in-out font-signika  " > {data.description} </p>
                    </div>
                </div>
                ))}



            </section>






        </div>
    )
}