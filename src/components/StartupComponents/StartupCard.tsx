import { StartupDataType } from "@/Types/types";
import Image from "next/image";
import Link from "next/link";


interface StartupCardProps {
  data: StartupDataType;
}

export default function StartupCard({data}: StartupCardProps) {
    return (
         <div className="text-[#3a3a3a] w-full max-w-xs lg:max-w-none bg-white shadow-sm rounded-md flex flex-col lg:flex-row gap-3 overflow-hidden">

      {/* Image */}
      <div className="w-full h-64 lg:h-auto lg:flex-[2] flex items-center justify-center bg-gray-400 relative">
        <Image
          src={data.startup_image_url}
          fill
          alt={`${data.startup_name}-image`}
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:flex-[3] flex flex-col items-start gap-4 py-5 px-4">
        <h1 className="text-lg md:text-xl font-bold">
          {data.startup_name}
        </h1>

        <h2>
          <span className="font-semibold text-sm md:text-base">
            Founded by:
          </span>{" "}
          {data.founder_name}
        </h2>

        <div className="w-full flex flex-row text-[#008CC1]  sm:items-center gap-2 sm:gap-7">
          <a
            href={`mailto:${data.founder_email}`}
            className="text-xs"
            target="_blank"
          >
        {data.founder_email}
          </a>
          <span className="text-xs flex items-center gap-1 text-[#008CC1]  ">
           {data.phone_number}</span>
        </div>

        <p className="text-sm md:text-base text-gray-600">
          {data.startup_description}
        </p>

        <div className="mt-4 w-[200px] h-[50px] relative flex items-center justify-center rounded-xl group cursor-pointer">
          <div className="bg-black cursor-pointer w-full h-full absolute top-0 left-0 rounded-lg group-hover:left-2 group-hover:top-2 transition-all duration-300" />

          <Link href={data.startup_portfolio_url} target="_blank" >
            <button className="text-white text-base bg-[#008CC1] w-full h-full flex items-center justify-center rounded-lg absolute top-0 left-0 font-semibold tracking-wider group-hover:bg-[#00BFA6] border-2 border-transparent group-hover:border-black transition-all duration-300">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
    )
}