import Image from 'next/image'
import React from 'react'
import rightarrowb from '../../public/assets/Right arrow black.png'
import { ThemeToggler } from '../shared/ThemeToggler'
// import rightarroww from '../../public/assets/'

import logo from '../../public/assets/raisex logo.png'
import Link from 'next/link'


function Navbar() {
    return (
        <div className=' flex justify-between items-center w-full h-[3rem] '>
            <div className='flex justify-center items-center'>
                <div className='flex justify-start items-center rounded-full bg-black border border-stone-500 border-opacity-30 px-3 gap-2 w-[6rem] md:w-[7rem] 2xl:w-[10rem] 2xl:h-[3rem] md:justify-center 2xl:justify-start 2xl:px-[1.8rem] h-[2.5rem] '>
                    <Image src={logo} alt='' className='w-[1.2rem] 2xl:w-[1.8rem]' />
                    <p className='font-[sansm] 2xl:text-[1.4rem] '>Raisx</p>
                </div>
                {/* <div className='border border-white w-[5.2rem] h-[2.5rem] flex justify-center items-center rounded-full font-[sansr]'>FAQ</div> */}
            </div>
            <div className='flex justify-center items-center gap-3 w-fit md:w-[20rem] lg:w-[25rem] xl:w-[31rem] md:justify-between md:px-1'>
                <div className='flex justify-center items-center gap-2'>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='font-[sansm] text-[.75rem]'>54K</p>
                        <p className='font-[sansl] text-[.45rem]'>Active User</p>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='font-[sansm] text-[.75rem]'>22+</p>
                        <p className='font-[sansl] text-[.45rem]'>Investors</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <ThemeToggler />
                    <Link href='/login' className='border dark:border-white rounded-full w-[5rem] 2xl:w-[7rem]  py-1 md:w-[6rem] dark:bg-white dark:text-black border-black flex justify-center items-center'>
                        <p className='font-[sansm] text-[.8rem] 2xl:text-[1rem] 2xl:font-[sansb]'>Login</p>
                        <Image src={rightarrowb} alt='' className='w-[1rem]  -rotate-45' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar