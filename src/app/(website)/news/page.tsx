import NewsPage from "@/components/NewsComponents/NewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Lion Science Park",
  description:
    "Stay updated with the latest news, events, research breakthroughs, and innovations from Lion Science Park, your hub for science and technology advancement.",

  keywords: [
    "Lion Science Park News",
    "Science and Technology Updates",
    "Research News",
    "Innovation Announcements",
    "Science Events",
    "Tech Breakthroughs",
    "Lion Science Park Updates",
  ],

  authors: [{ name: "Lion Science Park" }],
  creator: "Lion Science Park",
  publisher: "Lion Science Park",

  metadataBase: new URL("https://www.lionsciencepark.com"),

  alternates: {
    canonical: "/news",
  },

  openGraph: {
    title: "News & Updates | Lion Science Park",
    description:
      "Discover the latest research, innovations, and events at Lion Science Park. Stay informed on science, technology, and collaboration breakthroughs.",
    url: "https://www.lionsciencepark.com/news",
    siteName: "Lion Science Park",
    images: [
      {
        url: "/news-images/news-hero.webp",
        width: 1200,
        height: 630,
        alt: "Lion Science Park News",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "News & Updates | Lion Science Park",
    description:
      "Stay updated on the latest events, research breakthroughs, and innovations from Lion Science Park.",
    images: ["/news-images/news-hero.webp"],
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
  return <NewsPage />;
}
