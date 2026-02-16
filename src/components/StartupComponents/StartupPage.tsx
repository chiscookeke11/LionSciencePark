"use client"

import { useEffect, useState } from "react"
import StartupHero from "./StartupHero"
import StartupCard from "./StartupCard"
import { StartupDataType } from "@/Types/types"
import { supabase } from "../../../lib/supabaseClient"
import Spinner from "../UI/Spinner"



export default function StartupPage() {
    const [startupsData, setStatupData] = useState<StartupDataType[] | null>(null)
    const [loading, setLoading] = useState(true)



    const fetchStartupsData = async () => {

        setLoading(true)

        const { data, error } = await supabase.from("startups").select("*")

        if (error) {
            console.error("Failed to fetch startup data", error)
            setLoading(false)
        }
        console.log(data)
        setStatupData(data)
        setLoading(false)
    }


    useEffect(() => {
        fetchStartupsData()
    }, [])


    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center flex-col gap-3 font-onest bg-white  " >
                <Spinner />
                <h4 className="text-black font-semibold text-2xl " >Loading</h4>
            </div>
        )
    }



    if (startupsData && startupsData.length < 1) {
        <div className="w-full h-screen flex items-center justify-center flex-col gap-3 font-onest bg-white  " >

            <h4 className="text-black font-semibold text-2xl " >No Tenants available</h4>
        </div>
    }

    return (
        <div className="w-full bg-white" >
            <StartupHero />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center justify-items-center justify-center gap-10 px-[3%] py-16 mt-20 bg-[#008CC1]  " >

                {
                    startupsData?.map((data) => (
                        <StartupCard key={data.id} data={data} />
                    ))
                }

            </div>
        </div>
    )
}