"use client"

import { CohortFormData } from "@/Types/types"
import { useState } from "react"


export default function CohortPage() {
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState<CohortFormData>({
        startup_name: "",
        founder_phonenumber: "",
        founder_email: "",
        problem_solving: "",
        solution_description: "",
        industry_category: "",
        startup_stage: "",
        have_customers: false,
        have_pitchdeck: false,
        pitchdeck_url: "",
    })



    // function to handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }




    // function to handle textarea change
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    return (
        <div className="bg-white flex items-center justify-center min-h-screen py-16 px-[3%] " >

            <div className="p-0.5 bg-[#00BFA6] rounded-2xl w-full flex items-center justify-center max-w-4xl" >
                <form className="font-onest bg-white w-full  h-fit py-20 px-4 flex flex-col items-center justify-between gap-7 rounded-2xl border border-[#131313] " >

                    <h1 className="font-onest font-semibold text-xl md:text-5xl text-center">Apply for cohort 6</h1>



                    <div className="w-full flex flex-col items-center justify-center gap-6 " >
                        {/* Start up name  */}
                        <label htmlFor="startup_name" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">Startup Name *</span>
                            <input
                                value={formValues.startup_name}
                                id="startup_name"
                                name="startup_name"
                                onChange={handleChange}
                                placeholder="Enter Startup"
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                            />
                        </label>





                        {/* Founder's phone number  */}
                          <label htmlFor="founder_phonenumber" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">Founder's Phone number *</span>
                            <input
                                value={formValues.founder_phonenumber}
                                id="founder_phonenumber"
                                name="founder_phonenumber"
                                onChange={handleChange}
                                placeholder="Enter Founder's phone number"
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                            />
                        </label>



                        {/* Founder's email */}
                           <label htmlFor="founder_email" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">Founder's founder_email *</span>
                            <input
                                value={formValues.founder_email}
                                id="founder_email"
                                name="founder_email"
                                onChange={handleChange}
                                placeholder="Enter Founder's email"
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                            />
                        </label>





                        {/* Problem solving  */}
                        <label htmlFor="startup_name" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">What problem are you solving? *</span>
                            <textarea
                                name="problem_solving"
                                id="problem_solving"
                                onChange={handleTextareaChange}
                                placeholder="Describe the problem you are solving"
                                value={formValues.problem_solving}
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                                rows={5}
                            />
                        </label>




                          {/* Describe your solution  */}
                        <label htmlFor="startup_name" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">Describe your solution *</span>
                            <textarea
                                name="solution_description"
                                id="solution_description"
                                onChange={handleTextareaChange}
                                placeholder="Describe your solution"
                                value={formValues.solution_description}
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                                rows={5}
                            />
                        </label>








                    </div>






                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center rounded-xl text-white justify-center gap-4 bg-[#00BFA6] cursor-pointer hover:bg-[#00BFA6]/90 py-3 px-6 h-fit text-base font-medium font-lato"
                    >
                        {loading ? "Submitting" : "Submit"}
                    </button>


                </form>
            </div>

        </div>
    )
}