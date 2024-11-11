import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

const randomJobs = [1,2,3,4,5,6,7,8];

function LatestJobs() {
    const { allJobs } = useSelector(store => store.job);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center'><span className='text-[#F83002]'>Latest & Top </span>Job Openings</h1>
            <div className='grid grid-cols-3 my-6 gap-4'>
                {
                    allJobs.length <= 0 ? <span className='text-4xl font-medium'>No Jobs Found</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
                {/* {
                    allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                } */}
            </div>         
        </div>
    )
}

export default LatestJobs