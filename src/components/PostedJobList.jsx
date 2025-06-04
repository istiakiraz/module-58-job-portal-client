import React, { use } from 'react';

const PostedJobList = ({jobsCreatedByPromise}) => {

    const jobs = use(jobsCreatedByPromise)

    return (
        <div>
            {jobs.length}
        </div>
    );
};

export default PostedJobList;