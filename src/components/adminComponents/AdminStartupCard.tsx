


import { StartupDataType } from "@/Types/types";
import { Edit, EllipsisVertical, Trash, X } from "lucide-react";
import Image from "next/image";
import { SetStateAction } from "react";




interface AdminTenantCardProps {
    data: StartupDataType
    showOptionsIndex?: string | null;
    setShowOptionsIndex?: React.Dispatch<React.SetStateAction<string | null>>;
    setSelectedIndex?: React.Dispatch<SetStateAction<string>>
    setShowEditStartupModal?: React.Dispatch<SetStateAction<boolean>>
    setConfirmDeleteModal?: React.Dispatch<SetStateAction<boolean>>
}

export default function AdminStartupCard({ data, showOptionsIndex, setConfirmDeleteModal, setSelectedIndex, setShowEditStartupModal, setShowOptionsIndex }: AdminTenantCardProps) {
    return (
        <div className="w-full  max-w-[280px]  md:max-w-none h-[400px] flex flex-col items-center justify-between font-poppins relative  overflow-hidden text-[#0a0a0a] " >


            <div className=" w-full bg-gray-300  h-[320px] " >
                <Image src={data.startup_image_url} alt="image" height={500} width={500} className="object-cover object-center h-full w-full " />
            </div>

            <div className=" w-full flex flex-col items-center gap-3   py-2 text-center  " >

                <h1 className="font-syne font-semibold text-xl h-fit " >{data.startup_name} </h1>
            </div>






            {/* options menu button  */}
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    setShowOptionsIndex?.((prev: string | null) => (prev === data.id ? null : data.id ?? ""))
                    // console.log("the index", data.id)
                }}
                className="absolute top-2 right-2 cursor-pointer bg-white rounded-md p-4  " ><EllipsisVertical size={28} color="#008CC1" /> </button>


            {/* controls options  */}
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }}
                className={` h-28 w-28 rounded-full  top-[-10px] overflow-hidden  absolute  transition-all duration-200 ease-in-out
                         ${showOptionsIndex === data.id ? "right-[-6%]" : "right-[-50%] "}
                         `} >
                <div className="w-full h-full bg-white flex items-center justify-center  " >
                    <button onClick={(e) => {
                        setShowOptionsIndex?.(null)
                        e.stopPropagation()
                        e.preventDefault()
                    }}
                        className="ml-8 cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out" title="close"
                    ><X size={26} color="#008CC1" /></button>


                    <button onClick={() => {
                        setSelectedIndex?.(data.id ?? "");
                        if (setShowEditStartupModal) {
                            setShowEditStartupModal(true)
                        };
                    }}
                        className=" absolute top-4 left-6 cursor-pointer  hover:scale-110 transition-all duration-200 ease-in-out" title="edit">
                        <Edit size={22} color="#008CC1" />
                    </button>


                    <button
                        onClick={() => {
                            setSelectedIndex?.(data.id ?? "")
                            setConfirmDeleteModal?.(true)
                        }
                        }
                        className=" absolute bottom-4 left-6  cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out" title="delete">
                        <Trash size={22} color="#008CC1" />
                    </button>
                </div>
            </div>






        </div>



    )
}