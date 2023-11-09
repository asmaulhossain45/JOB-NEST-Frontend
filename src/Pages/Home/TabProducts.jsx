import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import DataLoading from "../../Components/DataLoading";
import NoData from "../../Components/NoData";
import useAxios from "../../CustomHooks/useAxios";

const TabProducts = () => {
  const axios = useAxios();
  const [selectedTab, setSelectedTab] = useState("");

  const tabPosts = async () => {
    const res = await axios.get(`allJobPost?category=${selectedTab}`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["tabPost", selectedTab],
    queryFn: tabPosts,
  });

  if (isLoading) {
    return <DataLoading />;
  }
  if (error) {
    return console.log(error.message);
  }

  const handleTabButton = (value) => {
    setSelectedTab(value);
  };

  const tabPost = data?.data.result;

  return (
    <div className="">
      <h1 className="text-center text-Primary text-xl md:text-2xl lg:text-3xl font-bold">
        JOB BY CATEGORY
      </h1>
      <p className="text-center font-semibold text-xs md:text-sm lg:text-lg text-Black/60 mb-3 md:mb-5 lg:mb-7 md:max-w-xl lg:max-w-2xl mx-auto">
        Discover What’s Beyond Your Limit. We Have An Eye For The Talented Guy. Work With Us And Stop Unemployment.
      </p>
      <div className="flex bg-Primary text-White justify-start text-[11px] md:text-base items-center border-b-2 px-4 md:px-8 lg:px-12">
        <button
          onClick={() => handleTabButton("")}
          className={
            selectedTab === ""
              ? "bg-Secondary text-Black font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          All-Jobs
        </button>
        <button
          onClick={() => handleTabButton("On Site")}
          className={
            selectedTab === "On Site"
              ? "bg-Secondary text-Black font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Onsite
        </button>
        <button
          onClick={() => handleTabButton("Remote")}
          className={
            selectedTab === "Remote"
              ? "bg-Secondary text-Black font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Remote
        </button>
        <button
          onClick={() => handleTabButton("Hybrid")}
          className={
            selectedTab === "Hybrid"
              ? "bg-Secondary text-Black font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Hybrid
        </button>
        <button
          onClick={() => handleTabButton("Part-Time")}
          className={
            selectedTab === "Part-Time"
              ? "bg-Secondary text-Black font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Part-Time
        </button>
      </div>

      {tabPost.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-12 py-4">
          {tabPost?.slice(0, 8).map((jobPost) => (
            <Link
              to={`/details/${jobPost._id}`}
              key={jobPost._id}
              className="bg-BgPrimary border-2 border-BgPrimary p-4 rounded-md flex gap-6 justify-between items-center hover:border-Primary duration-500"
            >
              <div className="hidden lg:block w-1/4">

                <img
                  className="h-full rounded-md w-full object-cover"
                  src={jobPost.companyLogo}
                  alt=""
                />

              </div>

              <div className="w-full lg:w-3/4">
                <h1 className="text-base font-bold grow">{jobPost.title}</h1>

                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-sm font-semibold text-Black/60">
                    CEO: {jobPost.ceoName}
                  </h2>

                  <p className="bg-Secondary text-White px-2 py-1 text-xs rounded-sm font-semibold inline-block">
                    {jobPost.category}
                  </p>
                </div>

                <hr />

                <div className="flex justify-between items-center text-xs font-semibold text-Black/60 my-1">
                  <div className="space-y-1">
                    <h6>Applicants Number: {jobPost.JobApplicantsNumber}</h6>

                    <h6>Salary: {jobPost.salary}</h6>
                  </div>

                  <div className="space-y-1">
                    <h3>Job Post: {jobPost.postDate}</h3>

                    <h4>Deadline: {jobPost.deadline}</h4>
                  </div>
                </div>

                <button className="text-base font-bold text-White bg-Primary py-1 w-full rounded-md duration-300">
                  Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <NoData />
      )}
      <div className="w-full text-center">
        <Link
          to="/all-jobs"
          className={
            tabPost.length > 8
              ? "text-base font-bold text-White bg-Primary w-full rounded-md hover:bg-Secondary px-4 py-2 duration-300"
              : "hidden"
          }
        >
          All Job Post
        </Link>
      </div>
    </div>
  );
};

export default TabProducts;
