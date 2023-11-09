import { Link } from "react-router-dom";

const JoinTeam = () => {
  return (
    <div className="bg-Primary py-16 text-center text-White">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Join The Best. Be The Best
      </h1>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Looking For The Best Employees?
      </h1>
      <p className="text-xs md:text-sm text-White/80 max-w-xs md:max-w-sm px-8 md:px-0 mx-auto mt-2">
        Connecting The Right People To The Right Businesses. Leading The Change
        In The Corporate World.
      </p>
      <div className="flex justify-center gap-4 text-center mt-2">
        <Link to="/add-job" className="text-base font-bold text-Secondary border-2 border-Secondary py-1 px-4 rounded-md hover:bg-Secondary hover:text-White duration-300">
          Post Job
        </Link>

        <Link to="/register" className="text-base font-bold text-White bg-Secondary py-1 px-4 rounded-md border-2 border-Secondary hover:bg-Transparent hover:text-Secondary duration-300">
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default JoinTeam;
