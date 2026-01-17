import { TeamData } from "@/Data/TeamData";
import { Facebook, LinkedIn } from "@mui/icons-material";
import { Mail } from "lucide-react";
import Image from "next/image";






export default function Page() {
    return (
        <div className="bg-white" >
            {/* Team hero section  */}
            <section className=" w-full h-[70vh] bg-black flex items-center justify-center flex-col gap-4 text-white  py-4 px-3 text-center bg-no-repeat bg-center bg-cover relative  overflow-hidden bg-fixed " style={{ backgroundImage: "url('/team-images/team-meeting.png')" }} >
                <div className=" bg-black/55 absolute inset-0 h-full w-full " />

                <div className=" flex flex-col gap-3 z-30 " >
                    <h2 className=" font-onest text-4xl md:text-8xl font-bold  " >Our Team</h2>
                    <p className="font-inter  text-lg md:text-2xl max-w-2xl " >Meet the brilliant minds leading innovation and growth at Lion Science Park.</p>
                </div>
                <Image src={"/service-images/wave-haikei.svg"} alt="wave" width={500} height={500} className="w-full absolute bottom-0 lg:bottom-[-200px] left-0 " />

            </section>






            {/* Team members */}
            <section className=" w-full px-[2%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-10 place-items-center justify-items-center justify-center " >


                {TeamData.map((data, i) => (
                    <div key={i} className="w-full max-w-xs flex flex-col cursor-pointer items-start justify-center min-h-[480px] border-2 border-[#008CC1] shadow-md rounded-xl overflow-hidden  ">


                        {/* image  */}

                        <div className="w-full h-full flex-1 flex items-center justify-center overflow-hidden relative " >
                            <Image src={data.image} alt={`${data.name}-image`} fill className="object-center object-cover" />
                        </div>


                        <div className="w-full  flex flex-col pt-7  gap-6" >
                            <div className="px-5 flex flex-col items-center justify-center gap-1 " >
                                <h5 className=" font-onest text-xl font-semibold text-center  " >  {data.name} </h5>
                                <p className=" font-medium text-lg font-inter text-[#008CC1] text-center" >{data.position} </p>
                            </div>

                            <div className="w-full flex items-center" >

                                <a href={data.linkedInUrl} target="_blank" className="  w-1/3 flex items-center justify-center py-4 px-5 border-r border-t border-[#008CC1] hover:bg-[#008CC1] text-[#008CC1] hover:text-white transition-all duration-300 ease-in-out " > <LinkedIn /> </a>
                                <a href={data.facebookUrl} target="_blank" className=" w-1/3 flex items-center justify-center py-4 px-5 border-r  border-t border-[#008CC1] hover:bg-[#008CC1] text-[#008CC1] hover:text-white transition-all duration-300 ease-in-out" > <Facebook /> </a>
                                <a href={data.email} target="_blank" className=" w-1/3 flex items-center justify-center py-4 px-5  border-t border-[#008CC1] hover:bg-[#008CC1] text-[#008CC1] hover:text-white transition-all duration-300 ease-in-out"  > <Mail /> </a>

                            </div>

                        </div>
                    </div>
                ))}




            </section>
        </div>
    )
}