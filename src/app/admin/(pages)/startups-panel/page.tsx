"use client"

import Spinner from "@/components/UI/Spinner"
import { StartupDataType } from "@/Types/types"
import { useEffect, useState } from "react"
import { supabase } from "../../../../../lib/supabaseClient"
import ConfirmDelete from "@/components/adminComponents/ConfirmDelete"
import AddStartupModal from "@/components/adminComponents/AddStartupModal"
import EditStartupModal from "@/components/adminComponents/EditStartupModal"
import AdminStartupCard from "@/components/adminComponents/AdminStartupCard"

export default function Page() {
    const [addModal, setAddModal] = useState(false)
    const [startups, setStartups] = useState<StartupDataType[] | null>(null)
    const [showOptionsIndex, setShowOptionsIndex] = useState<string | null>(null)
    const [showEditStartupModal, setShowEditStartupModal] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState("")
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)

    const collectionName = "startups"

    // Fetch all startups
    useEffect(() => {
        const fetchStartups = async () => {
            const { data, error } = await supabase.from(collectionName).select("*")
            if (error) {
                console.error("Failed to fetch:", error)
            }
            setStartups(data)
        }
        fetchStartups()
    }, [])

    // Remove startup from UI after deletion
    const removeStartupFromUI = (id: string) => {
        setStartups(prev => (prev ? prev.filter(startup => startup.id !== id) : null))
    }

    // Add new startup to UI after creation
    const addStartupToUI = (newStartup: StartupDataType) => {
        setStartups(prev => (prev ? [newStartup, ...prev] : [newStartup]))
    }

    // Update startup in UI after editing
    const updateStartupInUI = (updatedStartup: StartupDataType) => {
        if (!updatedStartup) return
        setStartups(prev =>
            prev
                ? prev.map(startup =>
                    startup.id === updatedStartup.id ? updatedStartup : startup
                )
                : [updatedStartup]
        )
    }

    return (
        <div className="w-full flex h-fit min-h-screen px-[3%] py-10 bg-white font-poppins flex-col items-start gap-5 relative">
            <h1 className="text-xl md:text-3xl font-semibold text-[#008CC1]">Startups Control Panel</h1>

            <button
                onClick={() => setAddModal(true)}
                className="mt-8 bg-[#008CC1] ml-auto px-4 md:px-7 py-2 md:py-3 font-medium text-base flex items-center justify-center cursor-pointer rounded-md text-white transform hover:scale-105 transition-all duration-300"
            >
                Add Startup
            </button>

            {!startups ? (
                <div className="w-full h-[50vh] flex items-center justify-center">
                    <Spinner />
                </div>
            ) : startups.length < 1 ? (
                <div className="h-[70vh] w-full flex items-center justify-center px-5 py-4 font-poppins text-black font-medium text-2xl">
                    <p>No startups found</p>
                </div>
            ) : (
                <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-10 place-items-center justify-items-center">
                    {startups.map((startup, i) => (
                        <AdminStartupCard
                            key={i}
                            data={startup}
                            showOptionsIndex={showOptionsIndex}
                            setShowOptionsIndex={setShowOptionsIndex}
                            setSelectedIndex={setSelectedIndex}
                            setShowEditStartupModal={setShowEditStartupModal}
                            setConfirmDeleteModal={setConfirmDeleteModal}
                        />
                    ))}
                </section>
            )}

            {/* Modals */}
            {confirmDeleteModal && (
                <ConfirmDelete
                    onDelete={removeStartupFromUI}
                    setConfirmDeleteModal={setConfirmDeleteModal}
                    selectedIndex={selectedIndex}
                    collectionName={collectionName}
                />
            )}

            {addModal && <AddStartupModal setOpenModal={setAddModal} addStartupToUI={addStartupToUI} />}

            {showEditStartupModal && (
                <EditStartupModal
                    setShowEditStartupModal={setShowEditStartupModal}
                    selectedIndex={selectedIndex}
                    updateStartupInUI={updateStartupInUI} // <- can rename prop in EditStartupModal to updateStartupInUI if you want
                />
            )}
        </div>
    )
}
