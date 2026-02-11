"use client"

import { TenantDataType } from "@/Types/types"
import { X } from "lucide-react"
import React, { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import toast from "react-hot-toast"
import Spinner from "../UI/Spinner"
import Image from "next/image"
import TiptapEditor from "./TipTapEditor"


interface UpdateTenantProps {
    setShowEditTenantModal: React.Dispatch<React.SetStateAction<boolean>>
    selectedIndex: string
    updateTenantInUI: (blog: TenantDataType) => void
}


export default function EditTenantModal({ selectedIndex, setShowEditTenantModal, updateTenantInUI }: UpdateTenantProps) {
    const [loading, setLoading] = useState(false)
    const [selectedTenant, setSelectedTenant] = useState<TenantDataType | null>(null)
    const [formValues, setFormValues] = useState<TenantDataType>({
        founder_email: "",
        founder_name: "",
        phone_number: "",
        startup_description: "",
        startup_image_url: "",
        startup_name: "",
        startup_portfolio_url: "",
        id: ""
    })
    const [file, setFile] = useState<File | null>(null)



    //    fetch existing tenants details
    useEffect(() => {
        const fetchTenant = async () => {
            const { data, error } = await supabase
                .from("tenants")
                .select("*")
                .eq("id", selectedIndex)
                .single()


            if (error) {
                toast.error("Error fetching tenants data")
            }
            else {
                setSelectedTenant(data)
                setFormValues(data)
            }

            setLoading(false)
        }

        if (selectedIndex) fetchTenant()

    }, [selectedIndex])



    // function to handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues((prev) => ({ ...prev, [name]: value }))
    }



    // function to handle textarea change
    const handleTipTapChange = (value: string) => {
        setFormValues((prev) => ({ ...prev, startup_description: value }))
    }



    //  Upload image to Cloudinary
    const uploadImageToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "lsp_preset")
        formData.append("cloud_name", "dmgwgxdd9")

        const response = await fetch(
            "https://api.cloudinary.com/v1_1/dmgwgxdd9/image/upload",
            {
                method: "POST",
                body: formData,
            }
        )

        if (!response.ok) throw new Error("Image upload failed")

        const data = await response.json()
        return data.secure_url
    }




    // this function handles form submission/update
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        // validate the form
        if (!formValues.founder_email.trim() || !formValues.founder_name.trim() || !formValues.phone_number.trim() || !formValues.startup_description.trim() || !formValues.startup_name.trim() || !formValues.startup_image_url.trim() || !formValues.startup_portfolio_url.trim()) {
            toast.error("Please fill in all required fields")
            return
        }


        setLoading(true)

        try {
            let imageUrl = formValues.startup_image_url


            // If a new image is selected, upload it
            if (file) {
                imageUrl = await uploadImageToCloudinary(file)
            }


            //  Update blog in Supabase
            const { data, error } = await supabase
                .from("tenants")
                .update({
                    founder_name: formValues.founder_name,
                    founder_email: formValues.founder_email,
                    startup_name: formValues.startup_name,
                    startup_description: formValues.startup_description,
                    startup_portfolio_url: formValues.startup_portfolio_url,
                    startup_image_url: imageUrl,
                    phone_number: formValues.phone_number,
                })
                .eq("id", selectedIndex)
                .select()

            if (error) {
                toast.error(error.message)
                // console.error(error)
                return
            }

            const updatedTenant = data?.[0]
            updateTenantInUI(updatedTenant)
            toast.success("Tenant details updated successfully")
            setShowEditTenantModal(false)
        }

        catch (err) {
            console.error(err)
            toast.error("Failed to update tenant")
        }

        finally {
            setLoading(false)
        }

    }


    if (loading && !selectedIndex)
        return (
            <div className="fixed inset-0 bg-black/55 flex items-center justify-center">
                <Spinner />
            </div>
        )

    return (
        <div className="fixed h-screen w-full flex items-center justify-center top-0 left-0 bg-black/55 backdrop-blur-sm p-4 z-50">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl flex items-start justify-center flex-col gap-4 h-fit py-8 px-6 bg-[#F7FCFE] shadow-md rounded-md max-h-[95vh] overflow-y-auto"
            >
                <button
                    onClick={() => setShowEditTenantModal(false)}
                    className="text-red-600 ml-auto cursor-pointer"
                    type="button"
                >
                    <X size={32} />
                </button>
                <h2 className="mx-auto text-center font-merienda font-extrabold text-[#008CC1] text-xl md:text-3xl">
                    Update Tenant details
                </h2>


                {/* Tenant image  */}
                <label htmlFor="image" className="w-full flex flex-col gap-1">
                    <span className="text-lg font-semibold text-[#008CC1]">
                        Tenant image *
                    </span>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setFile(e.target.files[0])
                            }
                        }}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#008CC1] file:text-white hover:file:bg-[#008CC1]/90 file:cursor-pointer"
                    />
                    {file ? (
                        <span className="text-sm text-gray-600">Selected: {file.name}</span>
                    ) : (
                        formValues.startup_image_url && (
                            <Image
                                src={formValues.startup_image_url}
                                alt="Current blog"
                                height={500}
                                width={500}
                                className="mt-2 w-32 h-20 object-cover rounded-md border"
                            />
                        )
                    )}
                </label>


                {/* Startup name Input  */}
                <label htmlFor="startup_name" className="w-full flex flex-col gap-1">
                    <span className="text-lg font-semibold text-[#008CC1]">Startup name *</span>
                    <input
                        value={formValues.startup_name}
                        id="startup_name"
                        name="startup_name"
                        onChange={handleChange}
                        placeholder="Enter Startup name"
                        className="bg-transparent outline-none border-2 border-[#008CC1] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                        required
                    />
                </label>

                <div className="w-full grid grid-cols-2 place-items-center justify-items-center gap-5" >

                    <label htmlFor="founder_name" className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Founder&apos;s Name</span>
                        <input
                            value={formValues.founder_name}
                            name="founder_name"
                            onChange={handleChange}
                            id="founder_name"
                            placeholder="Okeke Chinedu"
                            className="bg-transparent outline-none border-2 border-[#008CC1] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>


                    <label htmlFor="founder_email" className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Founder&apos;s Email</span>
                        <input
                            type="email"
                            value={formValues.founder_email}
                            name="founder_email"
                            onChange={handleChange}
                            id="founder_email"
                            placeholder="chiscookeke11@gmail.com"
                            className="bg-transparent outline-none border-2 border-[#008CC1] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>



                    <label htmlFor="phone_number" className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Phone number</span>
                        <input
                            value={formValues.phone_number}
                            name="phone_number"
                            onChange={handleChange}
                            id="phone_number"
                            placeholder="09036531295"
                            className="bg-transparent outline-none border-2 border-[#008CC1] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>




                    <label htmlFor="startup_portfolio_url" className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Startup Portfolio URL</span>
                        <input
                            value={formValues.startup_portfolio_url}
                            name="startup_portfolio_url"
                            onChange={handleChange}
                            id="startup_portfolio_url"
                            placeholder="www.mystartup.com"
                            className="bg-transparent outline-none border-2 border-[#008CC1] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>

                </div>


                <div className="w-full flex flex-col gap-1">
                    <span className="text-lg font-semibold text-[#008CC1]">Tenant Description *</span>
                    <TiptapEditor content={formValues.startup_description} onChange={handleTipTapChange} />
                </div>



                <div className="flex gap-4 ml-auto">
                    <button
                        type="button"
                        className="border-[#008CC1] text-[#008CC1] hover:bg-[#008CC1]/10 bg-transparent cursor-pointer py-3 px-6 h-fit"
                        onClick={() => {
                            setFormValues(selectedTenant || formValues)
                            setFile(null)
                        }}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-4 bg-[#008CC1] cursor-pointer text-white hover:bg-[#008CC1]/90 py-3 px-6 h-fit text-base font-medium font-lato"
                    >
                        {loading ? <Spinner /> : "Update Details"}
                    </button>
                </div>


            </form>
        </div>
    )
}