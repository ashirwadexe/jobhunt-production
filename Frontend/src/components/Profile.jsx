import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from '@radix-ui/react-label';
import AppliedJobsTable from './AppliedJobsTable';
import Footer from './shared/Footer';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';

// Predefined array of light colors
const lightColors = [
    "#FFB3B3", // Light Red
    "#B3FFB3", // Light Green
    "#FFFFB3", // Light Yellow
    "#B3E5FF", // Light Blue
    "#D1B3FF", // Light Purple
    "#FFB3E6", // Light Pink
    "#FFE6B3", // Light Orange
    "#B3FFFF", // Light Cyan
];

const isResume = true;

function Profile() {
    const [open, setOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <Avatar className="h-14 w-14">
                            <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className='text-right' variant='outline'>
                        <Pen />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-medium text-lg'>Skills</h1>
                    <div className='flex items-center gap-3'>
                        {user?.profile?.skills?.length
                            ? user.profile.skills.map((item, index) => (
                                  <Badge
                                      key={index}
                                      style={{
                                          backgroundColor: lightColors[index % lightColors.length],
                                          color: 'black',  // Set text color to black
                                      }}
                                  >
                                      {item}
                                  </Badge>
                              ))
                            : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid gap-1.5 w-full max-w-sm items-center'>
                    <Label className='font-bold text-md'>Resume</Label>
                    {isResume ? (
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={user?.profile?.resume}
                            className='text-blue-500 w-full hover:underline cursor-pointer'
                        >
                            {user?.profile?.resumeOriginName}
                        </a>
                    ) : (
                        <span>NA</span>
                    )}
                </div>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-xl my-2 pt-6'>Applied Jobs</h1>
                {/* Application Table Component */}
                <AppliedJobsTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
            <Footer />
        </div>
    );
}

export default Profile;
