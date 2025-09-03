import { useState } from "react";
import '../client/css/scrollStyle.css'
const ProductClient = ({ lastService }) => {
    const categories = ["all", "boissant", "sucree", "caffe", "pizza", "chicha", "gateau"]
    const [activeCategorie, setActiveCategorie] = useState("all")
    const products = [{ name: "Sunset in the mountains", image: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500", price: 200 }, { name: "Sunset in the mountains", image: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500", price: 200 }, { name: "Sunset in the mountains", image: "https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=50", price: 200 }]
    return (
        <>
            <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                <div className=" flex mb-8 mt-2">
                    <div className="container flex overflow-x-scroll overflow-hidden    gap-x-2">
                        {categories.map((item, index) => (
                            <>
                                <a onClick={() => setActiveCategorie(item)} className={`${activeCategorie == item ? "bg-indigo-600 text-white" : "text-indigo-700"}  border  shadow-lg    border-indigo-500  p-1 px-2 rounded-xl`} href="#">{item}</a>
                            </>
                        ))}

                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* <!-- CARD --> */}

                    {products.map((item, value) => (
                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                            <a href="#"></a>
                            <div class="relative">
                                <a href="#">
                                    <img class="w-full"
                                        src={item.image}
                                        alt="Sunset in the mountains" />
                                    <div
                                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </a>
                                <a href="#!">
                                    <div class="text-xs rounded-lg absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        {item.price} DT
                                    </div>
                                </a>
                            </div>
                            <div class="px-6 py-4 mb-auto">
                                <a href="#" class="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                    Salad Recipe ever
                                </a>
                                <p class="text-gray-500  text-sm">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            <div class="px-6 py-3 flex justify-center bg-gray-100">

                                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">

                                    {!lastService && <span class="">Buy</span>}
                                </span>
                            </div>
                        </div>
                    ))}




                </div>

            </div>

            {/* <!-- 🛑 Grid Section - Ends Here --> */}

        </>
    );
}

export default ProductClient;
