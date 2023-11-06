import Lottie from "lottie-react";
import LoadingAnime from "../../public/Loading.json";

const Loading = () => {
  return (
    <div className="h-[90vh] bg-Transparent flex justify-center">
      <Lottie animationData={LoadingAnime} loop={true} />
    </div>
  );
};

export default Loading;
