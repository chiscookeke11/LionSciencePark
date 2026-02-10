import TenantsPage from "@/components/tenants-components/TenantsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Tenants | Lion Science Park",
  description:
    "Discover startups and innovative companies currently incubated at Lion Science Park, driving science, technology, and entrepreneurship.",

  keywords: [
    "Lion Science Park Tenants",
    "Startups",
    "Innovation Companies",
    "Incubation Programs",
    "Entrepreneurship",
    "Science and Technology Startups",
    "Lion Science Park Innovation Hub",
  ],

  authors: [{ name: "Lion Science Park" }],
  creator: "Lion Science Park",
  publisher: "Lion Science Park",

  metadataBase: new URL("https://www.lionsciencepark.com"),

  alternates: {
    canonical: "/our-tenants",
  },

  openGraph: {
    title: "Our Tenants | Lion Science Park",
    description:
      "Explore the innovative startups and companies incubated at Lion Science Park, leading in science, technology, and entrepreneurship.",
    url: "https://www.lionsciencepark.com/our-tenants",
    siteName: "Lion Science Park",
    images: [
      {
        url: "/tenants/image_7.jpg",
        width: 1200,
        height: 630,
        alt: "Lion Science Park Tenants",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Tenants | Lion Science Park",
    description:
      "Meet the startups and innovative companies driving entrepreneurship and innovation at Lion Science Park.",
    images: ["/tenants/image_7.jpg"],
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
  return <TenantsPage />;
}
