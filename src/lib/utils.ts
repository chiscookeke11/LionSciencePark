import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CohortFormData } from "@/Types/types"
import { SetStateAction, Dispatch } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// select change function
export const handleSelectChange = <T extends object>(
  name: keyof T,
  value: string,
  setFormValues: React.Dispatch<React.SetStateAction<T>>
) => {
  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));
};



// Handle input change
export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormValues: Dispatch<SetStateAction<CohortFormData>>
) => {
  const { name, value } = e.target
  if (name === "founder_phonenumber" && !/^\d*$/.test(value)) return

  setFormValues(prev => ({ ...prev, [name]: value }))
}


// Handle textarea change
export const handleTextareaChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setFormValues: Dispatch<SetStateAction<CohortFormData>>
) => {
  const { name, value } = e.target
  setFormValues(prev => ({ ...prev, [name]: value }))
}

// Handle file change
export const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormValues: Dispatch<SetStateAction<CohortFormData>>
) => {
  const file = e.target.files?.[0] || null
  setFormValues(prev => ({ ...prev, pitchdeck_file: file }))
}

// Handle team member changes
export const handleTeamMemberChange = (
  index: number,
  field: "fullName" | "role",
  value: string,
  setFormValues: Dispatch<SetStateAction<CohortFormData>>,
  team_members: CohortFormData["team_members"]
) => {
  const updatedMembers = [...team_members]
  updatedMembers[index][field] = value
  setFormValues(prev => ({ ...prev, team_members: updatedMembers }))
}

// Increase team members
export const increaseTeamMembersCount = (
  max_team_members: number,
  team_members: CohortFormData["team_members"],
  setFormValues: Dispatch<SetStateAction<CohortFormData>>
) => {
  if (team_members.length >= max_team_members) return
  setFormValues(prev => ({
    ...prev,
    team_members: [...prev.team_members, { fullName: "", role: "" }]
  }))
}

// Decrease team members
export const decreaseTeamMembersCount = (
  team_members: CohortFormData["team_members"],
  setFormValues: Dispatch<SetStateAction<CohortFormData>>
) => {
  if (team_members.length <= 1) return
  setFormValues(prev => ({
    ...prev,
    team_members: team_members.slice(0, -1)
  }))
}