import { Link } from "react-router-dom";
import img from "../../../public/image-2.webp";

const FindOne = () => {
  return (
    <div className="md:flex justify-between items-center md:gap-8 lg:gap-16 px-4 md:px-8 lg:px-12">
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
      <div className="flex-1 mt-6 md:mt-0 space-y-3">
        <h1 className="text-Primary text-xl md:text-2xl lg:text-3xl font-bold">Millions of Jobs. <br /> Find the one that suits you.</h1>
        <p className="text-base lg:text-lg text-Black/60">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 600,000 companies worldwide.
        </p>
        <ul className="list-disc list-inside text-sm lg:text-lg text-Black/60">
          <li>Bring to the table win-win survival</li>
          <li>Capitalize on low hanging fruit to identify</li>
          <li>But I must explain to you how all this</li>
        </ul>
        <div className="text-center md:text-left">
          <Link to="/all-jobs" className="bg-Secondary px-4 py-2 rounded-sm text-base lg:text-xl font-semibold text-White">Find One</Link>
        </div>
      </div>
    </div>
  );
};

export default FindOne;
