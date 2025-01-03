import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontalIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'

function CompaniesTable() {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompnay, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.length >= 0 && companies.filter((company) => {
            if(!searchCompanyByText) {
                return true;
            }
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
        });
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText])
    return (
    <div>
        <Table className="bg-white p-10 border border-gray-300 mt-10">
            <TableCaption>A list of your recent registered companies.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    filterCompnay?.map((company) => (
                        <tr>
                            <TableCell>
                                    <Avatar>
                                        <AvatarImage src={company.logo}/>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className=" cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontalIcon/></PopoverTrigger>
                                        <PopoverContent className="w-24 bg-[#F83002] text-white font-bold">
                                            <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center justify-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4 font-bold'/>
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                        </tr>           
                    ))
                }
                
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable