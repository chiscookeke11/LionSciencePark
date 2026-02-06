import Image from "next/image";




export default function TenantHeroSection() {
    return (
        <section className="w-full h-[50vh] md:h-[130vh] flex justify-between items-center gap-10  px-[4%] " >

            <div className=" basis-1/3 w-full   h-full hidden md:flex justify-between items-start gap-10 " >

                <div className=" flex flex-col h-fit gap-24 items-center justify-between " >

                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden " >
                        <Image src={"/tenants/image_1.jpg"} alt="image-1" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden  " >
                        <Image src={"/tenants/image_2.jpg"} alt="image-2" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden  " >
                        <Image src={"/tenants/image_3.jpg"} alt="image-3" fill className="object-cover object-center" />
                    </div>
                </div>






                <div className=" flex flex-col h-fit gap-24 items-center justify-between  mt-20" >

                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden  " >
                        <Image src={"/tenants/image_4.jpg"} alt="image-4" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden   " >
                        <Image src={"/tenants/image_5.jpg"} alt="image-5" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden   " >
                        <Image src={"/tenants/image_6.jpg"} alt="image-6" fill className="object-cover object-center" />
                    </div>
                </div>


            </div>

            <div className=" md:basis-1/3 w-full flex items-center justify-center flex-col text-center h-full  md:max-h-[500px] ">
                <h4 className="text-black font-semibold  text-xl md:text-3xl " >Our Tenants</h4>
                <p className="text-base md:text-lg font-medium " >Meet the innovative startups and companies currently incubated at Lion Science Park, driving breakthroughs in technology, science, and entrepreneurship.</p>


                <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden  mt-auto " >
                    <Image src={"/tenants/image_7.jpg"} alt="image-7" fill className="object-cover object-center" />
                </div>
            </div>


            <div className=" basis-1/3 w-full   h-full hidden md:flex  justify-between items-start gap-10  " >

                <div className=" flex flex-col h-fit gap-24 items-center justify-between  mt-20 " >

                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden " >
                        <Image src={"/tenants/image_8.jpg"} alt="image-8" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden  " >
                        <Image src={"/tenants/image_9.jpg"} alt="image-9" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden  " >
                        <Image src={"/tenants/image_10.jpg"} alt="image-10" fill className="object-cover object-center" />
                    </div>
                </div>




                <div className=" flex flex-col h-fit gap-24 items-center justify-between  " >

                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden " >
                        <Image src={"/tenants/image_11.jpg"} alt="image-11" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden  " >
                        <Image src={"/tenants/image_12.jpg"} alt="image-12" fill className="object-cover object-center" />
                    </div>


                    <div className="size-36 rounded-sm flex items-center justify-center relative bg-gray-300 overflow-hidden " >
                        <Image src={"/tenants/image_13.jpg"} alt="image-13" fill className="object-cover object-center" />
                    </div>
                </div>



            </div>

        </section>
    )
}