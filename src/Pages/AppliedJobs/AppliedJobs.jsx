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
  console.log(appliedJob);
  return (
    <div className="min-h-[90vh]">
      <Helmet>
        <title>JN | Applied Job</title>
      </Helmet>
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
      <div>
        {appliedJob.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 lg:px-12 py-4">
            {appliedJob?.map((job) => (
              <div
                key={job._id}
                className="bg-BgPrimary p-4 rounded-md space-y-1 flex flex-col"
              >
                <h1 className="text-xl font-bold grow">{job.title}</h1>

                <h2 className="text-sm text-Black/60 font-semibold">
                  CEO: {job.ceoName}
                </h2>

                <h6 className="text-sm text-Black/60 font-semibold">
                  Salary: <span className="text-Red">{job.salary}</span>
                </h6>

                <h6 className="text-sm text-Black/60 font-semibold">
                  Applicants Number: {job.JobApplicantsNumber}
                </h6>

                <h3 className="text-sm text-Black/60 font-semibold">
                  Job Post: {job.postDate}
                </h3>

                <h4 className="font-semibold">Deadline: {job.deadline}</h4>

                <button
                  className="text-base font-bold text-White bg-Secondary py-1 w-full rounded-md hover:bg-Primary duration-300"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Download Pdf
                </button>

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
                      <h1 className="text-lg font-bold">Title: {job.title}</h1>
                      <div className="space-y-2 font-semibold text-Black/70 text-base">
                        <h1>Category: {job.category}</h1>
                        <h1>Gender: {job.gender}</h1>
                        <h1>Job Post: {job.postDate}</h1>
                        <h1>Deadline: {job.deadline}</h1>
                        <h1>Age: {job.age}</h1>
                        <h1>Salary: {job.salary} per month</h1>
                        <h1>Experience: {job.experience}</h1>
                        <h1>Education: {job.education}</h1>
                        <h1>Company: {job.companyName}</h1>
                        <h1>CEO: {job.ceoName}</h1>
                        <h1>Email: {job.companyEmail}</h1>
                        <h1>Site: {job.companySite}</h1>
                        <h1>Location: {job.location}</h1>
                        <h1 className="text-xl text-Primary">
                          Applicant Information:
                        </h1>
                        <h1>Name: {job.applicantName}</h1>
                        <h1>Email: {job.applicantEmail}</h1>
                        <h1>Resume: {job.resumeURL}</h1>
                      </div>
                      <h1 className="font-semibold text-base text-Black/50 mt-2">
                        Description: {job.description}
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
