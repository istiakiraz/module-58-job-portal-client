import React, { use } from 'react';
import JobsCard from './JobsCard';

const HotJobs = ({jobsPromise}) => {

    // const jobs = use(jobsPromise);
    


   


    return (
        <div> <h1 className='text-center text-5xl font-bold py-16'>Hot Jobs of the Day  </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pb-16 space-y-3 gap-3'>
                {
                    jobsPromise.map(job => <JobsCard key={job._id} job={job} ></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;