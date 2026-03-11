"use client"

import { CohortFormData } from "@/Types/types"
import { useEffect, useState } from "react"
import { supabase } from "../../../../../../lib/supabaseClient"
import Spinner from "@/components/UI/Spinner"
import { useParams } from "next/navigation"



export default function Page() {

    const [registrant, setRegistrant] = useState<CohortFormData | null>(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    const fetchUserApplication = async () => {
        if (!id) return;
        setLoading(true)


        const { data, error } = await supabase.from("cohort_applications").select("*").eq("id", id).maybeSingle()

        if (error) {
            console.error("Error fetching applications:", error)
            setLoading(false)
        }
        setRegistrant(data)
        setLoading(false)
    }


    useEffect(() => {
        fetchUserApplication()
    }, [id])


    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center" >
                <Spinner />
            </div>
        )
    }

    if (!registrant && !loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center" >
                <h1 className=" font-syne font-semibold text-2xl">User application not found</h1>
            </div>
        )
    }

    return (
        <div className="w-full flex items-start px-[3%] py-10 gap-5 justify-center flex-col  text-black  " >



            <h1 className="font-syne font-semibold text-2xl">
                {registrant?.startup_name
                    ? `${registrant.startup_name[0].toUpperCase()}${registrant.startup_name.slice(1).toLowerCase()}'s application`
                    : "Application"}
            </h1>


            <div className="w-full flex flex-col items-start gap-4 py-4 ">
                <table className="w-full border border-gray-300 text-left">
                    {/* Table Header */}
                    <thead className="bg-gray-100 text-sm ">
                        <tr>
                            <th className="border px-4 py-2 max-w-[200px]!">Field</th>
                            <th className="border px-4 py-2">Value</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="font-normal text-sm">
                        <tr>
                            <td className="border px-4 py-2">Startup Name</td>
                            <td className="border px-4 py-2">{registrant?.startup_name || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Founder Phone Number</td>
                            <td className="border px-4 py-2">{registrant?.founder_phonenumber || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Founder Email</td>
                            <td className="border px-4 py-2">{registrant?.founder_email || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Problem We Are Solving</td>
                            <td className="border px-4 py-2">{registrant?.problem_solving || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Solution Description</td>
                            <td className="border px-4 py-2">{registrant?.solution_description || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Industry Category</td>
                            <td className="border px-4 py-2">{registrant?.industry_category || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Startup Stage</td>
                            <td className="border px-4 py-2">{registrant?.startup_stage || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Have Customers</td>
                            <td className="border px-4 py-2">{registrant?.have_customers || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Have Pitch Deck</td>
                            <td className="border px-4 py-2">{registrant?.have_pitchdeck || "-"}</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Pitch Deck URL</td>
                            <td className="border px-4 py-2">
                                {registrant?.pitchdeck_url ? (
                                    <a
                                        href={registrant.pitchdeck_url}
                                        target="_blank"
                                        className="text-blue-600 underline"
                                    >
                                        View Pitch Deck
                                    </a>
                                ) : (
                                    "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">Team Members</td>
                            <td className="border px-4 py-2">
                                {registrant?.team_members?.length ? (
                                    <ul className="list-disc ml-5">
                                        {registrant.team_members.map((member, index) => (
                                            <li key={index}>
                                                {member.fullName} {member.role && `- ${member.role}`}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    "-"
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}