import Image from 'next/image'
import React from 'react'
import rightarrowb from '../../public/assets/Right arrow black.png'
import Button from './Button'

function About_section() {
    return (
    <div className=' w-full h-[25rem] flex justify-between md:justify-start md:gap-[5rem] lg:gap-[10rem] 2xl:gap-[20rem]'>
        <div className=' w-[8rem] md:w-[10rem] h-[8rem] flex flex-col gap-1'>
            <p className='font-[sansr] 2xl:text-[1.2rem]'>(01)</p>
            <p className='font-[sansl] text-[.8rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.3rem]'>more <span className='font-[sansb]'>about</span> our platform</p>
        </div>
        <div className=' md:w-[29rem] lg:w-[30rem] 2xl:[35rem] w-[16rem]   flex flex-col justify-start items-start gap-[2rem] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.6rem]'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <p className='font-[sansl]'>our platform is designed to be <span className='font-[sansb]'>user-friendly</span>, <span className='font-[sansb]'>secure</span> and <span className='font-[sansb]'>reliable</span>.</p>
                <p className='font-[sansl]'>Post your <span className='font-[sansb]'>ideas</span>, share updates, <span className='font-[sansr] underline decoration-1 underline-offset-4'>engage with the community</span> and attract the <span className='font-[sansb]'>investors</span> all in one place</p>
            </div>
            <Button/>
        </div>
    </div>
    )
}

export default About_section