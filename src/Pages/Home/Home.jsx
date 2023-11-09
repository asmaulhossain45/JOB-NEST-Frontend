import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import HowWorks from "./HowWorks";
import JoinTeam from "./JoinTeam";
import NewsLetter from "./NewsLetter";
import PackageList from "./PackageList";
import TabProducts from "./TabProducts";
import TotalSummery from "./TotalSummery";
import FindOne from "./findOne";

const Home = () => {
  return (
    <div className="bg-White">
      <Helmet>
        <title>JN | Home</title>
      </Helmet>
      <HeroSection />
      <JoinTeam />
      <div className="my-10 md:my-16 lg:my-20">
        <TabProducts />
      </div>
      <div className="my-10 md:my-16 lg:my-20">
        <TotalSummery />
      </div>
      <div className="my-10 md:my-16 lg:my-20">
        <FindOne />
      </div>
      <div className="mb-10 md:mb-16 lg:mb-20">
        <HowWorks />
      </div>
      <div className="mb-10 md:mb-16 lg:mb-20">
        <PackageList />
      </div>
      {/* <div className="my-10 md:my-16 lg:my-20">
        <MembersReview />
      </div> */}
      <NewsLetter />
    </div>
  );
};

export default Home;
