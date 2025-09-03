import img from  '../assets/hotel.svg'
const HomeHero = () => {
  return (
    <>
      <div class="flex flex-col  lg:flex-row">
        <div class="w-full lg:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
             
            </nav>
            <header class="container px-4 lg:flex mt-28 lg:mt-10 items-center h-full ">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold">Find your <span class="text-green-700">greeny</span> stuff for your room</h1>
                <div class="w-20 h-2 bg-green-700 my-4"></div>
                <p class="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                <button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Get Started</button>
                <button class="bg-white ml-6 text-green-500 text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
              </div>
            </header>
          </div>
        </div>
        <img src={img} alt="Leafs" class="w-full h-48  object-cover hidden lg:block sm:h-screen sm:w-4/6" />
      </div>
    </>
  );
}

export default HomeHero;