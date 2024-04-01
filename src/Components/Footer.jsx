import React from 'react'
import { SiSwiggy } from "react-icons/si";
const Footer = () => {
  return (
    <div className='w-full  md:h-[350px] bg-[#02060c] mx-auto p-8 md:p-3'>
        {/* <div className='grid grid-cols-2 md:grid-cols-4 items-center md:mx-[250px] text-[12px] md:text-[16px]'>
           <div className='font-bold mb-2 w-[50%] text-white flex justify-center items-center'>
             <SiSwiggy className=' mr-2 text-[90px]'/> <span> Swiggy</span> 
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
        </div> */}
        <div className='grid grid-cols-2 md:grid-cols-4 items-center md:mx-[250px] cursor-pointer'>
            <div className='w-[50%] text-[#8a847b]'>
             <div className='font-bold mb-2 w-[50%] text-white flex justify-center items-center'>
              <SiSwiggy className='mr-2 text-[90px]'/> <span> Swiggy</span> 
            </div>
               <div>© 2024 Bundl Technologies Pvt. Ltd</div> 
            </div>
            <div className='w-[50%] text-[#8a847b]'>
            <div className=' font-bold mb-2 w-[50%] text-white'>
                Company
               </div>
               <ul className='text-[15px]'>
                <li className='py-1'>About</li>
                <li className='py-1'>Careers</li>
                <li className='py-1'>Team</li>
                <li className='py-1'>Swiggy One</li>
                <li className='py-1'>Swiggy Instamart</li>
                <li className='py-1'>Swiggy Genie</li>
               </ul>
            </div>
            <div className='mb-2 w-[50%] text-[#8a847b] '>
               <div className=' font-bold mb-2 w-[50%] text-white'>
               Contact us
               </div>
               <ul className='text-[15px] '>
                <li className='py-1'>Help & Support</li>
                <li className='py-1'>Partner with us</li>
                <li className='py-1'>Ride with us</li>
               </ul>
            </div>
            <div className='w-[50%] text-[#8a847b]'>
               <div className=' font-bold mb-2 w-[50%] text-white'>
               We deliver to:
            </div>
               <ul className='text-[15px]'>
                <li className='py-1'>Bangalore</li>
                <li className='py-1'>Gurgaon</li>
                <li className='py-1'>Hyderabad</li>
                <li className='py-1'>Delhi</li>
                <li className='py-1'>Mumbai</li>
                <li className='py-1'>Pune</li>
               </ul>
            </div>
            </div>
    </div>
  )
}

export default Footer
