import { FocusAreasData } from "@/Data/FocusAreasData"
import { FocusAreaType } from "@/Types/types"
import Image from "next/image"






interface CardProps {
    data: FocusAreaType
}




const Card = ({ data }: CardProps) => {
    return (
        <div className=" w-full max-w-xs md:max-w-md h-fit  flex flex-col items-center justify-between gap-3   " >

            <div className="  w-full flex items-center justify-center " >
                <Image src={"/homepage-images/image1.webp"} alt={`${data.title}-image`} width={500} height={500} className="object-cover object-center h-[300px] w-full" />
            </div>
            <div className=" w-full h-fit  px-6 py-10 " >
                <h2 className="text-2xl font-semibold mb-3 text-[#008CC1]" >{data.title} </h2>
                <p className=" font-medium text-base text-white" >{data.description} </p>
            </div>
        </div>
    )
}

export default function FocusAreas() {
    return (
        <section className="w-full py-20 px-[3%] md:px-[4%] flex flex-col items-center gap-14  font-poppins bg-[#081623] " >
            <h1 className=" text-2xl md:text-4xl font-semibold text-[#008CC1] " >Focus Areas</h1>


            <div className="w-full  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 gap-y-10 place-items-center justify-items-center  " >
                {FocusAreasData.map((area, index) => (
                    <Card data={area} key={index} />
                ))}
            </div>

        </section>
    )
}