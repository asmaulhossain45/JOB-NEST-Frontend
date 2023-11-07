import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import DataLoading from "../../Components/DataLoading";
import NoData from "../../Components/NoData";
import useAxios from "../../CustomHooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  const myAllJobs = async () => {
    const res = await axios.get(`allJobPost?email=${"hr@example.com"}`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["myAllJob", user.email],
    queryFn: myAllJobs,
  });

  if (isLoading) {
    return <DataLoading />;
  }
  if (error) {
    return console.log(error.message);
  }
  const myAllJob = data?.data.result;

  const handleUpdateButton = (id) => {
    console.log(id);
  };

  const handleDeleteButton = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h1>
        {myAllJob.length > 0 ? (
          <div className="grid grid-cols-3 gap-6 p-3">
            {myAllJob?.map((job) => (
              <div key={job._id} className="bg-Primary text-White">
                <h1>{job._id}</h1>
                <h1>{job.title}</h1>
                <h1>{job.category}</h1>
                <h1>{job.email}</h1>
                <h1>{job.deadDate}</h1>
                <button
                  onClick={() => handleUpdateButton(job._id)}
                  className="btn bg-Red"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteButton(job._id)}
                  className="btn bg-Red"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </h1>
    </div>
  );
};

export default MyJobs;
