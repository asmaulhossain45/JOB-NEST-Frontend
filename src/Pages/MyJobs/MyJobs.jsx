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
  // return
  // Delete Post Using Mutation
  const mutation = useMutation({
    mutationFn: async (id) => {
      return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`update-post/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["myAllJob"] });
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
      <Helmet>
        <title>JN | My Job</title>
      </Helmet>
      {myAllJob.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3">
          {myAllJob?.map((jobPost) => (
            <div
              key={jobPost._id}
              className="bg-BgPrimary p-4 rounded-md space-y-1 flex flex-col"
            >
              <h1 className="text-xl font-bold grow">{jobPost.title}</h1>{" "}
              <hr className="py-1" />
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
              <div className="flex justify-center gap-4">
                <Link
                  to={`/update-post/${jobPost._id}`}
                  className="w-full flex-1 btn btn-sm bg-Secondary border-2 border-Secondary text-White hover:text-Black"
                >
                  Update
                </Link>

                <button
                  onClick={() => {
                    mutation.mutate(jobPost._id);
                  }}
                  className="w-full flex-1 btn btn-sm bg-transparent text-Primary border-2 border-Primary"
                >
                  Delete
                </button>
              </div>
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
