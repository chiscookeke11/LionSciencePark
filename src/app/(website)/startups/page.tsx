import Spinner from "@/components/UI/Spinner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startups | Coming Soon | Lion Science Park",
  description:
    "Exciting startups and innovative ventures are coming soon at Lion Science Park. Stay tuned to discover the next wave of science and technology entrepreneurs.",

  keywords: [
    "Lion Science Park Startups",
    "Upcoming Startups",
    "Innovation",
    "Entrepreneurship",
    "Science and Technology Ventures",
    "Future Startups",
  ],

  authors: [{ name: "Lion Science Park" }],
  creator: "Lion Science Park",
  publisher: "Lion Science Park",

  metadataBase: new URL("https://www.lionsciencepark.com"),

  alternates: {
    canonical: "/startups",
  },

  openGraph: {
    title: "Startups | Coming Soon | Lion Science Park",
    description:
      "Get ready to explore innovative startups and ventures at Lion Science Park. Stay updated on the upcoming wave of entrepreneurs and technology pioneers.",
    url: "https://www.lionsciencepark.com/startups",
    siteName: "Lion Science Park",
    images: [
      {
        url: "/tenants/image_7.jpg",
        width: 1200,
        height: 630,
        alt: "Lion Science Park Startups Coming Soon",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Startups | Coming Soon | Lion Science Park",
    description:
      "Exciting startups and technology ventures are coming soon at Lion Science Park. Stay tuned!",
    images: ["/startups/startups-hero.webp"],
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
    <div className="w-full h-screen flex items-center justify-center flex-col gap-3 font-onest bg-white">
      <Spinner />
      <h4 className="text-black font-semibold text-2xl">Coming Soon..</h4>
    </div>
  );
}
