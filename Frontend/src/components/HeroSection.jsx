import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

function HeroSection() {
  return (
    <div className='text-center my-5'>
        <div className='flex justify-center items-center flex-col gap-8 my-10'>
            <span className='px-4 py-2 bg-gray-100 text-[#F83002] rounded-full font-medium'>No. 1 Job hunt Website</span>
            <h1 className='text-5xl font-bold'>Search, Apply & <br />Get Your <span className='text-[#F83002]'>Dream Job</span></h1>
            <p className='text-sm w-1/2 bg-white text-muted-foreground'>Connecting ambitious students with exciting career opportunities and empowering recruiters to find the perfect candidates. Search, apply, and manage applications—all in one place. Let JobHunt streamline your job search and hiring process today</p>
            <div className='flex w-[40%] bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border border-gray-200 rounded-full items-center gap-4 mx-auto pl-3'>
                <input
                    type="text"
                    placeholder='search your dream job'
                    className='outline-none border-none w-full'
                />
                <Button className="rounded-r-full bg-[#F83002] hover:bg-[#dd4d2d]">
                        <Search className='h-5 w-5' />
                </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection