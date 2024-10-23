import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, LogOutIcon, User2 } from 'lucide-react'
import { Button } from '../ui/button'


function Navbar() {
    const user = false;

    return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
            <div>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Hunt</span></h1>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='flex font-medium items-center gap-5' >
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Browse</li>
                </ul>

                {
                    !user ? (
                        <div className='flex items-center gap-2'>
                             <Button variant="outline">Login</Button>
                             <Button className="bg-[#F83002] hover:bg-[#d43511]">Signup</Button>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className='w-80'>
                                <div className='flex gap-4 space-y-2'>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium'>Ashirwad Chaurasia</h4>
                                        <p className='text-sm text-muted-foreground'>This is about me.</p>
                                    </div>
                                </div>
                                <div className='flex flex-col text-gray-600'>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <User2/>
                                        <Button variant="link">View Profile</Button>
                                    </div>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <LogOutIcon/>
                                        <Button variant="link">Logout</Button>
                                    </div>
                                </div>
                                
                            </PopoverContent>
                        </Popover>
                    )
                }
                
            </div>
        </div>
    </div>
    )
}

export default Navbar