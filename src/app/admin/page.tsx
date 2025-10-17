"use client"

import AdminNewsCard from "@/components/adminComponents/AdminNewsCard";
import { supabase } from "../../../lib/supabaseClient";
import { NewsBlogType } from "@/Types/types";
import { useEffect, useState } from "react";
import Spinner from "@/components/UI/Spinner";
import AddBlogModal from "@/components/adminComponents/AddBlogModal";
import ConfirmDelete from "@/components/adminComponents/ConfirmDelete";
import UpdateBlogModal from "@/components/adminComponents/UpdateBlogModal";



export default function Page() {
    const [news, setNews] = useState<NewsBlogType[] | null>(null)
    const [showOptionsIndex, setShowOptionsIndex] = useState<string | null>(null);
    const [showEditBlogModal, setShowEditBlogModal] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState("")
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)
    const [openBlogModal, setOpenBlogModal] = useState(false)



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



    const addBlogToUI = (newBlog: NewsBlogType) => {
        setNews((prev) => {
            if (!prev) {
                return [newBlog]
            }
            return [newBlog, ...prev]
        })
    }


    const removeBlogFromUI = (id: string) => {
        setNews(prev => (prev ? prev.filter(blog => blog.id !== id) : null))
    }



    const updateBlogInUI = (updatedBlog: NewsBlogType) => {
        setNews((prevNews) =>
            prevNews
                ? prevNews.map((news) =>
                    news.id === updatedBlog.id ? updatedBlog : news
                )
                : [updatedBlog]
        )
    }



    return (
        <div className=" w-full flex h-full min-h-screen px-[3%] py-10 bg-white font-poppins flex-col items-start gap-5 relative "  >

            <h1 className=" text-2xl md:text-3xl font-semibold text-[#008CC1] " >News Control Panel</h1>

            <button onClick={() => setOpenBlogModal(true)} className="mt-8 bg-[#008CC1] ml-auto px-16 py-4 font-medium flex items-center justify-center cursor-pointer rounded-md text-white transform hover:scale-105 transition-all duration-300 " >Add Blog</button>





            {!news ? (<div className="w-full h-[50vh] flex items-center justify-center " > <Spinner /> </div>)
                : news.length < 1 ? (<div className="h-[70vh] w-full flex items-center justify-center px-5 py-4 font-poppins text-black font-medium text-2xl " > <p>No news found</p> </div>)
                    : (
                        <>
                            {/* News section */}
                            < section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-10 place-items-center justify-items-center " >
                                {news?.map((data, i) => (
                                    <AdminNewsCard
                                        data={data}
                                        key={i}
                                        showOptionsIndex={showOptionsIndex}
                                        setShowOptionsIndex={setShowOptionsIndex}
                                        setSelectedIndex={setSelectedIndex}
                                        setShowEditBlogModal={setShowEditBlogModal}
                                        setConfirmDeleteModal={setConfirmDeleteModal}
                                    />
                                ))}
                            </section>
                        </>
                    )
            }


            {openBlogModal && (<AddBlogModal setOpenBlogModal={setOpenBlogModal} addBlogToUI={addBlogToUI} />)}
            {confirmDeleteModal && <ConfirmDelete onDelete={removeBlogFromUI} setConfirmDeleteModal={setConfirmDeleteModal} selectedIndex={selectedIndex} />}
            {showEditBlogModal && <UpdateBlogModal setShowEditBlogModal={setShowEditBlogModal} selectedIndex={selectedIndex} updateBlogInUI={updateBlogInUI} />}


        </div>
    )
}