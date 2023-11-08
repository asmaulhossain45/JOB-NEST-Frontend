import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
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
    const res = await axios.get(`my-job?email=${user.email}`);
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
  const myAllJob = data?.data;

  return (
    <div className="min-h-[90vh]">
        <Helmet><title>JN | My Job</title></Helmet>
      {myAllJob.length > 0 ? (
        <div className="grid grid-cols-3 gap-6 p-3">
          {myAllJob?.map((jobPost) => (
            <div
              key={jobPost._id}
              className="bg-BgPrimary p-4 rounded-md space-y-1 flex flex-col"
            >
              <h1 className="text-xl font-bold grow">{jobPost.title}</h1>

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
              <Link to={`/update-post/${jobPost._id}`} className="btn bg-Red">
                Update
              </Link>
              <button
                onClick={() => {
                  mutation.mutate(jobPost._id);
                }}
                className="btn bg-Secondary"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default MyJobs;
