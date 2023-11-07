import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
  const limit = 3;

  // Search Job By Title
  const handleSearchButton = (event) => {
    setSearchText("");
    event.preventDefault();
    const inputText = event.target.searchText.value;
    setSearchText(inputText);
    event.target.reset();
  };

  const allJobPosts = async () => {
    const res = await axios.get(
      `allJobPost?title=${searchText}&page=${page}&limit=${limit}`
    );
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["allJobPost", searchText, page, activePage],
    queryFn: allJobPosts,
  });

  if (isLoading) {
    return <DataLoading />;
  }
  if (error) {
    return console.log(error.message);
  }
  const allJobPost = data?.data?.result;

  //   ===== Pagination =====
  const postCount = data.data.jobPostCount;
  const pageCount = Math.ceil(postCount / limit);
  console.log(postCount);

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
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
      {/* ===== Header ===== */}
      <div className="relative">
        <div className="absolute flex flex-col justify-center items-center h-full w-full bg-Slate/50 space-y-1 md:space-y-2">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-White">
            Find a <span className="text-Secondary">Better Way</span> to Work
          </h3>

          <p className="text-xs md:text-base text-White/90">
            Search By Your Desire Job Name
          </p>

          <form onSubmit={handleSearchButton} className="join">
            <input
              className="text-Secondary bg-White font-semibold border-2 border-r-0 border-White outline-none rounded-s-md px-2 w-36 md:w-56"
              type="text"
              name="searchText"
              required
              id=""
            />
            <input
              className="text-xs md:text-base text-White font-semibold bg-Secondary px-2 py-1 border-2 border-l-0 border-Secondary/30 rounded-e-md"
              type="submit"
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
      {allJobPost?.length > 0 ? (
        <div className="my-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="">
                <tr className="bg-Slate text-White">
                  <th>Title</th>
                  <th>Date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {allJobPost.map((jobPost, idx) => (
                  <tr key={idx} className="bg-Primary">
                    <td>
                      <div className="flex items-center space-x-2">
                        <div>
                          <div className="font-bold">{jobPost.title}</div>
                          <div className="text-sm opacity-50">
                            {jobPost.userName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Deadline: {jobPost.deadDate}
                      <br />
                      <span>Post Date: {jobPost.postDate}</span>
                    </td>
                    <td>{jobPost.SalaryRange}</td>
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
              postCount > limit ? "join flex justify-center" : "hidden"
            }
          >
            <button
              onClick={handlePrevButton}
              className={page === 1 ? "hidden" : "join-item btn"}
            >
              Prev
            </button>
            {pages.map((page, idx) => (
              <button
                onClick={() => handlePageClick(page)}
                key={idx}
                className={
                  page === activePage
                    ? "bg-Slate/10 join-item btn"
                    : "join-item btn"
                }
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextButton}
              className={pages.length === page ? "hidden" : "join-item btn"}
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
