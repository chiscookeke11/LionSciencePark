import { SetStateAction } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../../lib/supabaseClient";




interface ConfirmDeleteProps {
    setConfirmDeleteModal?: React.Dispatch<SetStateAction<boolean>>
    onDelete?: (id: string) => void;
    selectedIndex: string
}

const deleteItem = async (id: string, collectionName: string) => {
    const { } = await supabase.from("news").delete().eq("id", id)
}


export default function ConfirmDelete({ setConfirmDeleteModal, onDelete, selectedIndex }: ConfirmDeleteProps) {


    const handleDelete = async (id: string) => {
        const toastId = toast.loading("Deleting ")



        try {
            await deleteItem(id, "blogs")
            toast.dismiss(toastId)
            toast.success("Blog deleted successfully")
            setConfirmDeleteModal?.(false)
            onDelete?.(id)
        }
        catch (err) {
            console.error(err)
            toast.dismiss(toastId)
            toast.error("Failed to delete. please try again")
        }
    }



    return (
        <div className="fixed h-screen w-full flex items-center justify-center top-0 left-0 bg-black/55 backdrop-blur-sm p-4 z-50">


            <div className="w-full max-w-md flex items-center justify-center flex-col gap-10 h-fit py-8 px-6 bg-[#F7FCFE] shadow-md rounded-md max-h-[90vh] overflow-y-auto" >

                <h1 className="mx-auto text-center font-merienda font-extrabold text-[#008CC1] text-xl md:text-3xl">Are you sure you want to delete this blog ?</h1>

                <div className="w-fit flex items-center gap-6" >
                    <button onClick={() => setConfirmDeleteModal?.(false)} type="button" className=" bg-[#008CC1] py-3 px-7 text-lg font-medium text-white rounded-xl cursor-pointer   ">No</button>
                    <button onClick={() => handleDelete(selectedIndex)} type="button" className="bg-[#008CC1] py-3 px-7 text-lg font-medium text-white rounded-xl cursor-pointer hover:bg-red-600 " >Yes</button>

                </div>

            </div>

        </div>
    )
}