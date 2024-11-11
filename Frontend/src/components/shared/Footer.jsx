import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import { MailIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-gray-50 p-5'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-4'>
          {/* Copyright and Made with love */}
          <p className='text-muted-foreground text-sm'>Made with ❤️ by <span className='text-[#F83002] font-semibold'>Ashirwad</span>
          </p>

          {/* Social Icons */}
          <div className='flex gap-6'>
            <a href="https://github.com/ashirwadexe" target='_blank' rel="noopener noreferrer">
              <GitHubLogoIcon width={20} height={20} className="text-gray-600 hover:text-[#F83002]" />
            </a>
            <a href="mailto:your-email@example.com" target='_blank' rel="noopener noreferrer">
              <MailIcon size={20} className="text-gray-600 hover:text-[#F83002]" />
            </a>
            <a href="https://www.instagram.com/ashirwad_bappy" target='_blank' rel="noopener noreferrer">
              <InstagramLogoIcon width={20} height={20} className="text-gray-600 hover:text-[#F83002]" />
            </a>
            <a href="https://x.com/ashirwadexe" target='_blank' rel="noopener noreferrer">
              <TwitterLogoIcon width={20} height={20} className="text-gray-600 hover:text-[#F83002]" />
            </a>
            <a href="https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/" target='_blank' rel="noopener noreferrer">
              <LinkedInLogoIcon width={20} height={20} className="text-gray-600 hover:text-[#F83002]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer