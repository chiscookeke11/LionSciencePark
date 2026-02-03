import AboutUsPage from "@/components/AboutComponents/AboutUsPage";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: "About Us | Lion Science Park",
    description:
        "Learn about Lion Science Park, our mission, vision, and commitment to advancing science, technology, and innovation through collaboration and research."
};

export default function Page() {
    return (
        <AboutUsPage />
        
    )
}