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
  console.log(data);

  return (
    <div className="">
      <h1 className="text-center text-Primary text-xl md:text-2xl lg:text-3xl font-bold">
        JOB BY CATEGORY
      </h1>
      <p className="text-center font-semibold text-xs md:text-sm lg:text-lg text-Black/60 mb-3 md:mb-5 lg:mb-7">
        Discover What’s Beyond Your Limit
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 lg:px-12 py-4">
          {tabPost?.slice(0, 12).map((jobPost) => (
            <Link
              to={`/details/${jobPost._id}`}
              key={jobPost._id}
              className="bg-BgPrimary p-4 rounded-md space-y-1 flex flex-col"
            >
              <h1 className="text-xl font-bold grow">{jobPost.title}</h1> <hr className="py-1" />

              <h2 className="text-sm text-Black/60 font-semibold">
                CEO: {jobPost.ceoName}
              </h2>

              <h6 className="text-sm text-Black/60 font-semibold">
                Salary: <span className="text-Red">{jobPost.salary}</span>
              </h6>

              <h6 className="text-sm text-Black/60 font-semibold">
                Applicants Number: {jobPost.JobApplicantsNumber}
              </h6>

              <h3 className="text-sm text-Black/60 font-semibold">
                Job Post: {jobPost.postDate}
              </h3>

              <h4 className="font-semibold">Deadline: {jobPost.deadline}</h4>

              <button className="text-base font-bold text-White bg-Secondary py-1 w-full rounded-md hover:bg-Primary duration-300">
                Details
              </button>
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
            tabPost.length > 12
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
