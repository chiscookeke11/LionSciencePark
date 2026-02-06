"use client"

import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";
import { TenantDataType } from "@/Types/types";
import { supabase } from "../../../lib/supabaseClient";
import TenantCard from "./TenantCard";
import TenantHeroSection from "./TenantHeroSection";




export default function TenantsPage() {
    const [tenantsData, setTenantsData] = useState<TenantDataType[] | null>(null)
    const [loading, setLoading] = useState(true)



    const fetchTenantsData = async () => {

        setLoading(true)

        const { data, error } = await supabase.from("tenants").select("*")

        if (error) {
            console.error("Failed to fetch startup data", error)
            setLoading(false)
        }
        console.log(data)
        setTenantsData(data)
        setLoading(false)
    }


    useEffect(() => {
        fetchTenantsData()
    }, [])


    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center flex-col gap-3 font-onest bg-white  " >
                <Spinner />
                <h4 className="text-black font-semibold text-2xl " >Coming Soon...</h4>
            </div>
        )
    }

    if (tenantsData && tenantsData.length < 1) {
        <div className="w-full h-screen flex items-center justify-center flex-col gap-3 font-onest bg-white  " >

            <h4 className="text-black font-semibold text-2xl " >No Tenants available</h4>
        </div>
    }


    return (
        <div className="w-full h-fit flex items-center flex-col gap-3 font-onest bg-white pt-16 text-[#3a3a3a] " >



            <TenantHeroSection/>




            <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center justify-items-center justify-center gap-10 px-[3%] py-16 mt-20 bg-[#008CC1]  " >

                {
                    tenantsData?.map((data) => (
                        <TenantCard key={data.id} data={data} />
                    ))
                }

            </div>
        </div>
    )
}