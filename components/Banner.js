import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute xl:top-64 top-36 left-8 xl:left-48 w-72 text-left max-w-screen-xl mx-auto">
        <p className="sm:text-5xl text-3xl  text-gray-200 font-sans font-bold sm:leading-tight">
          Olympian & Paralympian Online Experiences
        </p>
        <button className="text-gray-800 bg-white sm:px-7 sm:py-3 px-5 py-2 rounded-lg md:my-12 my-5 font-sans shadow-md font-bold hover:bg-gray-900 hover:text-white active:scale-90 transition duration-150">
          Explore now
        </button>
      </div>
    </div>
  );
};

export default Banner;
