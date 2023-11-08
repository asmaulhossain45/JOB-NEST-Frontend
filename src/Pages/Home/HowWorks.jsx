import SearchJob from "../../../public/SearchJob.png";
import ApplyJob from "../../../public/applyJob.png";
import GetJob from "../../../public/getJob.png";

const HowWorks = () => {
  return (
    <div className="bg-Primary py-16 text-White">
      <div className="text-center mb-6">
        <p className="text-xs text-Secondary">Getting Job Process</p>
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          How it Works
        </h1>
      </div>
      <div className="flex justify-around items-center text-base md:text-xl text-White font-semibold bg-Primary">
        <div className="flex flex-col justify-center items-center bg-White/10 p-2 md:p-5 rounded-md">
          <img
            className="h-8 md:h-12 lg:h-16 grow mb-3"
            src={SearchJob}
            alt="Job Posts"
          />
          <p className="text-xs md:text-base">1. Find a Job</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-White/10 p-2 md:p-5 rounded-md">
          <img
            className="h-8 md:h-12 lg:h-16 grow mb-3"
            src={ApplyJob}
            alt="Members"
          />
          <p className="text-xs md:text-base">2. Apply a Job</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-White/10 p-2 md:p-5 rounded-md">
          <img
            className="h-8 md:h-12 lg:h-16 grow mb-3"
            src={GetJob}
            alt="Resume"
          />
          <p className="text-xs md:text-base">3. Get a Job</p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
