import React from 'react'
import LatestJobCards from './LatestJobCards';

function LatestJobs() {

    const randomJobs = [1,2,3,4,5,6,7,8];
    return (
        <div className='max-w-7xl mx-auto my-20 bg-gray-50 border border-gray-200 rounded-lg px-10 py-5'>
            <h1 className='text-4xl font-bold text-center'><span className='text-[#F83002]'>Latest & Top </span>Job Openings</h1>
            <div className='grid grid-cols-3 my-6 gap-4'>
                {
                    randomJobs.slice(0,6).map((item, index) => <LatestJobCards/>)
                }
            </div>         
        </div>
    )
}

export default LatestJobs