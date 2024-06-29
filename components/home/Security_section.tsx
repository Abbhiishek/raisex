import Image from 'next/image'
import React from 'react'
import eth from '../../public/assets/eth.jpg'
import coin from '../../public/assets/coin.jpeg'
import play from '../../public/assets/play.png'


function Security_section() {
    return (
        <div className=' w-full h-[30rem] 2xl:h-[32rem] flex justify-between md:justify-start md:gap-[5rem] lg:gap-[10rem] 2xl:gap-[20rem]  items-start'>
            <div className='  w-[8rem] md:w-[10rem] 2xl:w-[12rem] h-[15rem] flex flex-col gap-2'>
                <div>
                    <p className='font-[sansr] 2xl:text-[1.2rem]'>(02)</p>
                    <p className='text-[.85rem] md:text-[1rem] lg:text-[1.2rem] 2xl:text-[1.3rem] font-[sansr]'><span className='font-[sansm]'>security</span> and <span className='font-[sansm]'>measures</span></p>
                </div>
                <p className='text-[.55rem] md:text-[.7rem] 2xl:text-[.8rem] font-[sansl] '>we understand that security is a top concern for our users. which is why we have implemented <span className='font-[sansb]'>state-of-the-art security</span> measures to protect your assets.</p>
            </div>
            <div className='w-[16rem] md:w-[30rem] lg:w-[40rem] 2xl:w-[60rem] md:flex-row flex flex-col-reverse justify-center items-end md:items-start gap-3'>
                <div className='w-[9rem] 2xl:w-[15rem]  h-[10rem] 2xl:h-[14rem]  flex flex-col justify-between items-center'>
                    <Image src={eth} alt='' className='border border-stone-700 w-full h-[7.5rem] 2xl:h-[12rem] rounded-xl' />
                    <p className='text-[.6rem] 2xl:text-[.8rem] fon t-[sansl] underline underline-offset-2 text-left w-full'>read more about security measures</p>
                </div>
                <div className=' flex flex-col justify-center gap-2 items-center w-full md:w-[20rem] lg:w-[30rem]  2xl:w-[40rem]'>
                    <div className='relative h-[7.5rem] md:h-[9rem] lg:h-[12rem] 2xl:h-[16rem] w-full rounded-xl flex justify-center items-center overflow-hidden'>
                        <Image src={coin} alt='' className='w-full h-full' />
                        <Image src={play} alt='' className='absolute  w-[2rem] lg:w-[2.5rem] 2xl:w-[3rem]' />
                    </div>
                    <div className='  w-full flex justify-between items-start'>
                        <div className='w-[7.7rem] h-[8rem] md:w-[9.5rem] md:h-[10rem] lg:h-[12rem] lg:w-[14rem] 2xl:h-[14rem] 2xl:w-[19rem]  rounded-xl  flex flex-col justify-center gap-1 text-right p-2 lg:p-4 bg-white bg-opacity-80 text-black'>
                            <p className='text-[.5rem] md:text-[.58rem] lg:text-[.8rem] font-[sansm] '>we use <span className='font-bold'>multi-factor</span> authentication to ensure only <span className='font-bold'>authorized users</span> can <span className='underline underline-offset-2'>access</span> and <span className='underline'>manage</span> their <span className='font-semibold'>accounts and investments</span></p>
                            <p className='text-[.8rem] md:text-[1.1rem] lg:text-[1.4rem] 2xl:text-[2rem] font-[sanseb] '>Multi-Factor Authentication</p>
                        </div>
                        <div className='border border-white w-[7.7rem] h-[8rem] md:w-[9.5rem] md:h-[10rem] lg:h-[12rem] lg:w-[14rem] 2xl:h-[14rem] 2xl:w-[19rem] text-left p-[.5rem] lg:p-4 rounded-xl flex flex-col justify-center gap-[.1rem]'>
                            <p className='text-[.8rem] md:text-[1rem] lg:text-[1.4rem] 2xl:text-[2rem] font-[sansb] '>Smart Contract Assurance</p>
                            <p className='text-[.48rem] md:text-[.6rem] lg:text-[.8rem] font-[sansl] '>We use <span className='text-amber-500'>blockchain smart contracts</span> to enforce terms automatically, <span className='font-[sansm]'>reduce fraud</span>, & <span className='underline underline-offset-2 '>ensure fund transfers when conditions are met</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security_section