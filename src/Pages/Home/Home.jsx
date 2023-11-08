import { ToastContainer } from "react-toastify";
import HeroSection from "./HeroSection";
import MembersReview from "./MembersReview/MembersReview";
import NewsLetter from "./NewsLetter";
import TabProducts from "./TabProducts";
import TotalSummery from "./TotalSummery";

const Home = () => {
  return (
    <div className="bg-White">
      <HeroSection />
      <div className="my-10 md:my-16 lg:my-20">
        <TabProducts />
      </div>
      <div className="my-10 md:my-16 lg:my-20">
        <TotalSummery />
      </div>
      <div className="my-10 md:my-16 lg:my-20">
        <MembersReview />
      </div>
      <NewsLetter />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Home;
