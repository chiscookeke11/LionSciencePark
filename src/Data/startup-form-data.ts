import { CohortFormData, customSelectTypes } from "@/Types/types";



export const StartupCategoryOptions: CohortFormData["industry_category"][] = [
    "agrictech",
    "ai/data",
    "e-commerce",
    "edutech",
    "fintech",
    "healthtech",
    "others"
]


export const startupStageOptions: CohortFormData["startup_stage"][] = [
    "generating revenue",
    "idealogy",
    "prototype/mvp"
]



export const haveCustomersOptions: customSelectTypes[] = [
    {
        label: "Yes",
        value: "yes",
    },
    {
        label: "No",
        value: "No"
    }
]


export const havePitchDeckOptions: customSelectTypes[] = [
    {
        label: "Yes",
        value: "yes",
    },
    {
        label: "No",
        value: "No"
    }
]