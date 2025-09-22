import Image from "next/image";
import Navbar from "../UI/Navbar";



export default function HeroSection() {
    return (
        <section className=" w-full h-[60vh] lg:h-screen relative flex items-center justify-center  bg-white font-poppins bg-no-repeat bg-center bg-cover bg-fixed " style={{ backgroundImage: "url('homepage-images/image1.webp')" }} >
            <Navbar />

            <div className=" absolute top-0 left-0 h-full w-full bg-black/55 " />


            <div className="w-full h-full flex items-center justify-center flex-col gap-2 absolute top-0 left-0 text-center text-white " >
                <h4 className="text-base md:text-xl font-semibold mb-2   " >WELCOME TO</h4>
                <h1 className="text-4xl md:text-8xl font-bold mb-4">Lion Science Park</h1>
                <p className="text-lg md:text-2xl max-w-2xl " >Den of bright minds reshaping the future through innovation, collaboration, and groundbreaking discoveries.</p>


                <button className="mt-8 bg-[#008CC1]  px-16 py-4 font-medium flex items-center justify-center cursor-pointer rounded-xs text-white " >Learn More</button>
            </div>


        </section>
    )
}