import { useQuery } from "@tanstack/react-query";
import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import generatePDF from "react-to-pdf";
import DataLoading from "../../Components/DataLoading";
import NoData from "../../Components/NoData";
import useAxios from "../../CustomHooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";

const AppliedJobs = () => {
  const axios = useAxios();
  const targetRef = useRef();
  const { user } = useContext(AuthContext);
  const [filterCategory, setFilterCategory] = useState("");
  const userEmail = user.email;

  const handleCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  const allAppliedJobs = async () => {
    const res = await axios.get(
      `applications?email=${userEmail}&category=${filterCategory}`
    );
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [userEmail, filterCategory],
    queryFn: allAppliedJobs,
  });

  if (isLoading) {
    return <DataLoading />;
  }
  if (error) {
    return console.log(error.message);
  }
  const appliedJob = data?.data;

  return (
    <div className="min-h-[90vh]">
      <Helmet>
        <title>JN | Applied Job</title>
      </Helmet>

      {/* ============================= */}
      <div className="flex items-center gap-2 text-lg font-bold text-White justify-end bg-Slate py-1 px-4 md:px-8 lg:px-12">
        Filter:
        <select
          value={filterCategory}
          onChange={handleCategory}
          className="select rounded-md text-Black select-sm space-y-1"
        >
          <option value="" selected>
            All
          </option>
          <option>On Site</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Part Time</option>
        </select>
      </div>
      {/* ========================== */}
      <div>
        {appliedJob.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-12 py-4">
            {appliedJob?.map((jobPost) => (
              <div
                to={`/details/${jobPost._id}`}
                key={jobPost._id}
                className="bg-BgPrimary p-4 rounded-md flex gap-6 justify-between items-center"
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

                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="text-base font-bold text-White bg-Secondary py-1 w-full rounded-md hover:bg-Primary duration-300"
                  >
                    Download Pdf
                  </button>
                </div>

                {/* ==== Modal View ==== */}
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box p-0 text-Black">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>

                    {/* ==== Modal data ===== */}
                    <div ref={targetRef} className="p-5 bg-Primary/30">
                      <h1 className="text-lg font-bold">
                        Title: {jobPost.title}
                      </h1>
                      <div className="space-y-2 font-semibold text-Black/70 text-base">
                        <h1>Category: {jobPost.category}</h1>
                        <h1>Gender: {jobPost.gender}</h1>
                        <h1>Job Post: {jobPost.postDate}</h1>
                        <h1>Deadline: {jobPost.deadline}</h1>
                        <h1>Age: {jobPost.age}</h1>
                        <h1>Salary: {jobPost.salary} per month</h1>
                        <h1>Experience: {jobPost.experience}</h1>
                        <h1>Education: {jobPost.education}</h1>
                        <h1>Company: {jobPost.companyName}</h1>
                        <h1>CEO: {jobPost.ceoName}</h1>
                        <h1>Email: {jobPost.companyEmail}</h1>
                        <h1>Site: {jobPost.companySite}</h1>
                        <h1>Location: {jobPost.location}</h1>
                        <h1 className="text-xl text-Primary">
                          Applicant Information:
                        </h1>
                        <h1>Name: {jobPost.applicantName}</h1>
                        <h1>Email: {jobPost.applicantEmail}</h1>
                        <h1>Resume: {jobPost.resumeURL}</h1>
                      </div>
                      <h1 className="font-semibold text-base text-Black/50 mt-2">
                        Description: {jobPost.description}
                      </h1>
                    </div>

                    {/* ==== Download Button ==== */}
                    <div className="flex justify-center pb-5 bg-Primary/30">
                      <button
                        onClick={() =>
                          generatePDF(targetRef, { filename: "page.pdf" })
                        }
                        className="btn text-White bg-Secondary hover:text-Black"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </dialog>
              </div>
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
