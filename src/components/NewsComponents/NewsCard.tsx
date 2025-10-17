import { NewsBlogType } from "@/Types/types";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";


interface RecentBlogCardProps {
    data: NewsBlogType
}

export default function NewsCard({data}: RecentBlogCardProps) {
    return (
          <Link href={`/news/${data.id}`} className="w-full h-full max-w-xs  md:max-w-none min-h-[300px] flex flex-col items-center justify-between font-poppins " >


            <div className=" w-full bg-gray-300 h-full " >
                <CldImage src={data.image} alt="image" height={500} width={500} crop={{type: "auto", source: true}} className="object-cover object-center h-full w-full " />
            </div>

            <div className=" w-full flex flex-col items-center gap-3   py-2 text-center  " >

                <h1 className="font-syne font-semibold text-xl " >{data.title} </h1>
                <div dangerouslySetInnerHTML= {{__html:  data.content.trim().slice(0, 60) + "..."}} className="flex items-center gap-1 text-sm font-normal "  />
                <div className="flex items-center gap-1 text-xs font-normal " > <p>{new Date(data.publicationDate).toLocaleDateString()} </p></div>
            </div>
        </Link>
    )
}

