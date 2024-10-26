import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Banglore", "Pune", "Noida", "Hyderbad"]
    },
    {
        filterType: "Industry",
        array: ["Fronted", "Backend", "MERN Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-45k", "45-1Lakh", "1-3Lakh"]
    }
]

function FilterCard() {
  return (
    <div className='bg-white w-full p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <br className='mt-3' />
        <RadioGroup>
            {
                filterData.map((data, index) => (
                    <div>
                        <h1 className='font-medium text-lg'>{data.filterType}</h1>
                        {
                            data.array.map((item, index) => {
                                return (
                                    <div className='flex items-center space-x-1 my-3'>
                                        <RadioGroupItem value={item} className="text-[#F83002]"/>
                                        <Label className="text-sm">{item}</Label>  
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard