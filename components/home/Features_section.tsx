import React from 'react'
import Button from './Button'

function Features_section() {
return (
    <div className='w-full h-[32rem] flex justify-between items-start'>
        <div className='w-[8rem] h-[15rem] flex flex-col gap-2'>
            <div>
                <p className='font-[sansr]'>(03)</p>
                <p className='font-[sansm] text-[.8rem]'>Benfits & <br/> Features </p>
            </div>
            <p className='font-[sansl] text-[.65rem]'>powered by <span>Blockchain technology</span> for secure and <span>transperent transaction</span></p>
        </div>
        <div className='w-[16rem] flex flex-col justify-center items-center gap-2'>
            <div className='flex flex-col justify-center items-start gap-2'>
                <div className='border border-white w-[16rem] h-[8rem] p-2 rounded-xl flex flex-col justify-center items-start'>
                    <p className='font-[sansm] text-[1.6rem]'>Discover<br/>Promising ideas</p>
                    <p className='font-[sansl] text-[.6rem]'>Discover and support innovative projects that match your investment goals</p>
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-[.45rem] w-[10rem]'>Trusted by thousands of users for our secure and trustworthy Environment</p>
                    <div className='flex justify-center items-start'>
                        <div className='w-[2.4rem] h-[2.4rem] bg-white rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-white rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-white rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-white rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-white rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start gap-2 '>
                <div className='bg-white bg-opacity-70 p-2 text-black w-[16rem] h-[8rem] rounded-xl flex flex-col justify-center items-start'>
                    <p className='text-[1.6rem] font-[sanseb]'>Direct Investment<br/>Oppournities</p>
                    <p className='text-[.7rem] font-[sansb]'>Invest directly in exicting projects with secure and transperent contrubution</p>
                </div>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <div>
                        <p className='font-[sansm] text-[1rem]'><span className='underline underline-offset-2'>Secure investments</span> <span className='font-[sansb]'>without diluting</span> your <span className='font-[sansb]'>shares</span></p>
                        <p className='font-[sansl] text-[.8rem] '>-Transparent progress tracking</p>
                        <p className='font-[sansl] text-[.8rem] '>-Easy Access to Funding</p>
                    </div>
                    <Button/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Features_section