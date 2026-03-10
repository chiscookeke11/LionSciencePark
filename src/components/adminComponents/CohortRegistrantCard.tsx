import { CohortFormData } from "@/Types/types"
import Link from "next/link"




interface CohortRegistrantCardProps {
    data: CohortFormData
}

export default function CohortRegistrantCard({ data }: CohortRegistrantCardProps) {
    return (
        <Link href={`/admin/cohort-registration/${data.id}`} className="w-full cursor-pointer flex flex-col items-start gap-2  shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 duration-150 ease-in-out text-black rounded-2xl py-4 px-5 border-3 border-black " >
            <h2 className="text-base md:text-lg " >
                <span className="font-semibold " >Startup Name: </span>
                {data.startup_name}
            </h2>


            <h3 className="text-base md:text-lg ">
                <span className="font-semibold " >Founder Email: </span>
                {data.founder_email}
            </h3>

            <h3 className="text-base md:text-lg ">
                <span className="font-semibold " >Category: </span>
                {data.industry_category}
            </h3>
        </Link>
    )
}