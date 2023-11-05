import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";
import MembersReview from "./MembersReview/MembersReview";
import TabProducts from "./TabProducts";
import TotalSummery from "./TotalSummery";

const Home = () => {
  return (
    <div>
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
      <div className="my-10">
        <MembersReview />
      </div>
    </div>
  );
};

export default Home;
