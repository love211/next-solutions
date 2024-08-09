import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiTwitchLine } from "react-icons/ri";

const Cardd01 = () => {
  return (
    <div className='w-[17.872rem] h-fit flex flex-col bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.6)]'>
      <div className='w-full h-fit '>
        <img
          src='https://caycepollard-demo.carrd.co/assets/images/image01.jpg?v68863967512051'
          alt='Side picture of Cayce Pollard'
          />
      </div>
      <div className='w-full h-fit px-4 py-6 flex flex-col gap-[1rem] text-left'>
        <div className='w-full flex flex-col gap-[0.25rem]'>
          <h2 className='text-2xl text-extrabold text-slate-500'>Cayce Pollard</h2>
          <p className='text-slate-400 font-medium'>Multiverse Analyst</p>
        </div>
        <div className='w-full flex'>
          <p className='text-sm text-slate-400'>Lorem ipsum dolor ex magna. Interdum malesuada fames ac ante ipsum amet et faucibus. Pellentesque et venenatis dolor imperdiet lorem dolor mattis lorem sagittis. Praesent rutrum magna sem diam.</p>
        </div>
        <div className='w-full h-fit flex justify-start items-center gap-[0.5rem]'>
        <CiMail className='h-5 w-5 fill-slate-400' />
        <IoPhonePortraitOutline className='h-4 w-4 stroke-slate-400'/>
        <RiTwitchLine className='h-5 w-5 fill-slate-400'/>
        </div>
      </div>
    </div>
  )
}

export default Cardd01





