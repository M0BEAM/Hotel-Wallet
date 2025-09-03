import img from '../assets/hotel.jpg'
const Section = () => {
    return (
        <section className=' bg-[#262626] lg:p-10 mb-20 py-10 rounded-[50px]'>
            <div className="text text-white flex justify-between mx-10 items-center mb-16 ">
                <div className="title lg:text-7xl font-bold">Online hotel</div>
                <div className="show lg:text-4xl underline cursor-pointer">View All</div>
            </div>

            <div className="hotels flex justify-center flex-wrap gap-10 ">

                <div class="relative bg-white w-[280px] h-[400px] lg:w-[400px] lg:h-[500px]  shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <img class="w-full h-full rounded-xl" src={img} alt="Image Description" />
                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t  from-black "></div>
                    <div class="absolute bottom-0 start-0 end-0 ">
                        <div class="p-4 md:p-5 ">
                            <h3 class="text-4xl font-bold text-white">
                                Sahra Beach
                            </h3>
                            <p class="mt-1 text-lg text-white">
                                Monastir tunisie
                            </p>
                            <p class="mt-5 text-xs text-white">
                                5 Etoiles
                            </p>
                        </div>
                    </div>
                
                </div>
                <div class="relative bg-white w-[280px] h-[400px] lg:w-[400px] lg:h-[500px]  shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <img class="w-full h-full rounded-xl" src={img} alt="Image Description" />
                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t  from-black "></div>
                    <div class="absolute bottom-0 start-0 end-0 ">
                        <div class="p-4 md:p-5 ">
                            <h3 class="text-4xl font-bold text-white">
                                El Moradi
                            </h3>
                            <p class="mt-1 text-lg text-white">
                                sfax tunisie
                            </p>
                            <p class="mt-5 text-xs text-white">
                                Last updated 5 mins ago
                            </p>
                        </div>
                    </div>
                
                </div>
             
            </div>
        </section>
    );
}

export default Section;