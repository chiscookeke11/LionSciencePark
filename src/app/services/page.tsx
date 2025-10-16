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
                    <div key={i} className="w-full max-w-sm flex flex-col gap-3 items-center justify-center cursor-pointer  h-full rounded-sm overflow-hidden group " >


                        <div className="w-full h-[280px] overflow-hidden flex items-center justify-center  " >
                            <Image src={data.image} height={500} width={500} alt="service-image" className=" h-full w-full object-cover object-center group-hover:scale-125 transition-all duration-300 ease-in-out " />
                        </div>

                        <div className="w-full h-full flex items-start justify-center flex-col gap-4 flex-1  px-5  " >
                            <h3 className=" font-bold text-2xl text-[#081623]  font-poppins text-start " > {data.title} </h3>
                            <p className=" font-semibold text-lg   text-start  text-gray-400 transition-all duration-300 ease-in-out font-signika  " > {data.description} </p>
                        </div>
                    </div>
                ))}



            </section>






        </div>
    )
}