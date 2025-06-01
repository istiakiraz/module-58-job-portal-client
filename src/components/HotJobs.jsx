import React, { use } from 'react';
import JobsCard from './JobsCard';

const HotJobs = ({jobsPromise}) => {

    // const jobs = use(jobsPromise);
    


   


    return (
        <div>
            <div>
                {
                    jobsPromise.map(job => <JobsCard key={job._id} ></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;