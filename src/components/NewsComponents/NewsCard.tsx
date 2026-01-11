import { NewsBlogType } from "@/Types/types";
import { CldImage } from "next-cloudinary";
import Link from "next/link";


interface RecentBlogCardProps {
    data: NewsBlogType
}

export default function NewsCard({ data }: RecentBlogCardProps) {
    return (
        <Link href={`/news/${data.id}`} className="w-full h-[430px] max-w-xs  md:max-w-sm min-h-[300px]   rounded-xl  border-2 border-black relative z-0 group " >

            <div className="w-full h-full absolute top-2 left-1.5 bg-black rounded-xl z-0 hidden group-hover:block transition-all duration-300 ease-in-out  " />


            <div className="flex flex-col items-center justify-between w-full h-full overflow-hidden gap-5 rounded-xl absolute top-0 left-0 z-20 bg-white " >
                <div className=" w-full bg-gray-300 h-[50%] border-b border-b-black overflow-hidden " >
                    <CldImage src={data.image} alt="image" height={500} width={500} crop={{ type: "auto", source: true }} className="object-cover object-center h-full w-full " />
                </div>

                <div className=" w-full flex flex-col items-start gap-3   py-2  h-[55%] px-4 " >
                    <p className="self-start text-sm font-normal " >
                        {data.publicationDate
                            ? new Date(data.publicationDate).toLocaleDateString("en-us", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            })
                            : "No date available"}
                    </p>
                    <h1 className="font-syne font-semibold text-2xl text-start font-onest " >{data.title} </h1>
                    <div dangerouslySetInnerHTML={{ __html: data.content.trim().slice(0, 60) + "..." }} className="flex items-center  text-sm font-normal text-start font-inter  flex-wrap  " />
                </div>
            </div>
        </Link>
    )
}

