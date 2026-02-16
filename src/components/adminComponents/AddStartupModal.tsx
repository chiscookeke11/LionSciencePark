"use client"

import { StartupDataType } from "@/Types/types"
import { X } from "lucide-react"
import { SetStateAction, useState } from "react"
import toast from "react-hot-toast"
import { supabase } from "../../../lib/supabaseClient"
import TiptapEditor from "./TipTapEditor"

interface AddStartupModalProps {
    setOpenModal: React.Dispatch<SetStateAction<boolean>>
    addStartupToUI: (startup: StartupDataType) => void
}

export default function AddStartupModal({ setOpenModal, addStartupToUI }: AddStartupModalProps) {
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState<StartupDataType>({
        founder_email: "",
        founder_name: "",
        phone_number: "",
        startup_description: "",
        startup_image_url: "",
        startup_name: "",
        startup_portfolio_url: ""
    })
    const [file, setFile] = useState<File | null>(null)

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues(prev => ({ ...prev, [name]: value }))
    }

    // Handle Tiptap editor changes
    const handleTipTapChange = (value: string) => {
        setFormValues(prev => ({ ...prev, startup_description: value }))
    }

    // Upload image to Cloudinary
    const uploadImageToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "lsp_preset")
        formData.append("cloud_name", "dmgwgxdd9")

        const response = await fetch("https://api.cloudinary.com/v1_1/dmgwgxdd9/image/upload", {
            method: "POST",
            body: formData,
        })

        if (!response.ok) throw new Error("Image upload failed")

        const data = await response.json()
        return data.secure_url
    }

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            !formValues.founder_email.trim() ||
            !formValues.founder_name.trim() ||
            !formValues.phone_number.trim() ||
            !formValues.startup_description.trim() ||
            !formValues.startup_name.trim() ||
            !formValues.startup_portfolio_url.trim()
        ) {
            toast.error("Please fill in all fields")
            return
        }

        if (!file) {
            toast.error("Please select an image")
            return
        }

        setLoading(true)

        try {
            const imageUrl = await uploadImageToCloudinary(file)

            const { data, error } = await supabase
                .from("startups")
                .insert({
                    founder_name: formValues.founder_name,
                    founder_email: formValues.founder_email,
                    startup_name: formValues.startup_name,
                    startup_description: formValues.startup_description,
                    startup_portfolio_url: formValues.startup_portfolio_url,
                    startup_image_url: imageUrl,
                    phone_number: formValues.phone_number,
                })
                .select()

            if (error) {
                console.error("Failed to upload startup:", error)
                toast.error("Failed to upload startup")
                return
            }

            const newStartup = data?.[0]
            toast.success("Startup added successfully!")
            addStartupToUI(newStartup)

            // Reset form
            setFormValues({
                founder_email: "",
                founder_name: "",
                phone_number: "",
                startup_description: "",
                startup_image_url: "",
                startup_name: "",
                startup_portfolio_url: ""
            })
            setFile(null)
            setOpenModal(false)
        } catch (err) {
            console.error("Failed to add startup:", err)
            toast.error(err instanceof Error ? err.message : "Failed to add startup")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed h-screen w-full flex items-center justify-center top-0 left-0 bg-black/55 backdrop-blur-sm p-4 z-50">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl flex items-start justify-center flex-col gap-4 h-fit py-8 px-6 bg-[#F7FCFE] shadow-md rounded-md max-h-[95vh] overflow-y-auto"
            >
                <button onClick={() => setOpenModal(false)} className="text-red-600 ml-auto cursor-pointer">
                    <X size={32} />
                </button>
                <h2 className="mx-auto text-center font-merienda font-extrabold text-[#008CC1] text-xl md:text-3xl">
                    Add Startup Details
                </h2>

                {/* Image input */}
                <label className="w-full flex flex-col gap-1">
                    <span className="text-lg font-semibold text-[#008CC1]">Startup Image *</span>
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) setFile(e.target.files[0])
                        }}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#008CC1] file:text-white hover:file:bg-[#008CC1]/90 file:cursor-pointer"
                        required
                    />
                </label>

                {/* Startup name */}
                <label className="w-full flex flex-col gap-1">
                    <span className="text-lg font-semibold text-[#008CC1]">Startup Name *</span>
                    <input
                        value={formValues.startup_name}
                        name="startup_name"
                        onChange={handleChange}
                        placeholder="Enter Startup Name"
                        className="bg-transparent outline-none border-2 border-[#008CC1] py-2 px-3 text-[#1e1e1e] font-semibold text-base"
                        required
                    />
                </label>

                <div className="w-full grid grid-cols-2 gap-5">
                    <label className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Founder&apos;s Name *</span>
                        <input
                            value={formValues.founder_name}
                            name="founder_name"
                            onChange={handleChange}
                            placeholder="Okeke Chinedu"
                            className="bg-transparent outline-none border-2 border-[#008CC1] py-2 px-3 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>

                    <label className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Founder&apos;s Email *</span>
                        <input
                            type="email"
                            value={formValues.founder_email}
                            name="founder_email"
                            onChange={handleChange}
                            placeholder="founder@email.com"
                            className="bg-transparent outline-none border-2 border-[#008CC1] py-2 px-3 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>

                    <label className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Phone Number</span>
                        <input
                            value={formValues.phone_number}
                            name="phone_number"
                            onChange={handleChange}
                            placeholder="090xxxxxxxx"
                            className="bg-transparent outline-none border-2 border-[#008CC1] py-2 px-3 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>

                    <label className="w-full flex flex-col gap-1">
                        <span className="text-lg font-semibold text-[#008CC1]">Startup Portfolio URL</span>
                        <input
                            value={formValues.startup_portfolio_url}
                            name="startup_portfolio_url"
                            onChange={handleChange}
                            placeholder="www.mystartup.com"
                            className="bg-transparent outline-none border-2 border-[#008CC1] py-2 px-3 text-[#1e1e1e] font-semibold text-base"
                        />
                    </label>
                </div>

                {/* Description */}
                <div className="w-full flex flex-col gap-1">
                    <span className="text-lg font-semibold text-[#008CC1]">Startup Description *</span>
                    <TiptapEditor content={formValues.startup_description} onChange={handleTipTapChange} />
                </div>

                <div className="flex gap-4 ml-auto">
                    <button
                        type="button"
                        className="border-[#008CC1] text-[#008CC1] hover:bg-red-400 bg-transparent py-3 px-6"
                        onClick={() => {
                            setFormValues({
                                founder_email: "",
                                founder_name: "",
                                phone_number: "",
                                startup_description: "",
                                startup_image_url: "",
                                startup_name: "",
                                startup_portfolio_url: ""
                            })
                            setFile(null)
                        }}
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center text-white justify-center gap-4 bg-[#008CC1] py-3 px-6"
                    >
                        {loading ? "Uploading ..." : "Add Startup"}
                    </button>
                </div>
            </form>
        </div>
    )
}
