import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCards({job}) {
  return (
    <div className='mb-10 p-5 rounded-md border border-gray-100 bg-white cursor-pointer shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
        <div>
            <h1 className='font-bold text-2xl'>{job?.company?.name}</h1>
            <Badge className="font-bold text-yellow-400" variant="ghost">India</Badge>
        </div>
        <div>
            <h1 className='font-bold text-1xl my-2 text-[#222222]'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className="font-bold text-green-500" variant="ghost">{job?.position}</Badge>
            <Badge className="font-bold text-red-500" variant="ghost">{job?.jobType}</Badge>
            <Badge className="font-bold text-[#7209B7]" variant="ghost">{job?.salary}</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards