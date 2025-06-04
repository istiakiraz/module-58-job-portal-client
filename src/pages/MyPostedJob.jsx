import React, { Suspense } from 'react';
import UseAuth from '../hooks/UseAuth';
import PostedJobList from '../components/PostedJobList';
import { jobsCreatedByPromise } from '../api/jobsapi';

const MyPostedJob = () => {

    const {user} = UseAuth();


    return (
        <div>
           <h1 className='py-16 text-4xl text-purple-700 text-center'>My MyPosted Job</h1>

        <Suspense>
            <PostedJobList jobsCreatedByPromise ={jobsCreatedByPromise(user.email)} ></PostedJobList>
        </Suspense>


        </div>
    );
};

export default MyPostedJob;