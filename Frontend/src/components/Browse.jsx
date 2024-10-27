import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import Footer from './shared/Footer';

const randomJObs = [1,2];

function Browse() {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
          <h1 className='font-bold text-xl my-10'>Search Results ({randomJObs.length})</h1>
          <div className='grid grid-cols-3 gap-4'>
            {
              randomJObs.map((item, index) => {
                return (
                  <Job/>
                )
              })
            }
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Browse