import React from "react";
import { useParams } from "react-router";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(jobId, user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Your application submitted successfully",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pb-16">
      <h2 className="text-5xl py-16 text-center">Apply Job For </h2>

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">GitHub Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Profile Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <input type="submit" className="btn btn-primary" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
