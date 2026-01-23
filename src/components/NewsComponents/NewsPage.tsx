"use client"

import { NewsBlogType } from "@/Types/types"
import { useEffect, useState } from "react"
import NewsCard from "@/components/NewsComponents/NewsCard"
import Spinner from "@/components/UI/Spinner"
import Link from "next/link"
import { CldImage } from "next-cloudinary"
import { supabase } from "../../../lib/supabaseClient"





export default function NewsPage() {
    const [news, setNews] = useState<NewsBlogType[] | null>(null)
    const [latestNews, setLatestNews] = useState<NewsBlogType | null>(null)
    const [loading, setLoading] = useState(true)



    const fetchNews = async () => {
        const { data, error } = await supabase.from('news').select("*").order("publicationDate", { ascending: false })

        if (error) {
            console.error("Error fetching news:", error.message)
            setNews([])
        } else {
            setNews(data || [])
        }
    }

    const getLatestNews = async () => {
        const { data, error } = await supabase.from('news').select("*").order("publicationDate", { ascending: false }).limit(1);

        if (error) {
            console.error("Error fetching latest news:", error.message)
            setLatestNews(null)
        } else {
            setLatestNews(data && data.length > 0 ? data[0] : null)
        }
    }


    useEffect(() => {
        const fetchAllNews = async () => {
            await fetchNews()
            await getLatestNews()
            setLoading(false) // stop loading regardless of empty or not
        }
        fetchAllNews()
    }, [])



    useEffect(() => {
        if (news !== null && latestNews !== undefined) {
            setLoading(false)
        }
    }, [latestNews, news])




    if (loading) {
        return (
            <div className="bg-white flex flex-col items-center justify-center gap-14 font-inter py-28 px-[4%]" >
                <Spinner />
            </div>
        )
    }

    if (news && news.length < 1) {
        return (
            <div className="bg-white flex flex-col items-center justify-center gap-14 font-inter py-28 h-[40vh] px-[4%]" >
                <h4 className=" text-3xl md:text-5xl font-semibold font-onest " >No news found</h4>
            </div>
        )
    }

    return (
        <div className="bg-white flex flex-col items-center gap-20 font-inter py-28 px-[4%] " >
            {/* News hero section  */}
            <div className=" flex flex-col gap-3 z-30 text-center " >
                <h2 className=" font-onest text-3xl md:text-6xl lg:text-7xl font-bold  " >Events & News</h2>
                <p className=" text-lg md:text-2xl max-w-2xl " >Stay updated with the latest events and breakthroughs at Lion Science Park.</p>
            </div>

            {/* The news page hero news-card */}
            <Link href={`/news/${latestNews?.id}`} className="w-full h-[430px] md:h-[530px] max-w-6xl  min-h-[300px]   rounded-xl  border-2 border-black relative z-0 group " >

                <div className="w-full h-full absolute top-2 left-1.5 bg-black rounded-xl z-0 hidden group-hover:block transition-all duration-300 ease-in-out  " />


                <div className="flex flex-col md:flex-row items-center justify-between w-full h-full overflow-hidden gap-5 rounded-xl absolute top-0 left-0 z-20 bg-white " >

                    <div className=" w-full md:flex-1/2 bg-gray-300 h-[55%] md:h-full border-b border-b-black overflow-hidden " >
                        <CldImage src={latestNews?.image ?? "/placeholder-image.svg"} alt="image" height={500} width={500} crop={{ type: "auto", source: true }} className="object-cover object-center h-full w-full " />
                    </div>

                    <div className=" w-full flex flex-col items-start md:justify-center gap-3   py-2  h-[50%] md:h-full px-4 md:flex-1/2 " >
                        <p className="self-start text-sm font-normal " >
                            {latestNews?.publicationDate
                                ? new Date(latestNews?.publicationDate).toLocaleDateString("en-us", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                })
                                : "No date available"}
                        </p>
                        <h1 className="font-syne font-semibold text-2xl text-start font-onest " >{latestNews?.title} </h1>
                        <div dangerouslySetInnerHTML={{ __html: latestNews?.content.trim().slice(0, 60) + "..." }} className="flex items-center  text-sm font-normal text-start font-inter  flex-wrap  " />
                    </div>
                </div>
            </Link>









            {!news ? (<div className="w-full h-[50vh] flex items-center justify-center " > <Spinner /> </div>)
                : news.length < 1 ? (<div className="h-[70vh] w-full flex items-center justify-center px-5 py-4 font-poppins text-black font-medium text-2xl " > <p>No news found</p> </div>)
                    : (
                        <>
                            {/* News section */}
                            <section className=" w-full max-w-7xl px-[3%] py-20 flex flex-col items-center gap-10 " >
                                <h3 className="text-3xl md:text-5xl font-semibold text-[#030100] font-onest mr-auto " >All News Posts</h3>
                                < div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 place-items-center justify-items-center justify-center " >
                                    {news.map((data, i) => (
                                        <NewsCard data={data} key={i} />
                                    ))}

                                </div>
                            </section>
                        </>
                    )
            }







        </div >
    )
}