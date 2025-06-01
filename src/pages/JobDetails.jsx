import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const job = useLoaderData()

    const { title, location, jobType, cartegory, description, company, company_logo, requirements, salaryRange,_id} = job

    return (
        <div className='space-y-4 py-16'>
           <h2 className='text-5xl'>Jobs details of : {title}</h2>
           <p>Company: {company}</p>
           <Link to={`/jobApply/${_id}`} ><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;