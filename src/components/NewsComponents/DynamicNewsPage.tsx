"use client"

import { NewsBlogType } from "@/Types/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Spinner from "@/components/UI/Spinner"
import { Facebook } from "lucide-react"
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import { CldImage } from "next-cloudinary"
import NewsCard from "@/components/NewsComponents/NewsCard"
import { supabase } from "../../../lib/supabaseClient"




export default function Page() {
    const { id } = useParams()
    const [currentNews, setCurrentNews] = useState<NewsBlogType | null>(null)
    const [news, setNews] = useState<NewsBlogType[] | null>(null)




    const fetchCurrentNews = async () => {
        if (!id) return;

        const { data, error } = await supabase.from("news").select("*").eq('id', id).single()


        if (error) {
            console.error("Error fetching current News")
        }

        else {
            setCurrentNews(data)
        }
    }




    const fetchNews = async () => {
        const { data, error } = await supabase
            .from('news')
            .select("*")
            .order("created_at", { ascending: false })

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
        fetchCurrentNews()
    }, [fetchCurrentNews])




    const getFirstSentence = (text: string) => {
        if (!text) return "";

        // Split the text into sentences using a regex that matches period, exclamation, or question marks
        const sentences = text.match(/[^.!?]+[.!?]+/g);
        // Take the first sentence
        return sentences ? sentences[0].trim() : text;
    };




    return (
        <div className="bg-white w-full h-fit text-black font-inter" >

            {!currentNews ? <div className="w-full h-screen flex items-center justify-center" > <Spinner /> </div>
                :
                (
                    <>
                        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-24 h-[90vh] px-[3%] md:px-[7%] bg-[#008CC1] border-b border-black " >

                            <div className="  md:flex-1/2 flex items-center justify-center h-[300px] md:h-full bg-gray-300 w-full rounded-2xl border border-black overflow-hidden " >
                                <CldImage src={currentNews.image} alt="image" height={1500} width={1500} crop={{ type: "auto", source: true }} className="object-cover object-center h-full w-full " />
                            </div>



                            <div className="w-full md:flex-1/2 flex flex-col items-start gap-2 md:gap-5  " >
                                <p className="self-start text-sm font-normal text-gray-900 " >
                                    {currentNews.publicationDate
                                        ? new Date(currentNews.publicationDate).toLocaleDateString("en-us", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                        : "No date available"}
                                </p>

                                <h1 className=" text-2xl  md:text-4xl font-bold font-onest text-black " >{currentNews.title} </h1>
                                <div dangerouslySetInnerHTML={{ __html: getFirstSentence(currentNews.content) }} className="flex items-center  text-lg md:text-xl font-medium text-start font-inter text-[#030100]  flex-wrap  " />



                                <div className=" flex items-center gap-5 md:gap-14 w-full  px-[3%]   mt-4  " >
                                    {currentNews.facebook_link && <a href={currentNews.facebook_link} target="_blank" className="text-[#008CC1] bg-white size-10 flex items-center justify-center rounded-full shadow-sm cursor-pointer" > <Facebook size={20} /> </a>}
                                    {currentNews.instagram_link && <a href={currentNews.instagram_link} target="_blank" className="text-[#008CC1] bg-white size-10 flex items-center justify-center rounded-full shadow-sm cursor-pointer" > <Instagram fontSize={"medium"} />  </a>}
                                    {currentNews.linkedin_link && <a href={currentNews.linkedin_link} target="_blank" className="text-[#008CC1] bg-white size-10 flex items-center justify-center rounded-full shadow-sm cursor-pointer" > <LinkedIn fontSize={"medium"} /> </a>}
                                    {currentNews.x_link && <a href={currentNews.x_link} target="_blank" className="text-[#008CC1] bg-white size-10 flex items-center justify-center rounded-full shadow-sm cursor-pointer"  > <Twitter fontSize={"medium"} /> </a>}

                                </div>
                            </div>


                        </section>


                        <div
                            className="w-full py-28 px-[3%]  font-poppins font-medium text-base md:text-lg bg-[#f2f5fc]  "
                            dangerouslySetInnerHTML={{ __html: currentNews.content }} />





                        <div className="w-full flex flex-col gap-6 items-center justify-center px-[2%] md:px-[4%] py-24 font-inter bg-[#00BFA6] border border-black " >

                            <h2 className=" text-3xl md:text-4xl font-bold font-onest text-[#030100] mr-auto ml-10 " >More News</h2>

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
                        </div>


                    </>
                )
            }
        </div>
    )
}