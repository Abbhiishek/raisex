import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/raisex logo.png'

function Footer() {
  return (
    <div className='py-6 px-2 w-full h-[23rem] flex flex-col justify-between items-start '>
        <div className='w-full flex flex-col md:flex-row md:justify-between md:items-start justify-center items-center'>
            <div className=' w-full md:w-fit md:h-fit h-[5rem] flex flex-col justify-start items-start'>
                <Image src={logo} alt='' className='w-[2rem] md:w-[3rem]'/>
                <p className='text-[1.5rem] md:text-[2rem] font-[sansm]'>Raisx</p>
            </div>
            <div className='  h-[15rem] w-full md:w-fit 2xl:w-[40rem] md:px-8 flex flex-col md:flex-row justify-between 2xl:justify-start gap-4 items-start'>
                <div className='  flex justify-start gap-2  2xl:gap-4 items-center w-full md:w-fit h-[8rem]'>
                    <div className='  h-full w-[8rem] 2xl:w-[12rem] '>
                        <p className='font-[sansm] text-[1.2rem] 2xl:text-[1.5rem]'>Social Links</p>
                        <p className='text-[.8rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Twitter</p>
                        <p className='text-[.8rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Linkedin</p>
                        <p className='text-[.8rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Instagram</p>
                    </div>
                    <div className=' h-full w-[8rem] 2xl:w-[12rem] '>
                        <p className='font-[sansm] text-[1.2rem] 2xl:text-[1.5rem]'>Quick Links</p>
                        <p className='text-[.7rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Home</p>
                        <p className='text-[.7rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>About Us</p>
                        <p className='text-[.7rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Features</p>
                        <p className='text-[.7rem] font-[sansr] underline underline-offset-2'>FAQ</p>
                    </div>
                </div>
                <div className='s 2xl:w-[12rem] '>
                    <p className='font-[sansm] text-[1.2rem] 2xl:text-[1.5rem]'>Legal<br/>Infromation</p>
                    <p className='text-[.7rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Privacy Policy</p>
                    <p className='text-[.7rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Terms of Service</p>
                    <p className='text-[.7rem] 2xl:text-[.8rem] font-[sansr] underline underline-offset-2'>Cookie Policy</p>
                </div>
            </div>
        </div>
        <p className='w-full flex justify-center items-center text-[.7rem] font-[sansl]'>@ All rights are resrved</p>
    </div>
  )
}

export default Footer