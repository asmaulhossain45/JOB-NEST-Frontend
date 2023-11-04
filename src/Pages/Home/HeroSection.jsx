import banner from "../../../public/Banner.jpg";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute flex flex-col justify-center items-center h-full w-full bg-Slate/50 space-y-1 md:space-y-2">

        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-White">
          Find a <span className="text-Secondary">Better Way</span> to Work
        </h3>

        <p className="text-xs md:text-base text-White/90">Search By Your Desire Job Name</p>

        <div className="join">
          <input
            className="text-Secondary bg-White font-semibold border-2 border-r-0 border-White outline-none rounded-s-md px-2 w-36 md:w-56"
            type="text"
            name=""
            id=""
          />

          <button className="text-xs md:text-base text-White font-semibold bg-Secondary px-2 py-1 border-2 border-l-0 border-Secondary/30 rounded-e-md">
            Search
          </button>
        </div>
      </div>
      <div>
        <img className="h-full w-full object-cover" src={banner} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
