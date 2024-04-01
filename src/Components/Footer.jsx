import React from 'react'
import { SiSwiggy } from "react-icons/si";
const Footer = () => {
  return (
    <div className='w-full h-[350px] bg-[#02060c] mx-auto p-3'>
        <div className='grid grid-cols-4 items-center mx-[250px] text-[16px]'>
           <div className='font-bold mb-2 w-[50%] text-white flex justify-center items-center'>
             <SiSwiggy className=' mr-2 text-[80px]'/> <span> Swiggy</span> 
           </div>
           <div className=' font-bold mb-2 w-[50%] text-white'>
            Company
           </div>
           <div className='font-bold mb-2 w-[50%] text-white'>
           Contact us
           </div>
           <div className='font-bold mb-2 w-[50%] text-white'>
             We deliver to:
           </div>
        </div>
        <div className='grid grid-cols-4 items-center mx-[250px]'>
            <div className='mt-[-120px] w-[50%] text-[#8a847b]'>
               <div>© 2024 Bundl Technologies Pvt. Ltd</div> 
            </div>
            <div className='w-[50%] text-[#8a847b]'>
               <ul className='text-[15px]'>
                <li className='py-1'>About</li>
                <li className='py-1'>Careers</li>
                <li className='py-1'>Team</li>
                <li className='py-1'>Swiggy One</li>
                <li className='py-1'>Swiggy Instamart</li>
                <li className='py-1'>Swiggy Genie</li>
               </ul>
            </div>
            <div className='font-bold mb-2 w-[50%] text-[#8a847b]'>
               <ul className='text-[15px] '>
                <li className='py-1'>About</li>
                <li className='py-1'>Careers</li>
                <li className='py-1'>Team</li>
                <li className='py-1'>Swiggy One</li>
                <li className='py-1'>Swiggy Instamart</li>
                <li className='py-1'>Swiggy Genie</li>
               </ul>
            </div>
            <div className='font-bold mb-2 w-[50%] text-[#8a847b]'>
               <ul className='text-[15px]'>
                <li className='py-1'>About</li>
                <li className='py-1'>Careers</li>
                <li className='py-1'>Team</li>
                <li className='py-1'>Swiggy One</li>
                <li className='py-1'>Swiggy Instamart</li>
                <li className='py-1'>Swiggy Genie</li>
               </ul>
            </div>
            </div>
    </div>
  )
}

export default Footer
