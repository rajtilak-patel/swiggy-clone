import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoy } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
const listData = [
    {
        name:"Search",
        icon:<CiSearch className='text-[20px]'/>
    },
    {
        name:"Offer",
        icon:<BiSolidOffer className='text-[20px]' />,
        sup:"New"
    },
    {
        name:"Help",
        icon:<IoHelpBuoy  className='text-[20px]'/>
    },
    {
        name:"Sign In",
        icon:<FaRegUser  className='text-[20px]'/>
    },
    {
        name:"Cart",
        icon:<BsMinecart  className='text-[20px]'/>
    }
]


const Header = () => {
    const [toggle , setToggle] = useState(false);
    const  setVisible = ()=>{
          setToggle(true);
    }
    const hideSideMenu = ()=>{
        setToggle(false);
    }

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-400 z-[999]' onClick={hideSideMenu} style={{opacity:toggle?1:0, visibility:toggle?'visible':'hidden'}}>
        <div className='w-[480px] h-full bg-white absolute duration-[400ms]' onClick={(e)=>{
            e.stopPropagation();
        }} style={{left:toggle?"0%":"-100%"}}>

        </div>
    </div>
    <div className='p-[12px] shadow-xl w-[100%] sticky top-0 z-[99] bg-white'>
       <div className='flex items-center gap-5 w-[82%] mx-auto'>
         <div>
              <img className='h-[50px] w-[80px] bg-white' src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" />
         </div>
         <div className='text-[14px]'>
            <span className='font-bold text-[14px] border-b-[2px] border-black mr-[5px] hover:text-[#fc8522] hover:border-[#fc8522] cursor-pointer'>Raipur</span> Raipur, Chhattisgarh, India <RxCaretDown onClick={setVisible} className='inline font-bold text-2xl text-[#fc8522] cursor-pointer'/>
         </div>
        <div className='flex m-auto list-none gap-[40px] mr-[10px] text-semibold'>
            {
                listData.map((data,index)=>{
                  return <li key={index} className='flex items-center gap-2 hover:text-[#fc8522] cursor-pointer text-[14px] font-semibold'>
                  {data.icon}
                  {data.name}
                  <sup>{data.sup}</sup>
                  </li>
                })
            }
        </div>
       </div>
    
    </div>
    </>
  )
}

export default Header
