import { Metadata } from "next";
import { supabase } from "../../../../../lib/supabaseClient";
import DynamicNewsPage from "@/components/NewsComponents/DynamicNewsPage";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {



    const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", (await params).id)
        .single();

    if (error || !data) {
        return {
            title: "Not Found | Lion Science Park",
            description: "The requested news article could not be found.",
            robots: { index: false },
        };
    }

    return {
        title: `${data.title} | TheGreyIT`,
        description: data.excerpt,
        keywords: [data.title],
        alternates: {
            canonical: `https://www.thegreyit.org/research-blog/${(await params).id}`,
        },
        openGraph: {
            title: data.title,
            description: data.content,
            images: [{ url: data.image }],
            type: "article",
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true
            }
        },
        icons: {
            icon: "./favicon.ico",
            shortcut: "./favicon.ico",
            apple: "./favicon.ico",
        },
    };
}



export default async function Page() {
    return (
        <DynamicNewsPage  />
    )
}