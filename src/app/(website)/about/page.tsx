import AboutUsPage from "@/components/AboutComponents/AboutUsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lion Science Park",
  description:
    "Learn about Lion Science Park, our mission, vision, and commitment to advancing science, technology, innovation, research, and collaboration.",

  keywords: [
    "Lion Science Park",
    "About Lion Science Park",
    "Science Park",
    "Innovation Hub",
    "Research and Development",
    "Technology and Innovation",
    "Scientific Collaboration",
    "African Science Park",
  ],

  authors: [{ name: "Lion Science Park" }],
  creator: "Lion Science Park",
  publisher: "Lion Science Park",

  metadataBase: new URL("https://www.lionsciencepark.com"),

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Us | Lion Science Park",
    description:
      "Discover Lion Science Park’s mission, vision, and role in driving science, technology, innovation, and research through collaboration.",
    url: "https://www.lionsciencepark.com/about",
    siteName: "Lion Science Park",
    images: [
      {
        url: "/about-us/about-us-hero.webp",
        width: 1200,
        height: 630,
        alt: "About Lion Science Park",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Lion Science Park",
    description:
      "Learn more about Lion Science Park and our mission to advance science, technology, innovation, and research.",
    images: ["/about-us/about-us-hero.webp"],
    creator: "@LionSciencePark",
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
  return <AboutUsPage />;
}
