import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Loading from "../../Components/Loading";
import useAxios from "../../CustomHooks/useAxios";

const TabProducts = () => {
  const axios = useAxios();
  const [selectedTab, setSelectedTab] = useState("");

  const tabPosts = async () => {
    const res = await axios.get(`homeTab?category=${selectedTab}`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["tabPost", selectedTab],
    queryFn: tabPosts,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return console.log(error.message);
  }

  const handleTabButton = (value) => {
    setSelectedTab(value);
  };

  const tabPost = data?.data;

  return (
    <div className="bg-BgPrimary">
      <div className="flex justify-start text-xs items-center border-b-2">
        <button
          onClick={() => handleTabButton("")}
          className={
            selectedTab === "" ? "bg-Slate/10 font-semibold px-2 py-2" : "font-semibold px-2 py-2"
          }
        >
          All-Jobs
        </button>
        <button
          onClick={() => handleTabButton("Remote")}
          className={
            selectedTab === "Remote"
              ? "bg-Slate/10 font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Remote
        </button>
        <button
          onClick={() => handleTabButton("On Site")}
          className={
            selectedTab === "On Site"
              ? "bg-Slate/10 font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Onsite
        </button>
        <button
          onClick={() => handleTabButton("Hybrid")}
          className={
            selectedTab === "Hybrid"
              ? "bg-Slate/10 font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Hybrid
        </button>
        <button
          onClick={() => handleTabButton("Part-Time")}
          className={
            selectedTab === "Part-Time"
              ? "bg-Slate/10 font-semibold px-2 py-2"
              : "font-semibold px-2 py-2"
          }
        >
          Part-Time
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 m-4">
        {tabPost?.slice(0, 8).map((jobPost) => (
          <div
            key={jobPost._id}
            className="bg-Primary/10 p-3 rounded-md text-center space-y-1 flex flex-col"
          >
            <h1 className="text-base font-semibold grow">{jobPost.title}</h1>
            <h3 className="text-sm font-bold text-Red">{jobPost.category}</h3>
            <h5>Deadline: {jobPost.deadPost}</h5>
            <button className="bg-Secondary px-2 w-f2ll mt-2">Details</button>
          </div>
        ))}
      </div>
      <div className="w-full text-center">
        <Link
          to="/all-jobs"
          className={
            tabPost.length > 8 ? "bg-Red px-2 py-2 rounded-md" : "hidden"
          }
        >
          All Job Post
        </Link>
      </div>
    </div>
  );
};

export default TabProducts;
