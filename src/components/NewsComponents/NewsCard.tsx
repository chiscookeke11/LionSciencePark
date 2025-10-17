import { NewsBlogType } from "@/Types/types";
import Image from "next/image";
import Link from "next/link";


interface RecentBlogCardProps {
    data: NewsBlogType
}

export default function NewsCard({data}: RecentBlogCardProps) {
    return (
          <Link href={`/news/${data.id}`} className="w-full h-full max-w-xs  md:max-w-none min-h-[300px] flex flex-col items-center justify-between font-poppins " >


            <div className=" w-full bg-gray-300 h-full " >
                <Image src={"/side.jpg"} alt="image" height={500} width={500} className="object-cover object-center h-full w-full " />
            </div>

            <div className=" w-full flex flex-col items-center gap-3   py-2 text-center  " >

                <h1 className="font-syne font-semibold text-xl " >{data.title} </h1>
                <div dangerouslySetInnerHTML= {{__html:  data.content.trim().slice(0, 60) + "..."}} className="flex items-center gap-1 text-sm font-normal "  />
                <div className="flex items-center gap-1 text-xs font-normal " > <p>{new Date(data.publicationDate).toLocaleDateString()} </p></div>
            </div>
        </Link>
    )
}

// "use client";
// import { CldImage } from 'next-cloudinary';

// // By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
// export default function Page() {
//   return (
//     <CldImage
//       src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
//       width="500" // Transform the image: auto-crop to square aspect_ratio
//       height="500"
//       crop={{
//         type: 'auto',
//         source: true
//       }}
//     />
//   );
// }