import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import Creatable from "react-select/creatable";

const UpdateJob = () => {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    postedBy,
    skills,
    companyLogo,
  } = useLoaderData();
  const [Soption, setoption] = React.useState(null);

  const options = [
    { value: "C++", label: "C++" },
    { value: "Javascript", label: "Javascript" },
    { value: "React", label: "React" },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Updated Successfully");
        }
        reset();
      });
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                placeholder="Job Title"
                className="create-job-input"
                {...register("jobTitle", { required: true })}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                defaultValue={companyName}
                placeholder="Company Name"
                className="create-job-input"
                {...register("companyName", { required: true })}
              />
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                defaultValue={minPrice}
                placeholder="Minimum Salary"
                className="create-job-input"
                {...register("minPrice", { required: true })}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                defaultValue={maxPrice}
                placeholder="Maximum Salary"
                className="create-job-input"
                {...register("maxPrice", { required: true })}
              />
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>

              <select
                {...register("salaryType")}
                defaultValue={salaryType}
                className="create-job-input"
              >
                <option value={salaryType} selected>
                  {salaryType}
                </option>
                <option value="hourly">Hourly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                defaultValue={jobLocation}
                type="text"
                placeholder="Job Location"
                className="create-job-input"
                {...register("jobLocation", { required: true })}
              />
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience</label>

              <select
                {...register("experienceLevel")}
                className="create-job-input"
                defaultValue={experienceLevel}
              >
                <option value={experienceLevel} selected>
                  {experienceLevel}
                </option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work Remotely">Work Remotely</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                defaultValue={postingDate}
                placeholder="Job Posting Date"
                className="create-job-input"
                {...register("postingDate", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <Creatable
              className="create-job-input py-4"
              defaultValue={skills}
              onChange={setoption}
              isMulti
              options={options}
            />
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue={companyLogo}
                placeholder="Company Logo"
                className="create-job-input"
                {...register("companyLogo", { required: true })}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType} selected>
                  {employmentType}
                </option>
                <option value="Full-Time">Full-Time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              defaultValue={description}
              placeholder="Job Description"
              {...register("description")}
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-lg">Posted by (email)</label>
            <input
              defaultValue={postedBy}
              type="email"
              className="create-job-input"
              {...register("postedBy", { required: true })}
            />
          </div>
          <input
            onSubmit={onSubmit}
            type="submit"
            className="block mt-12  bg-yellow-300 hover:bg-violet-500 transition-colors duration-500 hover:text-white font-semibold px-8 py-2 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
