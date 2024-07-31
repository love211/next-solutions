import React from 'react'
import MobileWrapper from './MobileWrapper'
import { FaInstagram, FaPaypal } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

const DigitalCard8= () => {
  return (
    <MobileWrapper>
    <div className='w-[20rem] h-full px-6 flex flex-col items-center gap-[1.5rem] py-8 gap
     bg-[url(https://i.pinimg.com/564x/16/7e/23/167e23eac74dc1cd7acb1f859c5ff956.jpg)]'>
      <div className='w-[6rem] h-[6rem] flex items-center justify-center rounded-full border border-white bg-slate-500'>
        <p className='text-white font-bold'>HArMOnize</p>
      </div>
      <div className='w-fit h-fit flex flex-col gap-[0.5rem] text-white text-center'>
        <h1 className='text-3xl font-bold'>Hande Erccel</h1>
        <p>Senior Software Developer</p>
      </div>
      <div className='w-fit h-fit flex flex-col gap-[1rem]'>
        <button className='w-[15rem] h-[3rem] border-2 border-[#D8d8d8] font-bold text-white shadow-md rounded-full'>
          Menu
        </button>
        <button className='w-[15rem] h-[3rem] border-2 border-[#D8d8d8] font-bold text-white shadow-md rounded-full'>
          Order online
        </button>
        <button className='w-[15rem] h-[3rem] border-2 border-[#D8d8d8] font-bold text-white shadow-md rounded-full'>
          Our Story
        </button>
        <button className='w-[15rem] h-[3rem] border-2 border-[#D8d8d8] font-bold text-white shadow-md rounded-full'>
          Locations
        </button>
      </div>
      <div className='w-fit h-fit flex items-center justify-center gap-[0.75rem] pb-11'>
        <FaInstagram className='stroke-white fill-white  h-8 w-8' />
        <FaPaypal className='stroke-white fill-white  h-8 w-8' />
        <BsTwitterX className='stroke-white fill-white  h-8 w-8' />
      </div>
    </div>
  </MobileWrapper>
  )
}

export default DigitalCard8