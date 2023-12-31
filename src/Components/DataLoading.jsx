import Lottie from "lottie-react";
import DataLoadAnime from "../../public/DataLoading.json";

const DataLoading = () => {
  return (
    <div className="h-[50vh] flex justify-center">
      <Lottie animationData={DataLoadAnime} loop={true} />
    </div>
  );
};

export default DataLoading;
