import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DataLoading from "../../Components/DataLoading";
import NoData from "../../Components/NoData";
import useAxios from "../../CustomHooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";

const MyJobs = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  // Data load Function
  const myAllJobs = async () => {
    const res = await axios.get(`allJobPost?email=${user.email}`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["myAllJob", user.email],
    queryFn: myAllJobs,
  });

  // Delete Post Using Mutation
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`update-post/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myAllJob"] });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Post Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  if (isLoading) {
    return <DataLoading />;
  }
  if (error) {
    return console.log(error.message);
  }
  const myAllJob = data?.data.result;

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
                <Link to={`/update-post/${job._id}`} className="btn bg-Red">
                  Update
                </Link>
                <button
                  onClick={() => {
                    mutation.mutate(job._id);
                  }}
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
