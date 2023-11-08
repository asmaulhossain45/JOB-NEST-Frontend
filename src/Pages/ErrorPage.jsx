import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Error404 from "../../public/Error-404.json";

const ErrorPage = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>JN | Error</title>
      </Helmet>
      <div>
        <Lottie
          className="h-[90vh] w-full object-cover"
          animationData={Error404}
          loop={true}
        />
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className="bg text-base md:text-2xl font-semibold text-White bg-Primary px-4 py-2 rounded-md hover:scale-110 duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
