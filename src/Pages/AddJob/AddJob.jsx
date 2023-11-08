import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../CustomHooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axios = useAxios();
  const [postDate, setPostDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());

  //   ===== Post Date Convert =====
  const pickerDate1 = new Date(postDate);
  const day1 = String(pickerDate1.getDate()).padStart(2, "0");
  const month1 = String(pickerDate1.getMonth() + 1).padStart(2, "0");
  const year1 = pickerDate1.getFullYear();
  const formattedPostDate = `${day1}-${month1}-${year1}`;
  console.log("Formatted Date: ", formattedPostDate);
  //   ===== Deadline Date Convert =====
  const pickerDate2 = new Date(deadline);
  const day2 = String(pickerDate2.getDate()).padStart(2, "0");
  const month2 = String(pickerDate2.getMonth() + 1).padStart(2, "0");
  const year2 = pickerDate1.getFullYear();
  const formattedDeadline = `${day2}-${month2}-${year2}`;
  console.log("Formatted Deadline: ", formattedDeadline);

  const handleAddProduct = async (event) => {
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
    const jobInfo = {
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
      JobApplicantsNumber: 0,
    };
    try {
      await axios.post("allJobPost", jobInfo).then((res) => {
        console.log(res);
        navigate("/all-jobs");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Job Post Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (error) {
      console.log("Post Error: ", error.message);
    }
  };

  console.log({ postDate });

  return (
    <div className="bg-Transparent min-h-[90vh] flex justify-center items-center my-6">
      <Helmet>
        <title>JN | Add Job</title>
      </Helmet>
      <div className="w-11/12 md:w-3/4 mx-auto pb-12 bg-Transparent shadow-xl border-t-4 border-Secondary rounded-lg">
        <h1 className="text-center text-white text-xl md:text-3xl font-bold bg-Secondary py-2">
          ADD JOB DETAILS
        </h1>
        <form
          onSubmit={handleAddProduct}
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
                required
                placeholder="Web Developer"
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                placeholder="https://www.banner.jpg"
                required
                id="9"
              />
            </div>

            <div className="flex justify-between items-center w-full gap-4">
              {/* ==== POST Date ==== */}
              <div className="w-full my-1">
                <label className="font-semibold">Post Date</label>
                <br />
                <DatePicker
                  className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={postDate}
                  showWeekNumbers
                  onChange={(date) => setPostDate(date)}
                  id="10"
                />
              </div>
              {/* ==== Deadline ==== */}
              <div className="w-full my-1">
                <label className="font-semibold">Deadline</label>
                <br />
                <DatePicker
                  className="bg-transparent border-2 border-Black/30 outline-0 px-3 py-1 rounded-md w-full"
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={deadline}
                  showWeekNumbers
                  onChange={(date) => setDeadline(date)}
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
                placeholder="22 - 30"
                required
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
                placeholder="25k - 35k"
                required
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
                placeholder="1"
                required
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
                placeholder="Bachelor's Degree"
                required
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
                placeholder="Description"
                required
                id="16"
                rows="5"
              ></textarea>
            </div>
          </div>
          <input
            className="w-full text-lg font-semibold text-Black bg-Secondary py-1 mt-3 rounded-md hover:scale-95 duration-300"
            type="submit"
            value="Post Job"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
