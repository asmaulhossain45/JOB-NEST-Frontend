const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute flex flex-col justify-center h-full w-full bg-gradient-to-r from-Black/80 to-Black/40 space-y-1 md:space-y-3 px-4 md:px-8 lg:px-12">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-White">
          <span className="text-Secondary">Success</span> Begins Here...
        </h3>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-White">
          Achieve <span className="text-Secondary">Your Dreams</span> With Us
        </h1>

        <p className="text-[10px] md:text-base text-White/80">
          Having Trouble Finding The Right One? Leave It Up To Us
        </p>

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
        <img
          className="h-[60vh] bg-center w-full object-cover"
          src="https://i.ibb.co/ZSPcc1W/Hseader.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
