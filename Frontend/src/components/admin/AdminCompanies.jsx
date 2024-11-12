import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { CrossIcon, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import Footer from '../shared/Footer'

function AdminCompanies() {
  useGetAllCompanies();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <div className='text-center my-5'>
        <div className='flex justify-center items-center flex-col gap-8 my-10'>
            <span className='px-4 py-2 bg-gray-100 text-[#F83002] rounded-full font-medium'>No. 1 Recruitment Platform</span>
            <h1 className='text-6xl font-bold'>Source, Screen & <br />Hire Top <span className='text-[#F83002]'>Talent</span></h1>
            <p className='text-lg w-1/2 bg-white text-muted-foreground'>Access a vast pool of ambitious students and graduates. Post jobs, review applications, and manage your hiring pipeline efficiently—all in one powerful platform. Let JobHunt transform your recruitment process today.</p>
            
        </div>
      </div>

      <div className='max-w-7xl mx-auto my-10 bg-white p-10 rounded-md border border-gray-300 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        
        <div className='flex items-center justify-between '>
          {/* <Input
            className="w-fit bg-white"
            placeholder="Filter by name"
          /> */}
          <div>
            <h1 className='text-3xl font-bold'>Register Your <span className='text-[#F83002]'>Company</span> With Us</h1>
            <p className='text-md bg-white text-muted-foreground'>Join thousands of companies hiring top talent through JobHunt</p>
          </div>
          <Button className="bg-[#F83002] hover:bg-[#de3d18]" onClick={() => navigate("/admin/companies/create")}><CrossIcon/> New Company</Button>
        </div>
        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search registered companies..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>
        <CompaniesTable/>
      </div>
      <Footer/>
    </div>
  )
}

export default AdminCompanies