import AboutUs from "@/components/HomeComponents/AboutUs";
import ContactUs from "@/components/HomeComponents/ContactUs";
import FocusAreas from "@/components/HomeComponents/FocusAreas";
import HeroSection from "@/components/HomeComponents/HeroSection";
import OurPartners from "@/components/HomeComponents/OurPartners";
import Footer from "@/components/UI/Footer";

export default function Home() {
  return (
    <div className="bg-white "   >
        <HeroSection/>
        <AboutUs/>
        <FocusAreas/>
        <OurPartners/>
        <ContactUs/>
        <Footer/>
    </div>
    );
}