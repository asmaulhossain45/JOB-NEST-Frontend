import Lottie from "lottie-react";
import NoDataFound from "../../public/DataNotFound.json";

const NoData = () => {
  return (
    <div className="h-[50vh] bg-Transparent flex justify-center object-cover">
      <Lottie animationData={NoDataFound} loop={true} />
    </div>
  );
};

export default NoData;
