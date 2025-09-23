import { Send } from "lucide-react";



export default function ContactUs() {
    return (
        <section className=" w-full h-fit flex items-end pt-16 justify-center md:justify-start px-4 bg-no-repeat bg-center bg-cover font-poppins " style={{ backgroundImage: "url('/homepage-images/contactUs-bg.webp')" }} >


            <form action="" className="w-full max-w-md bg-white h-fit flex flex-col items-center gap-10 py-7 px-4 md:px-6 rounded-t-lg md:ml-44 " >
                <h4 className=" font-semibold text-black text-xl md:text-3xl" >Contact Us</h4>


                <div className="w-full flex flex-col items-center gap-10 " >
                    <label htmlFor="fullname" className="w-full flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Full Name</span>
                        <input type="text" name="fullname" id="fullname" placeholder="John Doe" className=" w-full border-0 border-b-2 border-[#008CC1] pb-2 outline-none focus:outline-none text-base font-medium " />
                    </label>

                    <label htmlFor="email" className="w-full flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Email</span>
                        <input type="email" name="email" id="email" placeholder="john@gmail.com" className=" w-full border-0 border-b-2 border-[#008CC1] pb-2 outline-none focus:outline-none text-base font-medium" />
                    </label>

                    <label htmlFor="phoneNumber" className="w-full  flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Phone Number</span>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="+273 5489 5403" className=" w-full border-0 border-b-2 border-[#008CC1] pb-2 outline-none focus:outline-none text-base font-medium " />
                    </label>

                    <label htmlFor="message" className="w-full  flex flex-col gap-1 items-start" >
                        <span className="text-sm font-semibold">Message</span>
                        <textarea rows={3} cols={4} name="message" id="message" className="w-full border-0 border-b-2 border-[#008CC1] py-2 outline-none focus:outline-none text-base font-medium" >

                        </textarea>
                    </label>

                </div>


                <button className=" flex items-center justify-center gap-4 bg-[#008CC1] py-4 px-5 text-white rounded-md cursor-pointer transform hover:scale-105 transition-all duration-300 " >Send Message <Send size={18} /></button>
            </form>
        </section>
    )
}