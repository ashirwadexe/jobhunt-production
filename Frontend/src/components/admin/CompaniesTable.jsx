import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontalIcon } from 'lucide-react'

function CompaniesTable() {
  return (
    <div>
        <Table className="bg-white p-10 border border-gray-300 my-10">
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
                <TableCell>
                    <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdZstnFOO87-aJ43mJ_-R2gGYO8SV9A_GAw&s"/>
                    </Avatar>
                </TableCell>
                <TableCell>CompnayName</TableCell>
                <TableCell>12-11-2024</TableCell>
                <TableCell className=" cursor-pointer">
                    <Popover>
                        <PopoverTrigger><MoreHorizontalIcon/></PopoverTrigger>
                        <PopoverContent className="w-24 bg-[#F83002] text-white font-bold">
                            <div className='flex items-center justify-center gap-2 w-fit cursor-pointer'>
                                <Edit2 className='w-4 font-bold'/>
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable