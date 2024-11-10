import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { CrossIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function AdminCompanies() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between '>
          <Input
            className="w-fit bg-white"
            placeholder="Filter by name"
          />
          <Button className="bg-[#F83002] hover:bg-[#de3d18]" onClick={() => navigate("/admin/companies/create")}><CrossIcon/> New Company</Button>
        </div>
        <CompaniesTable/>
      </div>
    </div>
  )
}

export default AdminCompanies