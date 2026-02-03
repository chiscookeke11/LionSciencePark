import { ServiceDataType } from "@/Types/types";
import Image from "next/image";


interface FlipCardProps {
    data: ServiceDataType
}

export default function FlipCard({ data }: FlipCardProps) {
    return (
        <div className="hidden md:block flip-card max-w-xs md:max-w-[350px] group !text-[#0a0a0a] ">

            {/* the service ama  */}
            <div className="w-full h-full absolute inset-0 bg-[#00BFA6]  flex flex-col items-start justify-center gap-6 py-10 px-6 opacity-0 group-hover:opacity-100 duration-700 ease-in-out transition-all " >
                <h2 className=" text-lg md:text-xl font-onest font-semibold  text-[#0a0a0a] " > {data.title} </h2>
                <p className=" text-base md:text-lg " > {data.description} </p>

            </div>

            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Image src={data.image} alt="Avatar" height={500} width={500} className="w-full h-full object-cover object-center " />
                </div>
                <div className="flip-card-back ">
                    <h1 className="text-[#0a0a0a]!" > {data.title} </h1>
                    <p className="text-[#0a0a0a]!"> {data.description} </p>
                </div>
            </div>
        </div>
    )
}