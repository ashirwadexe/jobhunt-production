import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import FilterCard from './FilterCard'
import Job from './Job';

function Jobs() {
    const jobsArray = [1,2,3,4,5,6,7,8,9];

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-30%'>
                        <FilterCard />
                    </div>
                    {
                        jobsArray.length <= 0 ? (
                            <div className='flex text-4xl font-bold'>Jobs Not Found</div>
                        ) : (
                            <div className='flex-1 h-[88vh] overflow-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        jobsArray.map((item, index) => (
                                            <div key={index}>
                                                <Job />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Jobs;
