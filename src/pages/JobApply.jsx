import React from 'react';
import { useParams } from 'react-router';

const JobApply = () => {

    const params = useParams()
    console.log(params);


    return (
        <div>
            JobApply
        </div>
    );
};

export default JobApply;