import React from 'react';
import Banner from '../components/Banner';
import HotJobs from '../components/HotJobs';
// import { useLoaderData } from 'react-router';

const Homepage = () => {

    //  const jobsPromise = fetch('http://localhost:3000/jobs').then(res=> res.json())
    //  const jobsPromise = useLoaderData()
    //  console.log(jobsPromise); jobsPromise={jobsPromise}



    return (
        <div>
            <Banner></Banner>
            <HotJobs  ></HotJobs>
        </div>
    );
};

export default Homepage;