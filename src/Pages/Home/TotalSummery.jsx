const TotalSummery = () => {
  return (
    <div className="flex justify-around items-center text-base md:text-xl text-White font-semibold bg-Primary/60 py-16">
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-8 md:h-12 lg:h-16 grow mb-3"
          src="https://i.ibb.co/rZRtsX6/JobPost.png"
          alt="Job Posts"
        />
        <p className="text-xs md:text-base">30000</p>
        <p className="text-xs md:text-base">Job Posts</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          className="h-8 md:h-12 lg:h-16 grow mb-3"
          src="https://i.ibb.co/5BtQZ7d/Members.png"
          alt="Members"
        />
        <p className="text-xs md:text-base">30000</p>
        <p className="text-xs md:text-base">Members</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          className="h-8 md:h-12 lg:h-16 grow mb-3"
          src="https://i.ibb.co/ZMtH71V/Resume.png"
          alt="Resume"
        />
        <p className="text-xs md:text-base">30000</p>
        <p className="text-xs md:text-base">Resume</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          className="h-8 md:h-12 lg:h-16 grow mb-3"
          src="https://i.ibb.co/F6FfwJR/Company.png"
          alt="Company"
        />
        <p className="text-xs md:text-base">30000</p>
        <p className="text-xs md:text-base">Company</p>
      </div>
    </div>
  );
};

export default TotalSummery;
