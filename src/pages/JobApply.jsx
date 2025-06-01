import React from "react";
import { useParams } from "react-router";
import UseAuth from "../hooks/UseAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(jobId, user);

  const handleSubmit =(e)=>{
    e.preventDefault()

    const form = e.target;

    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    const application = {
        jobId,
        applicant : user.email,
        linkedIn,
        github,
        resume
    }



  }



  return (
    <div className="pb-16">
      <h2 className="text-5xl py-16 text-center">Apply Job For </h2>

      <form onSubmit={handleSubmit} >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
         

          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedin" className="input" placeholder="LinkedIn Profile Link" />

          <label className="label">GitHub Link</label>
          <input type="url" name="github" className="input" placeholder="Github Profile Link" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input" placeholder="Resume Link" />

          <input type="submit" className="btn btn-primary" value="Apply" />


        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
