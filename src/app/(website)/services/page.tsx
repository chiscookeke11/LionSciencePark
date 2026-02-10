import FlipCard from "@/components/UI/FlipCard";
import { MobileServiceCard } from "@/components/UI/MobileFlipCard";
import { ServiceData } from "@/Data/ServicesData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Services | Lion Science Park",
    description:
        "Discover the wide range of services offered at Lion Science Park, including innovation support, research facilities, technology development, incubation programs, and collaborative solutions for startups and organizations.",

    keywords: [
        "Lion Science Park Services",
        "Innovation Support",
        "Research Facilities",
        "Technology Development",
        "Incubation Programs",
        "Startup Solutions",
        "Collaborative Research",
        "Science and Technology Hub",
    ],

    authors: [{ name: "Lion Science Park" }],
    creator: "Lion Science Park",
    publisher: "Lion Science Park",

    metadataBase: new URL("https://www.lionsciencepark.com"),

    alternates: {
        canonical: "/services",
    },

    openGraph: {
        title: "Our Services | Lion Science Park",
        description:
            "Explore Lion Science Park’s services including innovation support, research labs, tech development, and incubation programs for startups and organizations.",
        url: "https://www.lionsciencepark.com/services",
        siteName: "Lion Science Park",
        images: [
            {
                url: "/service-images/wave-haikei.svg",
                width: 1200,
                height: 630,
                alt: "Services at Lion Science Park",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Services | Lion Science Park",
        description:
            "Discover Lion Science Park’s innovation support, research facilities, technology development, and incubation programs.",
        images: ["/service-images/wave-haikei.svg"],
        creator: "@lionsciencepark",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    category: "Science & Technology",
};

export default function Page() {
    return (
        <div className="bg-white font-inter">
            {/* service hero section */}
            <section
                className="w-full h-[70vh] bg-black flex items-center justify-center flex-col gap-4 text-white py-4 px-3 text-center bg-no-repeat bg-center bg-cover relative overflow-hidden bg-fixed"
                style={{ backgroundImage: "url('/about-us/side.webp')" }}
            >
                <div className="bg-black/45 absolute inset-0 h-full w-full" />

                <div className="flex flex-col gap-3 z-30">
                    <h2 className="font-onest text-4xl md:text-8xl font-bold">Our Services</h2>
                    <p className="font-inter text-lg md:text-2xl max-w-2xl">
                        Explore the wide range of innovative solutions and expertise we offer at Lion Science Park.
                    </p>
                </div>

                <Image
                    src={"/service-images/wave-haikei.svg"}
                    alt="wave"
                    width={500}
                    height={500}
                    className="w-full absolute bottom-0 lg:bottom-[-200px] left-0"
                />
            </section>

            {/* services section */}
            <section className="w-full max-w-7xl mx-auto px-[6%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10 place-items-center justify-items-center">
                {ServiceData.map((data, i) => (
                    <>
                        <FlipCard key={i} data={data} />
                        <MobileServiceCard key={i} data={data} />
                    </>
                ))}
            </section>
        </div>
    );
}
