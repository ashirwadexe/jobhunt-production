import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constants'

function CompanyCreate() {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
                headers: {
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success) {
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto my-10 p-10 bg-white'>
            <div className='my-10'>
                <h1 className='font-bold text-2xl'>Your Company Name</h1>
                <p className='text-gray-500'>What would you like to give your company name ? You can change it later !</p>
            </div>
            <Label>Company Name</Label>
            <Input
                type="text"
                className="my-2"
                placeholder="JobHunt, Microsoft, Etc"
                onChange={(e) => setCompanyName(e.target.value)}
            />
            <div className='flex items-center gap-2 my-10'>
                <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
                <Button className="bg-[#F83002] hover:bg-[#de3d18]">Continue</Button>
            </div>
        </div>
    </div>
  )
}

export default CompanyCreate