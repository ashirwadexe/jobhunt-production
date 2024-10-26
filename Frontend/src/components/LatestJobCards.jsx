import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCards() {
  return (
    <div className='mb-10 p-5 rounded-md border border-gray-100 bg-white cursor-pointer shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
        <div>
            <h1 className='font-medium text-lg'>Company Name</h1>
            <Badge className="font-bold text-yellow-300" variant="ghost">India</Badge>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eos!Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className="font-bold text-green-500" variant="ghost">12 Positions</Badge>
            <Badge className="font-bold text-red-500" variant="ghost">Part Time</Badge>
            <Badge className="font-bold text-[#7209B7]" variant="ghost">15 LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards