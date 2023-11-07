import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import DataLoading from "../../Components/DataLoading";
import NoData from "../../Components/NoData";
import useAxios from "../../CustomHooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";

const AppliedJobs = () => {
  const axios = useAxios();
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
    <div>
      <div>
        <select
          value={filterCategory}
          onChange={handleCategory}
          className="select rounded-md w-full select-sm max-w-xs space-y-1"
        >
          <option value="" selected>
            All
          </option>
          <option>On Site</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Part Time</option>
        </select>
        <p>Selected value: {filterCategory}</p>
      </div>
      <div>
        {appliedJob.length > 0 ? (
          <div className="grid grid-cols-3 gap-6 p-3">
            {appliedJob?.map((job) => (
              <div key={job._id} className="p-3 bg-Primary text-White">
                <h1>{job._id}</h1>
                <h1>{job.title}</h1>
                <h1>{job.category}</h1>
                <h1>{job.applicantEmail}</h1>
                <h1>{job.deadDate}</h1>
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
