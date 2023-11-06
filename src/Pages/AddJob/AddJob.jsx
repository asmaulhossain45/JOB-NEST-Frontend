import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const [postDate, setPostDate] = useState(new Date());
  const [deadDate, setDeadDate] = useState(new Date());

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const userName = form.userName.value;
    const companyName = form.companyName.value;
    const companySite = form.companySite.value;
    const location = form.location.value;
    const workPlace = form.workPlace.value;
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
      userName,
      email: user.email,
      companyName,
      companySite,
      location,
      workPlace,
      category,
      gender,
      bannerURL,
      postDate,
      deadDate,
      age,
      salary,
      experience,
      education,
      description,
    };
    console.log(jobInfo);
  };

  console.log({ postDate });

  return (
    <div className="bg-Transparent min-h-[90vh] flex justify-center items-center my-6">
      <Helmet>
        <title>ADD A JOB</title>
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
                placeholder="New-York, USA"
                id="5"
              />
            </div>
            {/* ==== Work Place ==== */}
            <div className="w-full my-1">
              <label className="font-semibold">Work Place</label>
              <br />
              <input
                className="bg-transparent border-2 border-Black/30 outline-0 pl-3 py-1 rounded-md w-full"
                type="text"
                name="workPlace"
                placeholder="From Home / At Office"
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
                  selected={deadDate}
                  showWeekNumbers
                  onChange={(date) => setDeadDate(date)}
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
