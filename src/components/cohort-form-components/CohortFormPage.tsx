"use client"

import { CohortFormData } from "@/Types/types"
import React, { useState } from "react"
import { CustomCheckBox } from "../UI/CustomCheckbox"
import { haveCustomersOptions, havePitchDeckOptions, StartupCategoryOptions, startupStageOptions } from "@/Data/startup-form-data"
import { CustomSelect } from "../UI/CustomSelect"
import { decreaseTeamMembersCount, handleFileChange, handleInputChange, handleSelectChange, handleTeamMemberChange, handleTextareaChange, increaseTeamMembersCount } from "@/lib/utils"
import { Minus, PlusIcon } from "lucide-react"
import toast from "react-hot-toast"
import { supabase } from "../../../lib/supabaseClient"


export default function CohortPage() {
    const [loading, setLoading] = useState(false)
    const max_team_members = 100
    const [formValues, setFormValues] = useState<CohortFormData>({
        startup_name: "",
        founder_phonenumber: "",
        founder_email: "",
        problem_solving: "",
        solution_description: "",
        industry_category: "",
        startup_stage: "",
        have_customers: "",
        have_pitchdeck: "",
        pitchdeck_url: "",
        pitchdeck_file: null,
        team_members: [{ fullName: "", role: "" }]
    })







    // function  to handle form submissions
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (
            !formValues.startup_name ||
            !formValues.founder_phonenumber ||
            !formValues.founder_email ||
            !formValues.problem_solving ||
            !formValues.solution_description ||
            !formValues.have_customers ||
            !formValues.industry_category ||
            !formValues.startup_stage || (formValues.have_pitchdeck === "yes" && !formValues.pitchdeck_file)
        ) {
            toast.error("Please fill all required fields")
            return
        }

        if (formValues.pitchdeck_file && formValues.pitchdeck_file.size > 5 * 1024 * 1024) {
            toast.error("Pitch deck must be less than 5MB")
        }


        setLoading(true)

        try {
            let pitchdeckUrl = ""

            if (formValues.pitchdeck_file) {

                const filename = `${Date.now()}-${formValues.pitchdeck_file.name}`

                const { error: uploadError } = await supabase.storage
                    .from("pitch-decks")
                    .upload(filename, formValues.pitchdeck_file)

                if (uploadError) throw uploadError;

                const { data } = supabase.storage
                    .from("pitch-decks")
                    .getPublicUrl(filename)

                pitchdeckUrl = data.publicUrl
            }

            const { error } = await supabase
                .from("cohort_applications")
                .insert({
                    startup_name: formValues.startup_name,
                    founder_phonenumber: formValues.founder_phonenumber,
                    founder_email: formValues.founder_email,
                    problem_solving: formValues.problem_solving,
                    solution_description: formValues.solution_description,
                    industry_category: formValues.industry_category,
                    startup_stage: formValues.startup_stage,
                    have_customers: formValues.have_customers,
                    have_pitchdeck: formValues.have_pitchdeck,
                    pitchdeck_url: pitchdeckUrl,
                    team_members: formValues.team_members
                })

            if (error) throw error

            toast.success("Application submitted successfully!")
            setFormValues({
                founder_email: "",
                founder_phonenumber: "",
                have_customers: "",
                have_pitchdeck: "",
                industry_category: "",
                pitchdeck_file: null,
                pitchdeck_url: "",
                problem_solving: "",
                solution_description: "",
                startup_name: "",
                startup_stage: "",
                team_members: [{ fullName: "", role: "" }]
            })
        }
        catch (error) {
            console.error(error)
            toast.error("Something went wrong")
        }
        finally {
            setLoading(false)
        }
    }






    return (
        <div className="bg-white flex items-center justify-center min-h-screen py-16 px-[3%] text-[#3a3a3a] " >

            <div className="p-0.5 bg-[#00BFA6] rounded-2xl w-full flex items-center justify-center max-w-3xl" >
                <form
                    onSubmit={handleSubmit}
                    className="font-onest bg-white w-full  h-fit py-20 px-4 flex flex-col items-center justify-between gap-7 rounded-2xl border " >

                    <h1 className="font-onest font-semibold text-xl md:text-5xl text-center">Apply for cohort 6</h1>



                    <div className="w-full flex flex-col items-center justify-center gap-6 " >
                        {/* Start up name  */}
                        <label htmlFor="startup_name" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">Startup Name *</span>
                            <input
                                value={formValues.startup_name}
                                id="startup_name"
                                name="startup_name"
                                onChange={(e) => handleInputChange(e, setFormValues)}
                                placeholder="Enter Startup"
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                            />
                        </label>





                        {/* Founder's phone number  */}
                        <label htmlFor="founder_phonenumber" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">Founder&apos;s Phone number *</span>
                            <input
                                value={formValues.founder_phonenumber}
                                id="founder_phonenumber"
                                name="founder_phonenumber"
                                onChange={(e) => handleInputChange(e, setFormValues)}
                                placeholder="Enter Founder's phone number"
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                            />
                        </label>



                        {/* Founder's email */}
                        <label htmlFor="founder_email" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">Founder&apos;s founder_email *</span>
                            <input
                                value={formValues.founder_email}
                                id="founder_email"
                                name="founder_email"
                                onChange={(e) => handleInputChange(e, setFormValues)}
                                placeholder="Enter Founder's email"
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                            />
                        </label>




                        {/* Team members data */}

                        <div className="w-full flex flex-col items-start gap-7 "  >
                            <h2 className="text-lg font-semibold text-[#00BFA6]">
                                Team Members
                            </h2>

                            {formValues.team_members.map((member, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col md:flex-row items-center gap-6"
                                >
                                    <input
                                        type="text"
                                        placeholder={`Member ${index + 1} Name`}
                                        value={member.fullName}
                                        onChange={(e) =>
                                            handleTeamMemberChange(
                                                index,
                                                "fullName",
                                                e.target.value,
                                                setFormValues,
                                                formValues.team_members
                                            )
                                        }
                                        className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] py-2 px-3 w-full"
                                        required={index === 0}
                                    />

                                    <input
                                        type="text"
                                        placeholder={`Member ${index + 1} Role`}
                                        value={member.role}
                                        onChange={(e) =>
                                            handleTeamMemberChange(
                                                index,
                                                "role",
                                                e.target.value,
                                                setFormValues,
                                                formValues.team_members
                                            )
                                        }
                                        className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] py-2 px-3 w-full"
                                        required={index === 0}
                                    />
                                </div>
                            ))}


                            {/* The buttons  */}
                            <div className="w-fit flex items-center justify-center gap-3 ml-auto">
                                <button
                                    onClick={() => decreaseTeamMembersCount(formValues.team_members, setFormValues)}
                                    type="button"
                                    className="cursor-pointer border-2 border-[#00BFA6] rounded-full h-8 w-8 flex items-center justify-center"
                                >
                                    <Minus size={20} color="#00BFA6" />
                                </button>

                                <button
                                    onClick={() => increaseTeamMembersCount(max_team_members, formValues.team_members, setFormValues)}
                                    type="button"
                                    className="cursor-pointer border-2 border-[#00BFA6] rounded-full h-8 w-8 flex items-center justify-center"
                                >
                                    <PlusIcon size={20} color="#00BFA6" />
                                </button>
                            </div>
                        </div>






                        {/* Problem solving  */}
                        <label htmlFor="startup_name" className="w-full flex flex-col gap-1">
                            <span className="text-lg font-semibold text-[#00BFA6]">What problem are you solving? *</span>
                            <textarea
                                name="problem_solving"
                                id="problem_solving"
                                onChange={(e) => handleTextareaChange(e, setFormValues)}
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
                                onChange={(e) => handleTextareaChange(e, setFormValues)}
                                placeholder="Describe your solution"
                                value={formValues.solution_description}
                                className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] shadow-none focus:shadow-0 py-2 px-3 h-fit focus:outline-none focus:ring-0 focus-visible:ring-0 text-[#1e1e1e] font-semibold text-base"
                                required
                                rows={5}
                            />
                        </label>




                        {/* Startup category */}
                        <div className="w-full flex flex-col items-start gap-2 " >
                            <h1 className="text-lg font-semibold text-[#00BFA6]" >What industry does your startup operate</h1>

                            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-stretch  "  >
                                {StartupCategoryOptions.map((option) => {
                                    const isChecked = formValues.industry_category === option
                                    return (
                                        <CustomCheckBox
                                            key={option}
                                            checked={isChecked}
                                            label={option.toUpperCase()}
                                            id={option.toLowerCase()}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setFormValues((prev) => ({
                                                        ...prev,
                                                        industry_category: option,
                                                    }))
                                                }
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        </div>




                        {/* Start up stage  */}
                        <div className="w-full flex flex-col items-start gap-2 " >
                            <h1 className="text-lg font-semibold text-[#00BFA6]" >Current stage of startup</h1>


                            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-stretch  "  >
                                {startupStageOptions.map((option) => {
                                    const isChecked = formValues.startup_stage === option
                                    return (
                                        <CustomCheckBox
                                            key={option}
                                            checked={isChecked}
                                            label={option.toUpperCase()}
                                            id={option.toLowerCase()}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setFormValues((prev) => ({
                                                        ...prev,
                                                        startup_stage: option,
                                                    }))
                                                }
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        </div>


                        {/* Have users/Customers */}
                        <div className="w-full col-span-2 " >
                            <CustomSelect
                                name="have_customers"
                                value={formValues.have_customers}
                                options={haveCustomersOptions}
                                placeholder="Please select an option"
                                onChange={(name, value) =>
                                    handleSelectChange<CohortFormData>(
                                        "have_customers",
                                        value,
                                        setFormValues
                                    )
                                }
                                label="Do you have users/customers?"
                            />
                        </div>




                        {/* Have a pitch deck */}
                        <div className="w-full col-span-2 " >
                            <CustomSelect
                                name="have_pitchdeck"
                                value={formValues.have_pitchdeck}
                                options={havePitchDeckOptions}
                                placeholder="Please select an option"
                                onChange={(name, value) =>
                                    handleSelectChange<CohortFormData>(
                                        "have_pitchdeck",
                                        value,
                                        setFormValues
                                    )
                                }
                                label="Do you have a pitch deck?"
                            />
                        </div>



                        {
                            formValues.have_pitchdeck === "yes" && (
                                <label htmlFor="pitchdeck_file" className="w-full flex flex-col gap-1 " >
                                    <span className="text-lg font-semibold text-[#00BFA6] " >Upload your pitch deck (PDF or Slides)</span>

                                    <input
                                        type="file"
                                        name="pitchdeck_file"
                                        id="pitchdeck_file"
                                        accept=".pdf, .ppt, .pptx"
                                        onChange={(e) => handleFileChange(e, setFormValues)}
                                        className="bg-transparent outline-none rounded-sm border-2 border-[#00BFA6] py-2 px-3 text-[#1e1e1e] font-semibold text-base"
                                        required={formValues.have_pitchdeck === "yes"}
                                    />

                                    {formValues.pitchdeck_file && (
                                        <p className="text-sm text-gray-600">
                                            Selected file: {formValues.pitchdeck_file.name}
                                        </p>
                                    )}
                                </label>
                            )
                        }





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