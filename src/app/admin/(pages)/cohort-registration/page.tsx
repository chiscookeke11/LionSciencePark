"use client"

import CohortRegistrantCard from "@/components/adminComponents/CohortRegistrantCard"
import { CohortFormData } from "@/Types/types"
import { useEffect, useState } from "react"
import { supabase } from "../../../../../lib/supabaseClient"



export default function Page() {
    const [registrants, setRegistrants] = useState<CohortFormData[] | null>(null)




    const fetchRegistrants = async () => {
        const { data, error } = await supabase.from("cohort_applications").select("*")

        if (error) {
            console.error("Error fetching data", error)
        }

        else {
            setRegistrants(data)
        }
    }

    useEffect(() => {
        fetchRegistrants()
    }, [])




    return (
        <div className="w-full flex h-fit min-h-screen px-[3%] py-10 bg-white font-poppins flex-col items-start gap-5 relative">
            <h1 className="text-xl md:text-3xl font-semibold text-[#008CC1]"> Cohort Registration </h1>




            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 place-items-center justify-items-center">
                {registrants?.map((registrant, i) => (
                    <CohortRegistrantCard key={i} data={registrant} />
                ))}
            </section>


        </div>
    )
}