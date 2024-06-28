import React from 'react'
import Image from 'next/image'
import rightarrowb from '../../public/assets/Right arrow black.png'
import underline from '../../public/assets/underline.png'

function Title_card() {
return (
    <div className=' h-fit w-full flex  flex-col justify-center items-start gap-2 '>
        <div className=''>
            <div className='h-[4rem] w-full flex justify-start gap-4 items-baseline'>
                <p className=' font-[sansm] text-[2.5rem]'>Experience</p>
                <div className=' flex justify-center items-center gap-2'>
                    <div className='flex'>
                        <div className=' bg-white w-6 h-6 rounded-full '></div>
                        <div className=' bg-white w-6 h-6 rounded-full '></div>
                        <div className=' bg-white w-6 h-6 rounded-full '></div>
                    </div>
                    <p className='font-[sansl] text-[.4rem]'>Welcome to our<br/>Fundrasing platform</p>
                </div>
            </div>
            <div className='p-1  w-full h-[5.5rem] flex justify-start items-center gap-4'>
                <div className='relative'>
                    <p className='font-[handstyle] text-[3.4rem]'>the ideas</p>
                    <Image src={underline} alt='' className='absolute bottom-[-.2rem] right-[-.3rem] w-[5.5rem]' />
                </div>
                <p className='font-[sansm] text-[3rem]'>of Future.</p>
            </div>
        </div>
        
        <div className=' flex flex-col justify-center items-start gap-4'>
            <p className='font-[sansr] text-[.8rem]  w-[18rem]'>Post your ideas, share updates, engage with the communities and attract angel investors all in one place.</p>
            <div className='flex justify-center items-center'>
                <p className='bg-white text-black px-6 py-1 rounded-full '>Start now</p>
                <Image src={rightarrowb} alt='->' className='bg-white w-[2rem] rounded-full p-[.35rem]'/>
            </div>
        </div>
    </div>
)
}

export default Title_card