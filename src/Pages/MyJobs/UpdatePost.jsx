import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading";
import useAxios from "../../CustomHooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [updatePostDate, setUpdatePostDate] = useState(new Date());
  const [updateDeadline, setUpdateDeadline] = useState(new Date());
  const axios = useAxios();

  //   ===== Post Date Convert =====
  const pickerDate1 = new Date(updatePostDate);
  const day1 = String(pickerDate1.getDate()).padStart(2, "0");
  const month1 = String(pickerDate1.getMonth() + 1).padStart(2, "0");
  const year1 = pickerDate1.getFullYear();
  const formattedPostDate = `${day1}-${month1}-${year1}`;
  console.log("Formatted Date: ", formattedPostDate);
  //   ===== Deadline Date Convert =====
  const pickerDate2 = new Date(updateDeadline);
  const day2 = String(pickerDate2.getDate()).padStart(2, "0");
  const month2 = String(pickerDate2.getMonth() + 1).padStart(2, "0");
  const year2 = pickerDate1.getFullYear();
  const formattedDeadline = `${day2}-${month2}-${year2}`;
  console.log("Formatted Deadline: ", formattedDeadline);

  // Get Data ========
  const updatePost = async () => {
    const res = await axios.get(`update-post/${id}`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: updatePost,
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
    companyName,
    companySite,
    location,
    companyLogo,
    category,
    gender,
    bannerURL,
    age,
    salary,
    experience,
    education,
    description,
  } = data.data;

  //   Update Data ========
  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const ceoName = form.userName.value;
    const companyName = form.companyName.value;
    const companySite = form.companySite.value;
    const location = form.location.value;
    const companyLogo = form.companyLogo.value;
    const category = form.category.value;
    const gender = form.gender.value;
    const bannerURL = form.bannerURL.value;
    const age = form.age.value;
    const salary = form.salary.value;
    const experience = form.experience.value;
    const education = form.education.value;
    const description = form.description.value;
    const updateInfo = {
      title,
      ceoName,
      companyEmail: user.email,
      companyName,
      companySite,
      location,
      companyLogo,
      category,
      gender,
      bannerURL,
      postDate: formattedPostDate,
      deadline: formattedDeadline,
      age,
      salary,
      experience,
      education,
      description,
    };
    try {
      await axios.patch(`update-post/${_id}`, updateInfo).then((res) => {
        console.log(res);
        navigate("/my-jobs");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Post Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (error) {
      console.log("Post Error: ", error.message);
    }
  };

  return (
    <div className="bg-Transparent min-h-[90vh] flex justify-center items-center my-6">
      <Helmet>
        <title>Update Post</title>
      </Helmet>
      <div className="w-11/12 md:w-3/4 mx-auto pb-12 bg-Transparent shadow-xl border-t-4 border-Secondary rounded-lg">
        <h1 className="text-center text-white text-xl md:text-3xl font-bold bg-Secondary py-2">
          UPDATE JOB DETAILS
        </h1>
        <form
          onSubmit={handleUpdateProduct}
          className=" text-slate-900 px-4 md:px-10 pt-4"
        >
          {/* ==== Job Title ==== */}
          <div className="md:flex justify-center items-center w-full gap-4">
            <div className="w-full my-1">
              <label className="font-semibold">Job Title</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="title"
                defaultValue={title}
                id="1"
              />
            </div>
            {/* ==== User Name ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Your Name</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                value={user.displayName}
                name="userName"
                id="2"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            {/* ==== Company Name ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Company Name</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="companyName"
                defaultValue={companyName}
                placeholder="Webiots Cloud"
                id="3"
              />
            </div>
            {/* ==== Company Site ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Company Site</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 pl-3 py-1 rounded-md w-full"
                type="url"
                name="companySite"
                defaultValue={companySite}
                placeholder="https://www.example.jpg"
                id="4"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            {/* ==== Office Location ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Company Location</label> <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="location"
                defaultValue={location}
                placeholder="New-York, USA"
                id="5"
              />
            </div>
            {/* ==== Company Logo ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Company Logo</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 pl-3 py-1 rounded-md w-full"
                type="url"
                name="companyLogo"
                defaultValue={companyLogo}
                placeholder="https://www.companyLogo.png"
                id="6"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            {/* ==== Category ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Category</label>
              <br />
              <select
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                name="category"
                defaultValue={category}
                id="7"
              >
                <option selected disabled>
                  Choose One
                </option>
                <option>On Site</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Part Time</option>
              </select>
            </div>
            {/* ==== Gender ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Gender</label>
              <br />
              <select
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                name="gender"
                defaultValue={gender}
                id="8"
              >
                <option selected disabled>
                  Choose One
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Both</option>
              </select>
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            {/* ==== Banner  URL ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Banner URL</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="url"
                name="bannerURL"
                defaultValue={bannerURL}
                placeholder="https://www.banner.jpg"
                id="9"
              />
            </div>

            <div className="flex justify-between items-center w-full gap-4">
              <div className="w-full my-1">
                <label className="font-semibold">Post Date</label>
                <br />
                <DatePicker
                  className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={updatePostDate}
                  showWeekNumbers
                  onChange={(date) => setUpdatePostDate(date)}
                  id="10"
                />
              </div>
              <div className="w-full my-1">
                <label className="font-semibold">Deadline</label>
                <br />
                <DatePicker
                  className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                  showIcon
                  selected={updateDeadline}
                  showWeekNumbers
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => setUpdateDeadline(date)}
                  id="11"
                />
              </div>
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            {/* ==== Age ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Age (min-max)</label> <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="age"
                defaultValue={age}
                placeholder="22 - 30"
                id="12"
              />
            </div>
            {/* ==== Salary per month ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Salary (per month)</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="salary"
                defaultValue={salary}
                placeholder="25k - 35k"
                id="13"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            {/* ==== Experience ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Experience (Year)</label> <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 pl-3 py-1 rounded-md w-full"
                type="number"
                name="experience"
                defaultValue={experience}
                placeholder="1"
                id="14"
              />
            </div>
            {/* ==== Educational Requirement ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Educational Requirement</label>{" "}
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="education"
                defaultValue={education}
                placeholder="Bachelor's Degree"
                id="15"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            {/* ==== Other Description ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Other Description</label> <br />
              <textarea
                className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                name="description"
                defaultValue={description}
                placeholder="Description"
                id="16"
                rows="5"
              ></textarea>
            </div>
          </div>
          <input
            className="w-full text-lg font-semibold text-Black bg-Secondary py-1 mt-3 rounded-md hover:scale-95 duration-300"
            type="submit"
            value="Update Post"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
