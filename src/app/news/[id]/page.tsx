"use client"

import { NewsBlogType } from "@/Types/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "../../../../lib/supabaseClient"
import Spinner from "@/components/UI/Spinner"




export default function Page() {
    const { id } = useParams()
    const [currentNews, setCurrentNews] = useState<NewsBlogType | null>(null)


    useEffect(() => {
        if (!id) return;

        const fetchCurrentNews = async () => {
            const { data, error } = await supabase.from("news").select("*").eq('id', id).single()


            if (error) {
                console.error("Error fetching current News", error)
            }

            else {
                setCurrentNews(data)
                console.log(data)
            }
        }

        fetchCurrentNews()
    }, [])



    return (
            <div className="bg-white w-full h-fit text-black" >

            {!currentNews ? <div className="w-full h-screen flex items-center justify-center" > <Spinner /> </div>
                :
                (
                    <>
                        <section className="w-full h-screen relative  " style={{ backgroundImage: `url(${currentNews.image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} >
                            <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-[rgba(4,9,30,0.5)] to-[rgba(4,9,30,0.5)] z-10 " />


                            <div className="absolute bottom-3 left-0  py-10 text-white z-10 px-[3%] w-full flex flex-col md:flex-row items-start md:items-center md:justify-between gap-7  " >
                                <div className="w-full basis-2/4 max-w-6xl flex flex-col items-start gap-4 " >
                                    <h1 className=" font-syne text-3xl font-bold " >{currentNews.title} </h1>
                                </div>


                            </div>
                        </section>


                        <div className="w-full py-16 px-[3%] text-justify font-poppins font-medium text-lg bg-[#f2f5fc]  " dangerouslySetInnerHTML={{ __html: currentNews.content }} />



                    </>
                )
            }
        </div>
    )
}