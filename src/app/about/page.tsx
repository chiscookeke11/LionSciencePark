"use client"


import { BenefitsData } from "@/Data/BenefitsData";
import { OffersData } from "@/Data/OffersData";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";



export default function Page() {
    return (
        <div className="bg-white">

            {/* about us hero section  */}
            <section className=" w-full h-[80vh] bg-black flex items-center justify-center flex-col gap-4 text-white  py-4 px-3 text-center" >
                <h2 className=" font-poppins text-4xl md:text-8xl font-bold  " >ABOUT US</h2>
                <p className="font-signika  text-lg md:text-2xl max-w-2xl " >Discover the vision and mission driving innovation and collaboration at Lion Science Park.</p>
            </section>



            {/* Our Mission Section  */}
            <section className=" w-[80%] md:min-w-xl my-32 flex flex-col md:flex-row items-center justify-between gap-10 mx-auto  py-5 pb-20 border-b-2 border-[#008CC1] " >

                <h3 className=" text-3xl md:text-4xl mb-2 font-semibold md:mb-4 text-[#008CC1] font-poppins" >Our Mission</h3>

                <div className="w-full max-w-5xl font-medium text-xl text-black font-signika space-y-6 " >
                    <p>
                        The goal is to make University of Nigeria a model example of university-based innovative initiatives to facilitate innovative research, creation of technology-based start-up enterprises and synergy among industry, academia and government with a view to creating a stronger national innovation system.
                    </p>

                    <p>
                        Be proactive in promoting creativity, innovation, invention and technology transfer for economic transformation and sustainable development.
                    </p>
                </div>

            </section>


            {/* About us section  */}
            <section className=" w-[80%] md:min-w-xl my-32 flex flex-col md:flex-row items-center justify-between gap-10 mx-auto  py-5 pb-20  "  >

                <div className="w-full max-w-4xl font-medium text-xl text-black font-signika space-y-7 text-justify ">
                    <h3 className=" text-3xl md:text-4xl mb-2 font-semibold md:mb-4 text-[#008CC1] font-poppins">About Us</h3>
                    <p>
                        Lion Science Park (LSP), University of Nigeria is the first University-based Science Park in continental Africa. it is planned to be one of the most attractive and creative environments for research and learning, knowledge exchange, innovations, inventions, technology for the future and buisness networking. It is a domain where the smart minds converge, interact and exchange ideas to develop new start-ups, improve existing buisnesses as well as contribute positively to the future for sustainable development
                    </p>

                    <p>
                        It holds a unique triple helix research environment in which industry, government and academia collaborate closely in a shared ambition to drive innovation, creativity and buisness. LSP will operate according to plans, policies, programmes, practices and procedures that may vary from time to time due to Science, Technology and Innovation (STI) dynamics.
                    </p>
                </div>



                <div className=" w-[340px] h-[340px] border-2 border-[#008CC1] flex items-center justify-center relative "  >

                    <Image src={"/homepage-images/ict.webp"} alt="About-us-img" width={500} height={500} className=" w-full h-full object-center object-cover absolute top-4 left-4 " />

                </div>
            </section>



            {/* What we Offer section  */}
            <section className=" w-full md:min-w-xl flex flex-col items-center gap-10  py-10 pb-20  " >
                <h3 className=" text-3xl md:text-4xl mb-2 font-semibold md:mb-4 text-[#008CC1] font-poppins">What We Offer</h3>


                <div className="grid  grid-cols-2   lg:grid-cols-3 place-items-center justify-items-center gap-6 " >

                    {OffersData.map((offer, index) => (
                        <div key={index} className=" w-full min-w-[150px] bg-white h-full py-10 px-5 rounded-md flex flex-col items-center justify-center gap-1 shadow-[0_4px_20px_rgba(0,0,0,0.15)] " >
                            <span>{offer.icon} </span>
                            <h4>{offer.title} </h4>
                            <p>{offer.content} </p>
                        </div>
                    ))}

                </div>

            </section>



            {/* Benefits of LSP */}
            <section className="w-full md:min-w-xl flex flex-col items-center gap-10  py-20 px-[4%] " >
                <div className="text-center my-16 " >
                    <h3 className=" text-3xl md:text-4xl mb-2 font-semibold md:mb-4 text-[#008CC1] font-poppins">Benefits of LSP</h3>
                    <p className="font-signika  text-lg md:text-xl max-w-4xl" >Being part of Lion Science Park means being part of a hot spot and a learning space. At Lion Science Park you will meet clients, partners and academic expertise in a vibrant environment where things happen – all the time.</p>
                </div>




                <div className=" w-full flex flex-col gap-14 items-start justify-between " >

                    {BenefitsData.map((data, index) => (
                        <motion.div
                            initial={{ borderLeftWidth: 0 }}
                            whileInView={{ borderLeftWidth: 4 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            key={index} className=" w-full flex items-start gap-16  border-[#008CC1] px-32  " >

                            <div className=" w-[100px] h-[100px] rounded-full bg-[#008CC1] flex items-center justify-center " >Ic</div>

                            <div className="w-full max-w-6xl " >
                                <h5 className=" text-xl md:text-2xl mb-2 font-semibold md:mb-4 text-[#008CC1] font-poppins">{data.title} </h5>
                                <p className="font-signika  text-lg md:text-xl my-4 ">{data.desc} </p>
                                {
                                    data.moreDetails && (
                                        <ul className="flex flex-col items-start gap-1 list-disc pl-4 " >
                                            {
                                                data.moreDetails.map((list, index) => (
                                                    <li key={index} className="font-signika  text-base md:text-lg"> {list} </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>

                        </motion.div>
                    ))}

                </div>


            </section>




        </div>
    )
}