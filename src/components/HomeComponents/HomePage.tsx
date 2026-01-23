"use client"

import AboutUs from "@/components/HomeComponents/AboutUs";
import BlogSection from "@/components/HomeComponents/BlogSection";
import ContactUs from "@/components/HomeComponents/ContactUs";
import FocusAreas from "@/components/HomeComponents/FocusAreas";
import HeroSection from "@/components/HomeComponents/HeroSection";
import OurPartners from "@/components/HomeComponents/OurPartners";

export default function HomePage() {
  return (
    <div className="bg-white "   >
        <HeroSection/>
        <AboutUs/>
        <FocusAreas/>
        <OurPartners/>
        <BlogSection/>
        <ContactUs/>
    </div>
    );
}