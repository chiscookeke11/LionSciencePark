"use client"

import { NewsBlogType } from "@/Types/types"
import { supabase } from "../../../lib/supabaseClient"
import { useEffect, useState } from "react"
import Spinner from "../UI/Spinner"
import NewsCard from "../NewsComponents/NewsCard"
import Link from "next/link"


export default function BlogSection() {
    const [news, setNews] = useState<NewsBlogType[] | null>(null)


    const fetchNews = async () => {
        const { data, error } = await supabase
            .from('news')
            .select("*")
            .order("created_at", { ascending: false })

        if (error) {
            console.error("Error fetching news", error)
        }
        else {
            setNews(data)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div className="w-full flex flex-col gap-14 items-center justify-center px-[4%] py-24 font-inter bg-[#008CC1] " >

            <h2 className=" text-3xl md:text-4xl font-bold font-onest text-white " >Events & News</h2>

            {!news ? (<div className="w-full h-[50vh] flex items-center justify-center " > <Spinner /> </div>)
                : news.length < 1 ? (<div className="h-[50vh] w-full flex items-center justify-center px-5 py-4 font-poppins text-black font-medium text-2xl " > <p>No news found</p> </div>)
                    : (
                        <>
                            {/* News section */}
                            < section className=" w-full px-[2%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 place-items-center justify-items-center justify-center " >
                                {news.slice(0, 3).map((data, i) => (
                                    <NewsCard data={data} key={i} />
                                ))}

                            </section>
                        </>
                    )
            }

            <Link href={"/news"} className="text-white text-lg md:text-2xl font-medium " > See more </Link>

        </div>
    )
}