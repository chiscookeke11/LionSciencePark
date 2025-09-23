import Image from "next/image";



export default function AboutUs() {
    return (
        <section className="py-20 px-6 flex flex-col md:flex-row items-center justify-evenly gap-16 font-poppins "  >
            <div className="w-full max-w-2xl text-justify " >
                <h2 className=" text-3xl md:text-4xl mb-2 font-semibold md:mb-4 text-[#008CC1]" >About Us</h2>
                <p className=" font-medium text-base text-black font-signika">Lion Science Park (LSP) is the first university-based science park in Africa, established at the University of Nigeria, Nsukka (UNN). We serve as a hub where academia, industry, and government converge to drive innovation, research, and entrepreneurship.
                    <br />
                    <br />

                    Our mission is to transform ideas into sustainable solutions by supporting startups, researchers, and companies with incubation programs, co-working spaces, and technology transfer services. Through strategic partnerships and cutting-edge initiatives, we are building a vibrant innovation ecosystem that powers economic growth and societal development.</p>
            </div>

            <div className=" h-[370px] w-[370px] md:w-[500px] md:h-[500px]  flex items-center justify-center relative  rounded-[45%] rounded-tr-none overflow-hidden " >

                <Image src={"/homepage-images/ict.webp"} alt="image" height={500} width={500} className="w-full h-full object-center object-cover" />

            </div>
        </section>
    )
}