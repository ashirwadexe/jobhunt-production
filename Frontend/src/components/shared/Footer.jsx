import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import { MailIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-white p-5 mt-10'>
        <div className='flex items-start justify-between mx-auto max-w-7xl'>
            <div className='w-1/5'>
                <h1 className='text-2xl font-bold mb-4'><Link to='/'>Job<span className='text-[#F83002]'>Hunt</span></Link></h1>
                <p className='text-muted-foreground text-sm'>Connecting talented individuals with the right opportunities. Whether you're a student seeking your dream job or a recruiter in search of top talent, JobHunt is here to help.</p>
            </div>
            <div>
                <h2 className='font-bold mb-4'>Contact Us:</h2>
                <ul className='flex gap-5'>
                    <li><a href="https://github.com/ashirwadexe" target='_blank'><GitHubLogoIcon width={24} height={24}/></a></li>
                    <li><a href="https://github.com/ashirwadexe" target='_blank'><MailIcon color='purple'/></a></li>
                    <li><a href="https://www.instagram.com/ashirwad_bappy" target='_blank'><InstagramLogoIcon width={24} height={24} color="red"/></a></li>
                    <li><a href="https://x.com/ashirwadexe" target='_blank'><TwitterLogoIcon width={24} height={24} color="green"/></a></li>
                    <li><a href="https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/" target='_blank'><LinkedInLogoIcon width={24} height={24} color="blue"/></a></li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center items-center '>
            <p className='text-muted-foreground'>Made with ❤️ by <span className='text-[#F83002] font-semibold'>Ashirwad</span></p>
        </div>
    </div>
  )
}

export default Footer