import CohortPage from "@/components/cohort-form-components/CohortFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Roar Nigeria Hub 2026 Incubation Cohort Application",
    description:
        "Apply for the Roar Nigeria Hub 2026 Incubation Cohort. Open to UNN students and early-stage tech founders in Nsukka building scalable solutions in fintech, agritech, healthtech, edtech, ICT and more.",

    keywords: [
        "Roar Nigeria Hub",
        "UNN incubation program",
        "startup incubation Nigeria",
        "tech startups Nsukka",
        "UNN student startups",
        "Roar Nigeria incubation 2026",
        "startup accelerator Nigeria",
    ],

    openGraph: {
        title: "Roar Nigeria Hub 2026 Incubation Cohort",
        description:
            "Are you a UNN student or young entrepreneur in Nsukka with a tech-driven idea? Apply for the Roar Nigeria Hub 2026 Incubation Cohort and get mentorship, product support, and investor exposure.",
        url: "https://yourdomain.com/cohort-form",
        siteName: "Roar Nigeria Hub",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Roar Nigeria Hub 2026 Incubation Cohort",
        description:
            "Applications are open for the Roar Nigeria Hub 2026 Incubation Cohort. Build, validate and scale your startup with mentorship and support.",
    },
};

export default function Page() {
    return (
        <CohortPage />
    );
}