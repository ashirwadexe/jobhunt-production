import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJobs from './LatestJobs'

function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousal/>
        <LatestJobs/>
    </>
  )
}

export default Home