import { FocusAreasData } from "@/Data/FocusAreasData"
import { FocusAreaType } from "@/Types/types"






interface CardProps {
    data: FocusAreaType
}




const Card = ({data}: CardProps) => {
    return (
        <div className=" w-full max-w-xs md:max-w-none h-full flex flex-col items-start gap-6 rounded-xl bg-white py-7 px-4 text-black  " >
            <span className=" w-20 h-20 rounded-full flex items-center justify-center bg-gray-200 text-[#4ab4b8] " >  {data.icon} </span>
            <h2 className="text-2xl font-semibold " >{data.title} </h2>
            <p className=" font-medium text-base " >{data.description} </p>
        </div>
    )
}

export default function FocusAreas() {
    return (
        <section className="w-full py-20 px-[3%] flex flex-col items-center gap-14  font-poppins" >
            <h1 className=" text-2xl md:text-4xl font-semibold text-white" >Focus Areas</h1>


            <div className="w-full  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-7 gap-y-10 place-items-center justify-items-center  " >
                {FocusAreasData.map((area, index) => (
                    <Card data={area} key={index} />
                ))}
            </div>

        </section>
    )
}