import React from 'react'
import Button from './Button'

function Features_section() {
return (
    <div className=' w-full h-[32rem] 2xl:h-[35rem] flex justify-between items-start md:justify-start md:gap-[5rem] lg:gap-[10rem] 2xl:gap-[20rem]'>
        <div className='w-[8rem] md:w-[10rem]  h-[15rem] flex flex-col gap-2'>
            <div>
                <p className='font-[sansr]'>(03)</p>
                <p className='font-[sansm] text-[.8rem] md:text-[1rem] lg:text-[1.2rem]'>Benfits & <br/> Features </p>
            </div>
            <p className='font-[sansl] text-[.65rem] md:text-[.7rem] lg:text-[.8rem]'>powered by <span>Blockchain technology</span> for secure and <span>transperent transaction</span></p>
        </div>
        <div className=' h-fit w-[16rem] md:w-[30rem] lg:w-[40rem] 2xl:w-[60rem] flex flex-col justify-center items-center gap-2'>
            <div className='w-full flex flex-col md:flex-row md:items-end md:justify-start  justify-center items-start gap-2 2xl:gap-8 '>
                <div className='border 2xl:border-2 border-white w-[16rem] lg:w-[24rem] h-[8rem] md:h-[10rem] lg:h-[12rem] 2xl:h-[18rem] 2xl:w-[34rem] p-2 2xl:p-4 rounded-xl 2xl:rounded-3xl flex flex-col justify-center lg:justify-evenly items-start'>
                    <p className='font-[sansm] text-[1.6rem] lg:text-[2rem] 2xl:text-[3.4rem] lg:font-[sansb]'>Discover<br/>Promising ideas</p>
                    <p className='font-[sansl] text-[.6rem] lg:text-[.8rem] 2xl:text-[1rem]'>Discover and support innovative projects that match your investment goals</p>
                </div> 
                <div className='flex flex-col justify-center items-start gap-1 2xl:gap-3 md:mb-5 '>
                    <p className='text-[.45rem] 2xl:text-[.6rem] 2xl:w-[80%]  w-[10rem]'>Trusted by thousands of users for our secure and trustworthy Environment</p>
                    <div className='flex justify-center items-start'>
                        <div className='w-[2.4rem] h-[2.4rem] 2xl:h-[4rem] 2xl:w-[4rem] bg-stone-800 opacity-65 rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] 2xl:h-[4rem] 2xl:w-[4rem] bg-stone-500 opacity-65 rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] 2xl:h-[4rem] 2xl:w-[4rem] bg-stone-400 opacity-65 rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] 2xl:h-[4rem] 2xl:w-[4rem] bg-stone-300 opacity-65 rounded-full'></div>
                        <div className='w-[2.4rem] h-[2.4rem] 2xl:h-[4rem] 2xl:w-[4rem] bg-stone-100 opacity-65 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row  md:items-end md:justify-start justify-center items-start lg:items-center gap-4 2xl:gap-6 w-full '>
                <div className=' bg-white bg-opacity-70 p-2 2xl:p-4 text-black w-[16rem] lg:w-[18rem] h-[8rem] md:h-[10rem] lg:h-[12rem] 2xl:w-[25rem] 2xl:h-[14rem] rounded-xl 2xl:rounded-3xl flex flex-col justify-center 2xl:justify-around items-start '>
                    <p className='text-[1.6rem] font-[sanseb] lg:text-[2rem] 2xl:text-[2.5rem] 2xl:font-[sanseb] lg:font-[sansb]'>Direct Investment<br/>Oppournities</p>
                    <p className='text-[.7rem] font-[sansb] lg:text-[.8rem] 2xl:text-[1rem]'>Invest directly in exicting projects with secure and transperent contrubution</p>
                </div>
                <div className=' flex flex-col justify-center items-start gap-4 md:w-[15rem] 2xl:w-[20rem] 2xl:h-[14rem] 2xl:justify-around'>
                    <div>
                        <p className='font-[sansm] text-[1rem] 2xl:text-[1.4rem]'><span className='underline underline-offset-2'>Secure investments</span> <span className='font-[sansb]'>without diluting</span> your <span className='font-[sansb]'>shares</span></p>
                        <p className='font-[sansl] text-[.8rem] 2xl:text-[1rem] '>-Transparent progress tracking</p>
                        <p className='font-[sansl] text-[.8rem] 2xl:text-[1rem] '>-Easy Access to Funding</p>
                    </div>
                    <Button/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Features_section