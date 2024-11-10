import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constants'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import { toast } from 'sonner'
import { Building2 } from 'lucide-react'

function CompanyCreate() {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
                headers: {
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success) {
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.error(error.response?.data?.message || "An error occurred");
            toast.error(error.response?.data?.message || "Registration failed");
        }
    }

    return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto my-10 p-10 bg-white border border-gray-300 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div className='my-10'>
                <div className='flex items-center gap-2'>
                    <Building2/>
                    <h1 className='font-bold text-3xl'>Register Your Company</h1>
                </div>
                <p className='text-gray-500'>What would you like to give your company name ? You can change it later !</p>
            </div>
            <Label>Company Name</Label>
            <Input
                type="text"
                className="my-2"
                placeholder="JobHunt, Microsoft, Etc"
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)}
            />
            <div className='flex items-center gap-2 my-10'>
                <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
                <Button className="bg-[#F83002] hover:bg-[#de3d18]" onClick={registerNewCompany}>Continue</Button>
            </div>
        </div>
    </div>
  )
}

export default CompanyCreate