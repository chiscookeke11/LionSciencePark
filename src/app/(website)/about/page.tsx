"use client"


import { BenefitsData } from "@/Data/BenefitsData";
import { OffersData } from "@/Data/OffersData";
import Image from "next/image";



export default function Page() {
    return (
        <div className="bg-white">

            {/* about us hero section  */}
            <section className=" w-full h-fit flex items-center justify-center flex-col gap-12 py-20 px-3 text-center font-inter border-b border-black " >

                <div className=" flex flex-col gap-3 z-30 " >
                    <h2 className="  text-3xl md:text-6xl lg:text-7xl font-bold font-onest " >ABOUT US</h2>
                    <p className="  text-lg md:text-2xl max-w-2xl " >Discover the vision and mission driving innovation and collaboration at Lion Science Park.</p>
                </div>


                <div className="w-full max-w-xs md:max-w-3xl lg:max-w-6xl h-75 md:h-125 lg:h-170 relative rounded-2xl border-2 border-black overflow-hidden "  >
                    <Image src={"/about-us/about-us-hero.webp"} alt="image" height={1500} width={1500} className=" w-full h-full object-center object-cover " />
                </div>

            </section>



            {/* Our Mission Section  */}
            <section className=" w-full   grid grid-cols-1 md:grid-cols-2 place-items-center justify-items-center justify-center gap-10 py-20 px-[5%] border-b border-black bg-[#008CC1] " >

                <div className=" w-full h-full rounded-xl border border-black relative  " >
                    <Image src={"/about-us/our-mission.webp"} alt="image" height={1500} width={1500} className=" w-full h-full object-center object-cover " />
                </div>

                <div className="w-full">
                    <h3 className=" text-3xl md:text-5xl mb-2 font-semibold md:mb-4 text-black   font-onest" >Our Mission</h3>

                    <div className="w-full max-w-5xl  text-black  space-y-6 flex-1 font-inter   " >
                        <p className="text-lg font-medium leading-[170%] " >
                            The goal is to make University of Nigeria a model example of university-based innovative initiatives to facilitate innovative research, creation of technology-based start-up enterprises and synergy among industry, academia and government with a view to creating a stronger national innovation system.
                        </p>

                        <p className="text-lg font-medium leading-[170%] " >
                            Be proactive in promoting creativity, innovation, invention and technology transfer for economic transformation and sustainable development.
                        </p>
                    </div>
                </div>

            </section>






            {/* The LSP vision section  */}
            <section className=" w-full  my-28 flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 mx-auto  py-10 pb-36  px-[5%] border-b border-black  "  >

                <div className="w-full lg:max-w-3xl font-medium  text-black  space-y-7 text-start font-inter ">
                    <h3 className=" text-2xl md:text-4xl mb-2 font-semibold md:mb-4 text-[#008CC1]  font-onest">The LSP Vision</h3>
                    <p className="leading-[170%] text-lg" >
                        Lion Science Park (LSP), University of Nigeria is the first University-based Science Park in continental Africa. it is planned to be one of the most attractive and creative environments for research and learning, knowledge exchange, innovations, inventions, technology for the future and buisness networking. It is a domain where the smart minds converge, interact and exchange ideas to develop new start-ups, improve existing buisnesses as well as contribute positively to the future for sustainable development
                    </p>

                    <p className="leading-[170%] text-lg">
                        It holds a unique triple helix research environment in which industry, government and academia collaborate closely in a shared ambition to drive innovation, creativity and buisness. LSP will operate according to plans, policies, programmes, practices and procedures that may vary from time to time due to Science, Technology and Innovation (STI) dynamics.
                    </p>
                </div>



             <div className="w-[340px] md:w-[440px] lg:w-[340px]
                aspect-video
                border-2 border-[#008CC1]
                relative overflow-hidden rounded-sm">

    <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FLSPunn%2Fvideos%2F1589971059074404%2F&show_text=false"
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
    />
</div>


            </section>



            {/* What we Offer section  */}
            <section className=" w-full md:min-w-xl flex flex-col items-center gap-20  py-10 pb-20 px-[3%] border-b border-black  " >

                <div className="flex flex-col items-center justify-center gap-4 text-center" >
                    <h3 className=" text-3xl md:text-4xl font-semibold  text-black font-onest ">What We Offer</h3>
                    <p className="max-w-sm text-center font-signika text-lg md:text-xl text-[#030100] ">
                        An ecosystem designed to turn ideas into innovation and impact.
                    </p>

                </div>


                <div className="grid grid-cols-1  md:grid-cols-2   lg:grid-cols-3 place-items-center justify-items-center gap-12 " >

                    {OffersData.map((offer, index) => {

                        const Icon = offer.icon


                        return (
                            <div key={index} className="w-full min-w-[150px] max-w-xs h-full  rounded-3xl bg-black group  " >
                                <div  className=" w-full h-full mt-[-10px] ml-[-10px] group-hover:mt-0 group-hover:ml-0 transition-all duration-300 ease-in-out  py-10 px-5 flex flex-col items-center justify-center gap-1 bg-white  rounded-3xl border border-black " >
                                <span className=" block mb-5 " > {Icon && <Icon style={{ color: "#030100", fontSize: 40 }} />}  </span>
                                <h4 className="font-onest text-2xl text-center font-bold mb-4 tracking-wide " >{offer.title} </h4>
                                <p className="font-inter text-xl text-center font-medium ">{offer.content} </p>
                            </div>
                            </div>
                        )
                    })}

                </div>

            </section>





            {/* Benefits of LSP */}
            <section className="w-full md:min-w-xl flex flex-col items-center gap-10  py-20 px-[2%] " >
                <div className="text-center my-12 " >
                    <h3 className=" text-3xl md:text-4xl mb-2 font-semibold md:mb-4 text-black font-onest ">Benefits of LSP</h3>
                    <p className="font-inter max-w-3xl  text-lg md:text-xl px-5 leading-[170%] font-medium text-[#030100] " >Being part of Lion Science Park means being part of a hot spot and a learning space. At Lion Science Park you will meet clients, partners and academic expertise in a vibrant environment where things happen – all the time.</p>
                </div>




                <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center justify-items-center justify-center " >

                    {BenefitsData.map((data, index) => {



                        return (
                            <div
                            style={{backgroundColor: data.color}}
                                key={index} className={`w-full h-full  flex items-start gap-16  justify-around   px-10 py-18 rounded-3xl border border-black ${index + 1 === 3? "md:col-span-2": "col-span-1"} `} >


                                <div className="w-full max-w-6xl flex-1 " >
                                    <h5 className=" text-2xl md:text-3xl mb-2 font-semibold md:mb-4 text-black font-poppins">{data.title} </h5>
                                    <p className="font-inter  text-base md:text-xl my-4 ">{data.desc} </p>
                                    {
                                        data.moreDetails && (
                                            <ul className="flex flex-col items-start gap-2 list-disc pl-4 mt-5 " >
                                                {
                                                    data.moreDetails.map((list, index) => (
                                                        <li key={index} className="font-inter text-base md:text-xl"> {list} </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </div>

                            </div>
                        )
                    })}

                </div>


            </section>




        </div>
    )
}