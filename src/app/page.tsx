import ContactUs from "@/components/HomeComponents/ContactUs";
import FocusAreas from "@/components/HomeComponents/FocusAreas";
import { Hero } from "@/components/HomeComponents/Hero";


export default function Home() {
  return (
    <div className="bg-[#081623] "   >
      <Hero/>
      <FocusAreas/>
      <ContactUs/>
    </div>
    );
}
