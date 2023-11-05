import Footer from "../../Components/Footer";
import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";
import TabProducts from "./TabProducts";
import TotalSummery from "./TotalSummery";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="my-10">
        <JobCategories />
      </div>
      <div className="my-10">
        <TabProducts />
      </div>
      <div className="my-10">
        <TotalSummery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
