// import React, { useState, useEffect } from 'react';
// import JobsCard from './JobsCard';

// const HotJobs = ({jobsPromise}) => {
//   const [jobs, setJobs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('');
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//   if (!jobsPromise) return;

//     setJobs(jobsPromise);
//     setFilteredJobs(jobsPromise);

// }, [jobsPromise]);

//   useEffect(() => {
//     setLoading(true);
//     let filtered = jobs;

//     if (searchTerm.trim()) {
//       filtered = filtered.filter(job =>
//         job.title?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (category) {
//       filtered = filtered.filter(job => job.category === category);
//     }

//     setFilteredJobs(filtered);
//     setLoading(false);
//   }, [searchTerm, category, jobs]);

//   return (
//     <div className='px-4'>
//       <h1 className='text-center text-5xl font-bold py-8'>Hot Jobs of the Day</h1>

//       <div className="max-w-md mx-auto pb-6 flex gap-4">
//         <input
//           type="text"
//           placeholder="Search by job title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-1 border border-gray-300 rounded p-2"
//         />

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 rounded p-2"
//         >
//           <option value="">All Categories</option>
//           <option value="Engineering">Engineering</option>
//           <option value="Design">Design</option>
//           <option value="Marketing">Marketing</option>

//         </select>
//       </div>

//       <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 pb-16'>
//   {loading ? (
//     <p className="col-span-full text-center text-gray-500">Loading...</p>
//   ) : (
//     filteredJobs.length > 0 ? (
//       filteredJobs.map(job => <JobsCard key={job._id} job={job} />)
//     ) : (
//       <p className="col-span-full text-center text-gray-500">No jobs found</p>
//     )
//   )}
// </div>
//     </div>
//   );
// };

// export default HotJobs;

import React, { useState, useEffect } from "react";
import JobsCard from "./JobsCard";
import { jobsPromise } from "../api/allJobApi";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  setLoading(true);

  const query = [];
  if (searchTerm) query.push(`search=${searchTerm}`);
  if (category) query.push(`category=${category}`);
  const queryString = query.join('&');
  
 
 
  jobsPromise(queryString)
    .then(data => setJobs(data))
    
     setLoading(false);
}, [searchTerm, category]);

// const data = use( jobsPromise(queryString)) 
//      setJobs(data)


  return (
    <div className="px-4">
      <h1 className="text-center text-5xl font-bold py-8">
        Hot Jobs of the Day
      </h1>

      <div className="max-w-md mx-auto pb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by job title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border border-gray-300 rounded p-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">All Categories</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="IT">IT</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 pb-16">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Loading...</p>
        ) : jobs.length > 0 ? (
          jobs.map((job) => <JobsCard key={job._id} job={job} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No jobs found
          </p>
        )}
      </div>
    </div>
  );
};

export default HotJobs;
