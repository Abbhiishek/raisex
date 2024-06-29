import React from 'react'
import Image from 'next/image'
import rightarrowb from '../../public/assets/Right arrow black.png'
import underline from '../../public/assets/underline.png'

function Title_card() {
return (
    <div className='h-fit w-full flex flex-col justify-center items-start gap-2 lg:gap-[2rem] xl:gap-[4rem] 2xl:gap-[7rem] '>
        <div className=' w-full flex flex-col justify-center items-center 2xl:gap-[4rem]'>
            <div className='h-[4rem] lg:h-[5rem] xl:h-[6rem] 2xl:h-[7rem] w-full flex justify-start gap-4 lg:gap-[2rem] 2xl:gap-[5rem] items-baseline'>
                <p className=' font-[sansm] text-[2.5rem] lg:text-[4rem] xl:text-[4.4rem] 2xl:text-[7rem]'>Experience</p>
                <div className=' flex justify-center items-center gap-2'>
                    <div className='flex'>
                        <div className=' bg-white w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem] rounded-full '></div>
                        <div className=' bg-white w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem] rounded-full '></div>
                        <div className=' bg-white w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem] rounded-full '></div>
                    </div>
                    <p className='font-[sansl] text-[.4rem] lg:text-[.5rem] xl:text-[.65rem]'>Welcome to our<br/>Fundrasing platform</p>
                </div>
            </div>
            <div className='p-1  w-full h-[5.5rem]  flex justify-start items-center gap-4 lg:gap-[2rem] 2xl:gap-[4rem]'>
                <div className='relative'>
                    <p className='font-[handstyle] text-[3.4rem] lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[7.5rem]'>the ideas</p>
                    <Image src={underline} alt='' className='absolute bottom-[-.2rem] right-[-.3rem] w-[5.5rem] md:w-[6rem] lg:w-[7rem] xl:w-[10rem] 2xl:w-[12rem]' />
                </div>
                <p className='font-[sansm] text-[3rem] lg:text-[4rem] xl:text-[4.4rem] 2xl:text-[7rem]'>of Future.</p>
            </div>
        </div>
        
        <div className=' flex flex-col lg:flex-row lg:justify-between lg:items-center justify-center items-start gap-[4rem] md:gap-[2rem] w-full'>
            <p className='font-[sansr] text-[.8rem] lg:text-[.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 2xl:font-[sansl]  w-[18rem] md:w-[85%] lg:w-[60%] '>Post your ideas, share updates, engage with the communities and attract angel investors all in one place.</p>
            <div className='flex justify-center items-center'>
                <p className='bg-white text-black px-6 py-1 lg:px-[2.2rem] lg:py-[.4rem] xl:px-[3rem] xl:py-[.5rem] 2xl:text-[1.3rem] rounded-full uppercase font-[sansb]'>Start now</p>
                <Image src={rightarrowb} alt='->' className='bg-white w-[2rem] lg:w-[2.4rem] xl:w-[2.6rem] 2xl:w-[3.2rem] rounded-full p-[.35rem]'/>
            </div>
        </div>
    </div>
)
}

export default Title_card