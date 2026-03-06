"use client"

import { useEffect, useState } from "react"
import StartupHero from "./StartupHero"
import StartupCard from "./StartupCard"
import { StartupDataType } from "@/Types/types"
import { supabase } from "../../../lib/supabaseClient"
import Spinner from "../UI/Spinner"
import Link from "next/link"



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
        <div className="w-full bg-white  text-[#3a3a3a]" >
            <StartupHero />

            {startupsData && startupsData?.length > 0 && (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center justify-items-center justify-center gap-10 px-[3%] py-16 mt-20 bg-[#008CC1] font-poppins  " >

                    {
                        startupsData?.map((data) => (
                            <StartupCard key={data.id} data={data} />
                        ))
                    }

                </div>
            )}




            <div className=" w-full flex items-center justify-center  py-20 px-5  " >



                <div className="w-full bg-black max-w-5xl rounded-4xl h-full pb-2">
                    <div className="flex h-full flex-col items-center justify-center gap-3 mt-[-10px] ml-[-10px] w-full rounded-4xl bg-white py-10 md:py-20 px-4 border border-black">

                        <h1 className="font-onest font-semibold text-xl md:text-5xl text-center">
                            Apply for the 2026 Incubation Cohort
                        </h1>

                        <p className="text-sm md:text-lg font-inter mb-2 text-center max-w-2xl">
                            Are you a UNN student or a young entrepreneur in Nsukka with a tech-driven idea?
                            Join the Roar Nigeria Hub incubation program and get the support you need to
                            structure, validate, and scale your startup.
                        </p>

                        <p className="text-sm md:text-base font-inter mb-7 text-center font-medium">
                            Application Deadline: March 2 – 14, 2026
                        </p>

                        <Link href={"/cohort"}>
                            <div className="w-[200px] h-[60px] relative flex items-center justify-center rounded-xl group">
                                <div className="bg-black w-full h-full absolute top-0 left-0 rounded-lg group-hover:left-2 group-hover:top-2 transition-all duration-300 ease-in-out"></div>

                                <button className="text-white font-inter cursor-pointer bg-[#008CC1] w-full h-full flex items-center justify-center rounded-lg py-3 px-5 absolute top-0 left-0 font-semibold tracking-wider group-hover:bg-[#00BFA6] border-2 border-transparent group-hover:border-black transition-all duration-300 ease-in-out">
                                    Apply Now
                                </button>
                            </div>
                        </Link>

                    </div>
                </div>


            </div>


        </div>
    )
}