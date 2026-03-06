import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/UI/select"
import "../shadcn-default-style.css";
import { customSelectTypes } from "@/Types/types";




interface CustomSelectProps {
    label?: string,
    options?: customSelectTypes[]
    placeholder?: string
    name: string;
    onChange?: (value: string, name: string) => void;
    error?: string;
    value?: string
}

export function CustomSelect({ label, options, placeholder, onChange, error, value, name }: CustomSelectProps) {
    return (
        <div className="w-full flex  flex-col items-start gap-1  " >
            <span className="text-lg font-semibold text-[#00BFA6]" > {label}</span>
            <Select value={value} onValueChange={(selectedValue) => onChange?.(name, selectedValue)}  >
                <SelectTrigger className="w-full border border-gray-700 shadow-none bg-white focus:shadow-none cursor-pointer  py-2  ">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="cursor-pointer">
                    <SelectGroup>
                        <SelectLabel>{ }</SelectLabel>
                        {options?.map((option, index) => (
                            <SelectItem key={index} value={option.value} className="cursor-pointer" >{option.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {error && <p className="text-red-500 text-xs md:text-sm ml-auto ">{error}</p>}
        </div>
    )
}
