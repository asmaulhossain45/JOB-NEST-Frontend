import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../CustomHooks/useAxios";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "./Loading";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const navigate = useNavigate();
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
  const {
    _id,
    title,
    ceoName,
    companyEmail,
    companyName,
    companySite,
    location,
    companyLogo,
    category,
    gender,
    bannerURL,
    postDate,
    deadline,
    age,
    salary,
    experience,
    education,
    description,
  } = data.data;

  // formatted Today Date
  const today = new Date();
  const split = deadline.split("-");
  const FormattedDeadline = new Date(split[2], split[1] - 1, split[0]);

  const handleApplyButton = () => {
    if (userEmail === companyEmail) {
      return Swal.fire({
        icon: "error",
        title: "Sorry!!!",
        text: "You Can't Apply Your Own Job",
      });
    }
    if (FormattedDeadline < today) {
      return Swal.fire({
        icon: "error",
        title: "Sorry!!!",
        text: "Applications Deadline is Over",
      });
    }
    document.getElementById("my_modal_5").showModal();
  };

  const handleSubmitButton = async (event) => {
    event.preventDefault();
    const form = event.target;
    const applicantName = form.applicantName.value;
    const applicantEmail = form.applicantEmail.value;
    const resumeURL = form.resumeURL.value;
    const applicantsInfo = {
      applicantName,
      applicantEmail,
      resumeURL,
      title,
      ceoName,
      companyEmail,
      companyName,
      companySite,
      location,
      companyLogo,
      category,
      gender,
      bannerURL,
      postDate,
      deadline,
      age,
      salary,
      experience,
      education,
      description,
    };
    try {
      await axios.post("applications", applicantsInfo).then((res) => {
        console.log(res);
      });
      await axios.patch(`details/${_id}`).then((res) => {
        console.log(res);
        navigate("/all-jobs");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Applications Submit Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (error) {
      console.log("Post Error: ", error.message);
    }
  };

  return (
    <div className="my-10 px-4 md:px-8 lg:px-12">
      <div className="mb-4">
        <h1 className="text-center text-Primary text-2xl md:text-4xl lg:text-5xl font-bold">
          JOB DETAILS
        </h1>
      </div>
      <div className="p-5 bg-Primary/30 rounded-md">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <div className="md:flex">
          <div className="w-full space-y-2 font-semibold text-Black/70 text-base">
            <img
              className="w-full h-[20vh] object-cover rounded-md"
              src={bannerURL}
              alt=""
            />
            <h1>Category: {category}</h1>
            <h1>Gender: {gender}</h1>
            <h1>Job Post: {postDate}</h1>
            <h1>Deadline: {deadline}</h1>
            <h1>Age: {age}</h1>
            <h1>Salary: {salary} per month</h1>
            <h1>Experience: {experience}</h1>
            <h1>Education: {education}</h1>
          </div>
          <div className="hidden md:divider md:divider-horizontal"></div>
          <div className="w-full space-y-2 font-semibold text-Black/70 text-base mt-4 md:mt-0">
            <img
              className="h-[20vh] w-full object-cover rounded-md"
              src={companyLogo}
              alt=""
            />
            <h1>Company: {companyName}</h1>
            <h1>CEO: {ceoName}</h1>
            <h1>Email: {companyEmail}</h1>
            <h1>Site: {companySite}</h1>
            <h1>Location: {location}</h1>
          </div>
        </div>
        <h1 className="font-semibold text-base text-Black/50 mt-2">
          Description: {description}
        </h1>
        <div className="flex justify-center mt-5">
          <button onClick={handleApplyButton} className="btn bg-Red">
            Apply
          </button>
        </div>
      </div>

      {/* ===== Modal Display ==== */}
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box p-0">
          <h3 className="bg-Secondary text-center font-bold text-xl py-2">
            Submit Application
          </h3>
          <form onSubmit={handleSubmitButton} className="space-y-4 p-5">
            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-Black font-medium"
              type="text"
              name="applicantName"
              value={`${user.displayName}`}
              required
            />

            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-Black font-medium"
              type="email"
              name="applicantEmail"
              value={`${user.email}`}
              required
            />

            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-Black font-medium"
              type="url"
              name="resumeURL"
              placeholder="Enter Your Resume Link"
              required
            />

            <div className="flex justify-center items-center">
              <input
                className="bg-Secondary text-Black hover:bg-Primary hover:text-White text-lg font-semibold px-4 py-2 rounded-md duration-300"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PostDetails;
