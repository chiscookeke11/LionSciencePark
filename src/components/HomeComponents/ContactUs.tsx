"use client"


import { Send } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";


export default function ContactUs() {

    const formRef = useRef<HTMLFormElement | null>(null)
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === "phoneNumber" && isNaN(Number(value))) return;


        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target

        setFormValues((prev) => ({
            ...prev,
            message: value
        }))
    }




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        if (!formValues.email || !formValues.fullName || !formValues.phoneNumber || !formValues.message) {
            toast.error("Please fill in all fields")
            return;
        }

        setLoading(true)

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef?.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Message sent successfully!");
                    setLoading(false)
                    setFormValues({
                        fullName: "",
                        email: "",
                        message: "",
                        phoneNumber: ""
                    })
                },
                (error) => {
                    toast.error(error.text);
                    setLoading(false)
                }
            );


    }




    return (
        <section className=" w-full h-fit flex items-end pt-16 justify-center md:justify-start px-4 bg-no-repeat bg-center bg-cover font-poppins " style={{ backgroundImage: "url('/homepage-images/contactUs-bg.webp')" }} >


            <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md bg-white h-fit flex flex-col items-center gap-10 py-7 px-4 md:px-6 rounded-t-lg md:ml-44 " >
                <h4 className=" font-semibold text-black text-xl md:text-3xl" >Contact Us</h4>


                <div className="w-full flex flex-col items-center gap-10 " >
                    <label htmlFor="fullname" className="w-full flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Full Name</span>
                        <input onChange={handleChange} value={formValues.fullName} type="text" name="fullName" id="fullname" placeholder="John Doe" className=" w-full border-0 border-b-2 border-[#008CC1] pb-2 outline-none focus:outline-none text-base font-medium " />
                    </label>

                    <label htmlFor="email" className="w-full flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Email</span>
                        <input onChange={handleChange} value={formValues.email} type="email" name="email" id="email" placeholder="john@gmail.com" className=" w-full border-0 border-b-2 border-[#008CC1] pb-2 outline-none focus:outline-none text-base font-medium" />
                    </label>

                    <label htmlFor="phoneNumber" className="w-full  flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Phone Number</span>
                        <input onChange={handleChange} value={formValues.phoneNumber} type="text" name="phoneNumber" id="phoneNumber" placeholder="+273 5489 5403" className=" w-full border-0 border-b-2 border-[#008CC1] pb-2 outline-none focus:outline-none text-base font-medium " />
                    </label>

                    <label htmlFor="message" className="w-full  flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Message</span>
                        <textarea onChange={handleTextareaChange} value={formValues.message} rows={3} cols={4} name="message" id="message" className="w-full border-0 border-b-2 border-[#008CC1] py-2 outline-none focus:outline-none text-base font-medium" >

                        </textarea>
                    </label>

                </div>


                <button disabled={loading} className=" flex items-center justify-center gap-4 bg-[#008CC1] py-4 px-5 text-white rounded-md cursor-pointer transform hover:scale-105 transition-all duration-300 " >Send Message {loading ? "..." : <Send size={18} />} </button>
            </form>
        </section>
    )
}