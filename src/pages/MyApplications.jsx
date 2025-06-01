import React, { useState } from "react";
import ApplicationStats from "../components/ApplicationStats";
import ApplicationList from "../components/ApplicationList";
import { useLoaderData, useParams } from "react-router";

const MyApplications = () => {
  const initialApplication = useLoaderData();
  const params = useParams();

  const [myApply, setMyApply] = useState(initialApplication);

  console.log(initialApplication);
  console.log(params.email);

  return (
    <div>
      <ApplicationStats></ApplicationStats>
      {/* {myApply.length} */}
      <div>
        {myApply.map((apply) => (
          <ApplicationList 
          key={apply._id} 
          apply={apply}
          ></ApplicationList>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
