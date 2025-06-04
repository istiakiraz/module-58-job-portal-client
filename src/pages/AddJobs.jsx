import axios from "axios";
import React from "react";
import TinyEditor from "../components/TinyEditor";

const AddJobs = () => {
  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const addJobData = Object.fromEntries(formData.entries());
    // console.log(addJobData);

    // process salary range data
    const { min, max, currency, ...newJob } = addJobData;
    newJob.salaryRange = { min, max, currency };

    //process requirements
    newJob.requirements = newJob.requirements
      .split(",")
      .map((res) => res.trim());

    //process responsibilities

    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    //extra status
    newJob.status = "active";

    console.log(newJob);

    //save job to database

    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl py-16 text-pink-700">Add Jobs</h1>

      <form onSubmit={handleAddJob} className="mb-16">
        {/* basic info*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value="On-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn  "
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Next.js"
            />
          </div>
        </fieldset>

        {/* job Category  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">job Category</legend>

          <select
            name="category"
            defaultValue="job Category"
            className="select"
          >
            <option disabled={true}>job Category</option>
            <option>IT</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application deadline</legend>

          <input type="date" name="deadline" className="input" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid gap-1 lg:grid-cols-3">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="number"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>
            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="number"
                name="max"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>
            <div>
              <label className="label">Currency</label>

              <select
                name="currency"
                defaultValue="Select a Currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>bdt</option>
                <option>usd</option>
                <option>eu</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/*  Job Description*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            placeholder="Job Description"
            name="description"
            className="textarea textarea-neutral"
          ></textarea>
        </fieldset>

        {/* job requirement */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">job requirement</legend>

          <textarea
            placeholder="requirements (separate by comma)"
            name="requirements"
            className="textarea textarea-neutral"
          ></textarea>
        </fieldset>

        {/* job responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">job responsibilities</legend>

          <textarea
            placeholder="responsibilities (separate by comma)"
            name="responsibilities"
            className="textarea textarea-neutral"
          ></textarea>
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR info</legend>

          <label className="label">HR name</label>
          <input
            type="text"
            className="input"
            name="hr_name"
            placeholder="HR name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input"
            placeholder="HR Email"
          />
        </fieldset>
        <input type="submit" className="btn  btn-primary" value="Add Job" />

        <TinyEditor></TinyEditor>
      </form>
    </div>
  );
};

export default AddJobs;
