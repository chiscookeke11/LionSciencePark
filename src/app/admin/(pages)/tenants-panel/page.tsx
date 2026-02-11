"use client"

import Spinner from "@/components/UI/Spinner"
import { TenantDataType } from "@/Types/types"
import { useEffect, useState } from "react"
import { supabase } from "../../../../../lib/supabaseClient"
import AdminTenantsCard from "@/components/adminComponents/AdminTenantCard"
import ConfirmDelete from "@/components/adminComponents/ConfirmDelete"
import AddTenantModal from "@/components/adminComponents/AddTenantModal"
import EditTenantModal from "@/components/adminComponents/EditTenantModal"


export default function Page() {
    const [addModal, setaddModal] = useState(false)
    const [tenants, setTenants] = useState<TenantDataType[] | null>(null)
    const [showOptionsIndex, setShowOptionsIndex] = useState<string | null>(null);
    const [showEditTenantModal, setShowEditTenantModal] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState("")
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)
    const collectionName = "tenants"




    useEffect(() => {
        // This function  fetches all tenants from the db
        const fetchTenants = async () => {
            const { data, error } = await supabase.from(collectionName).select("*")

            if (error) {
                console.error("Failed to fetch:", error)
            }

            setTenants(data)
        }
        fetchTenants()
    }, [])


    // this  function updates the delete function on the UI
    const removeBlogFromUI = (id: string) => {
        setTenants(prev => (prev ? prev.filter(tenant => tenant.id !== id) : null))
    }


    // This function adds the new tenant to the UI
    const addTenantToUI = (newTenant: TenantDataType) => {
        setTenants((prev) => {
            if (!prev) {
                return [newTenant]
            }
            return [newTenant, ...prev]
        })
    }



    // This function updates the tenants data
    const updateTenantInUI = (updatedTenant: TenantDataType) => {
        if (!updatedTenant) return;


        setTenants((prevTenants) =>
            prevTenants
                ? prevTenants.map((tenant) =>
                    tenant.id === updatedTenant.id ? updatedTenant : tenant
                )
                : [updatedTenant]
        );
    };




    return (
        <div className=" w-full flex h-fit min-h-screen px-[3%] py-10 bg-white font-poppins flex-col items-start gap-5 relative "  >
            <h1 className=" text-xl md:text-3xl font-semibold text-[#008CC1] " >Tenants Control Panel</h1>


            <button onClick={() => setaddModal(true)} className="mt-8 bg-[#008CC1] ml-auto px-4 md:px-7 py-2 md:py-3 font-medium text-base flex items-center justify-center cursor-pointer rounded-md text-white transform hover:scale-105 transition-all duration-300 " >Add Tenant</button>



            {
                !tenants ?
                    (
                        <div className="w-full h-[50vh] flex items-center justify-center " > <Spinner /> </div>
                    )
                    : tenants.length < 1 ? (<div className="h-[70vh] w-full flex items-center justify-center px-5 py-4 font-poppins text-black font-medium text-2xl " > <p>No news found</p> </div>)
                        :
                        <>
                            < section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-10 place-items-center justify-items-center " >
                                {
                                    tenants.map((data, i) => (
                                        <AdminTenantsCard
                                            data={data}
                                            key={i}
                                            showOptionsIndex={showOptionsIndex}
                                            setShowOptionsIndex={setShowOptionsIndex}
                                            setSelectedIndex={setSelectedIndex}
                                            setShowEditBlogModal={setShowEditTenantModal}
                                            setConfirmDeleteModal={setConfirmDeleteModal}
                                        />
                                    ))
                                }

                            </section>

                        </>
            }





            {confirmDeleteModal && <ConfirmDelete onDelete={removeBlogFromUI} setConfirmDeleteModal={setConfirmDeleteModal} selectedIndex={selectedIndex} collectionName={collectionName} />}
            {addModal && <AddTenantModal setOpenModal={setaddModal} addTenantToUI={addTenantToUI} />}
            {showEditTenantModal && <EditTenantModal setShowEditTenantModal={setShowEditTenantModal} selectedIndex={selectedIndex} updateTenantInUI={updateTenantInUI} />}
        </div>
    )
}