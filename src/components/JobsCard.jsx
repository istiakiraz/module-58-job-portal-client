import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

const JobsCard = ({job}) => {

    const {title, location, jobType, cartegory, description, company, company_logo  } = job;

    return (
        <div className="card bg-indigo-100 pt-5 w-96 shadow-sm">
  <div className='flex pl-5 items-center space-x-2 '>
    <figure>
    <img
      src={company_logo}
      alt="Shoes" />
  </figure>
 <div>
     <h1 className='text-2xl font-semibold '>{company}</h1>
     <p className='flex items-center gap-1'><CiLocationOn />{location}</p>
 </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">
     {title}
      <div className="badge bg-indigo-300">{jobType}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default JobsCard;