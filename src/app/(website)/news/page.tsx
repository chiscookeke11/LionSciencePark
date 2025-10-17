"use client"

import { NewsBlogType } from "@/Types/types"
import { useEffect, useState } from "react"
import NewsCard from "@/components/NewsComponents/NewsCard"
import Spinner from "@/components/UI/Spinner"
import { supabase } from "../../../../lib/supabaseClient"





export default function Page() {
    const [news, setNews] = useState<NewsBlogType[] | null>(null)



    const fetchNews = async () => {
        const { data, error } = await supabase.from('news').select("*")

        if (error) {
            console.error("Error fetching news")
        }
        else {
            console.log(data)
            setNews(data)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [])


    return (
        <div className="bg-white " >
            {/* News hero section  */}
            <section className=" w-full h-screen bg-black flex items-center justify-center flex-col gap-4 text-white  py-4 px-3 text-center bg-no-repeat bg-center bg-cover relative " style={{ backgroundImage: "url('/about-us/side.webp')" }} >
                <div className=" bg-black/45 absolute inset-0 h-full w-full " />

                <div className=" flex flex-col gap-3 z-30 " >
                    <h2 className=" font-poppins text-4xl md:text-8xl font-bold  " >Events & News</h2>
                    <p className="font-signika  text-lg md:text-2xl max-w-2xl " >Stay updated with the latest events and breakthroughs at Lion Science Park.</p>
                </div>
            </section>







            {!news ? (<div className="w-full h-[50vh] flex items-center justify-center " > <Spinner /> </div>)
                : news.length < 1 ? (<div className="h-[70vh] w-full flex items-center justify-center px-5 py-4 font-poppins text-black font-medium text-2xl " > <p>No news found</p> </div>)
                    : (
                        <>
                            {/* News section */}
                            < section className=" w-full px-[2%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-10 place-items-center justify-items-center " >
                                {news.map((data, i) => (
                                    <NewsCard data={data} key={i} />
                                ))}

                            </section>
                        </>
                    )
            }







        </div >
    )
}