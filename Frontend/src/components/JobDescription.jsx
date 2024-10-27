import React from "react";
import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Footer from "./shared/Footer";

function JobDescription() {

  const isApplied = false;

  return (
    <div>
      <Navbar/>
      <div className="max-w-5xl mx-auto my-10 bg-white p-10 border border-gray-300 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl">Fronted Developer</h1>
            <div className='flex items-center gap-2 mt-4'>
              <Badge className="font-bold text-green-500" variant="ghost">12 Positions</Badge>
              <Badge className="font-bold text-red-500" variant="ghost">Part Time</Badge>
              <Badge className="font-bold text-[#7209B7]" variant="ghost">15 LPA</Badge>
            </div>
          </div>
          <Button 
            disabled={isApplied} 
            className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#F83002] hover:bg-[#c23111]'}`}>
            {isApplied ? 'Already Applied' : 'Apply Now'}
          </Button>
        </div>
        <h1 className="font-medium text-2xl border-b-2 border-b-gray-300 py-4">Job Description</h1>
        <div>
          <h1 className="font-bold my-1">Role: <span className="text-gray-800 font-normal pl-4">Fronted Developer</span></h1>
          <h1 className="font-bold my-1">Loaction: <span className="text-gray-800 font-normal pl-4">Hyderbad</span></h1>
          <h1 className="font-bold my-1">Description: <span className="text-gray-800 font-normal pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores dolores aperiam inventore nihil animi nostrum nisi ullam commodi iusto?</span></h1>
          <h1 className="font-bold my-1">Experience: <span className="text-gray-800 font-normal pl-4">Fresher</span></h1>
          <h1 className="font-bold my-1">Salary: <span className="text-gray-800 font-normal pl-4">10 LPA</span></h1>
          <h1 className="font-bold my-1">Total Applicants: <span className="text-gray-800 font-normal pl-4">30</span></h1>
          <h1 className="font-bold my-1">Posted Date: <span className="text-gray-800 font-normal pl-4">27-10-2024</span></h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default JobDescription;
