import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../CustomHooks/useAxios";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "./Loading";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const deadlineDate = new Date("2023-10-31");
  const today = new Date();
  const axios = useAxios();
  const { id } = useParams();

  const postDetails = async () => {
    const res = await axios.get(`details/${id}`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: postDetails,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return console.log(error.message);
  }
  const { _id, title, category, email, deadDate } = data.data;

  const handleApplyButton = () => {
    if ("h@example.com" === email) {
      return Swal.fire({
        icon: "error",
        title: "Sorry!!!",
        text: "You Can't Apply Your Own Job",
      });
    }
    if (deadlineDate > today) {
      return Swal.fire({
        icon: "error",
        title: "Sorry!!!",
        text: "Applications Deadline is Over",
      });
    }
    document.getElementById("my_modal_5").showModal();
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const resumeURL = form.resumeURL.value;
    const applicantsInfo = { userName, email, resumeURL };
    console.log(applicantsInfo);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="text-center my-10">
      <h1>{_id}</h1>
      <h1>{title}</h1>
      <h1>{category}</h1>
      <h1>{email}</h1>
      <h1>{deadDate}</h1>
      <button onClick={handleApplyButton} className="btn bg-Red">
        Apply
      </button>

      {/* ===== Modal Display ==== */}
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Submit Application</h3>
          <form onSubmit={handleSubmitButton} className="mt-3">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="w-full">
                <input
                  className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-Black font-medium"
                  type="text"
                  name="userName"
                  value={`${user.displayName}`}
                  required
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-Black font-medium"
                  type="email"
                  name="email"
                  value={`${user.email}`}
                  required
                />
              </div>
            </div>

            <div>
              <input
                className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-primary font-medium my-3"
                type="url"
                name="resumeURL"
                placeholder="Enter Your Resume Link"
                required
              />
            </div>

            <div className="flex justify-center gap-4">
              <input className="btn" type="submit" value="Submit" />
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </div>
  );
};

export default PostDetails;
