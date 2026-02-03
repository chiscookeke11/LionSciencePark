import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Onest, Poppins, Signika } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Lion Science Park | Learn. Innovate. Grow.",
  description:
    "Lion Science Park is your hub for innovation, research, and skill-building at the University of Nigeria, Nsukka (UNN).",
  keywords: [
    "Lion Science Park",
    "UNN",
    "University of Nigeria Nsukka",
    "Innovation hub UNN",
    "Research facility UNN",
    "STEM education UNN",
    "Science and Technology",
    "Technology lab UNN",
    "Student research UNN",
    "Innovation center",
    "Entrepreneurship UNN",
    "Skill-building programs",
    "Education and research",
    "Tech innovation",
    "Startup support UNN",
    "Lion Science Park UNN"
  ],
  applicationName: "Lion Science Park",
  authors: [{ name: "Lion Science Park Team", url: "https://www.lionsciencepark.com" }],
  creator: "Lion Science Park Team",
  publisher: "Lion Science Park Team",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./favicon.ico",
  },
  openGraph: {
    title: "Lion Science Park",
    description:
      "Your hub for innovation, research, and skill-building at the University of Nigeria, Nsukka (UNN).",
    url: "https://www.lionsciencepark.com",
    siteName: "Lion Science Park",
    images: [
      {
        url: "./favicon.ico", // Replace with a proper OG image for better previews
        width: 1200,
        height: 630,
        alt: "Lion Science Park",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion Science Park",
    description:
      "Lion Science Park: Learn, innovate, and grow with us at UNN. Follow us on X, Facebook, and Instagram.",
    site: "@LionSciencePark",
    creator: "@LionSciencePark",
    images: ["./favicon.ico"],
  },
  metadataBase: new URL("https://www.lionsciencepark.com"),
  alternates: {
    canonical: "https://www.lionsciencepark.com",
  },
};


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"]
})

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"]
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="r5SzSUHuqiWJ9gCEJ4eKPUrxovddbbjWviCEdrvwzUM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${signika.variable} ${onest.variable} ${inter.variable} antialiased`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
