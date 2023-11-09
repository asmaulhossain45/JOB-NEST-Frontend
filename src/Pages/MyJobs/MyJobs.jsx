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
        text: "You want to delete this Post!",
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
            text: "Your file has been deleted Successfully.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-12 py-4">
          {myAllJob?.map((jobPost) => (
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

                <div className="flex justify-center gap-4 text-center">
                  <Link
                    to={`/update-post/${jobPost._id}`}
                    className="text-base font-bold text-Primary border-2 border-Primary py-1 w-full rounded-md hover:bg-Primary hover:text-White duration-300"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => {
                      mutation.mutate(jobPost._id);
                    }}
                    className="text-base font-bold text-White bg-Primary py-1 w-full rounded-md border-2 border-Primary hover:bg-Transparent hover:text-Primary duration-300"
                  >
                    Delete
                  </button>
                </div>
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
