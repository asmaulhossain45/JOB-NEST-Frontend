import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import banner from "../../../public/Banner.jpg";
import DataLoading from "../../Components/DataLoading";
import NoData from "../../Components/NoData";
import useAxios from "../../CustomHooks/useAxios";

const AllJobs = () => {
  const axios = useAxios();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState(page);

  // Search Job By Title
  const handleSearchButton = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const allJobPosts = async () => {
    const res = await axios.get(`allJobPost`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["allJobPost"],
    queryFn: allJobPosts,
  });

  if (isLoading) {
    return <DataLoading />;
  }
  if (error) {
    return console.log(error.message);
  }
  const allJobPost = data?.data?.result;

  const currentData = allJobPost.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  //   ===== Pagination =====
  const limit = 4;
  const skip = page * limit;
  const pagePost = skip - limit;
  const currentPage = currentData.slice(pagePost, skip);

  const totalPages = Math.ceil(currentData.length / limit);

  const pageButton = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButton.push(i);
  }

  const handlePageClick = (page) => {
    setPage(page);
    setActivePage(page);
  };

  const handlePrevButton = () => {
    setPage(page - 1);
    setActivePage(page - 1);
  };
  const handleNextButton = () => {
    setPage(page + 1);
    setActivePage(page + 1);
  };

  return (
    <div>
      <Helmet>
        <title>JN | All Jobs</title>
      </Helmet>
      {/* ===== Header ===== */}
      <div className="relative">
        <div className="absolute flex flex-col justify-center items-center h-full w-full bg-Slate/50 space-y-1 md:space-y-2">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-White">
            Find a <span className="text-Secondary">Better Way</span> to Work
          </h3>

          <p className="text-xs md:text-base text-White/90">
            Search By Your Desire Job Name
          </p>

          <form className="join">
            <input
              className="text-Secondary bg-White font-semibold border-2 border-r-0 border-White outline-none rounded-s-md px-2 w-36 md:w-56"
              type="text"
              name="searchText"
              required
              onChange={handleSearchButton}
              id=""
            />
            <input
              className="text-xs md:text-base text-White font-semibold bg-Secondary px-2 py-1 border-2 border-l-0 border-Secondary/30 rounded-e-md"
              type="submit"
              disabled
              value="Search"
            />
          </form>
        </div>
        <div>
          <img className="h-full w-full object-cover" src={banner} alt="d" />
        </div>
      </div>
      <div>{isLoading ? "Loading....." : ""}</div>
      {/* Display All Job Post */}
      {currentPage?.length > 0 ? (
        <div className="my-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="">
                <tr className="bg-Slate text-White">
                  <th>Title</th>
                  <th>Date</th>
                  <th>Salary (per month)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {currentPage.map((jobPost, idx) => (
                  <tr key={idx} className="bg-Primary text-White">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={jobPost.companyLogo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{jobPost.title}</div>
                          <div className="text-sm opacity-50">
                            CEO: {jobPost.ceoName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="opacity-80">
                      Deadline: {jobPost.deadline}
                      <br />
                      <span>Post Date: {jobPost.postDate}</span>
                    </td>
                    <td className="opacity-80">{jobPost.salary}</td>
                    <th>
                      <Link
                        to={`/details/${jobPost._id}`}
                        id={jobPost._id}
                        className="join-item"
                      >
                        Details
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* ===== Pagination ===== */}
          <div
            className={
              currentData.length > limit
                ? "join flex justify-center mt-2"
                : "hidden"
            }
          >
            <button
              onClick={handlePrevButton}
              className={page === 1 ? "hidden" : "join-item btn"}
            >
              Prev
            </button>
            {pageButton.map((page, idx) => (
              <button
                onClick={() => handlePageClick(page)}
                key={idx}
                className={
                  page === activePage
                    ? "bg-Slate/70 text-White join-item btn"
                    : "join-item btn"
                }
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextButton}
              className={
                pageButton.length === page ? "hidden" : "join-item btn"
              }
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default AllJobs;
