import Image from 'next/image'
import React from 'react'
import eth from '../../public/assets/eth.jpg'

function Security_section() {
    return (
        <div className='w-full h-[30rem] flex justify-between items-start'>
            <div className='w-[8rem] h-[15rem] flex flex-col gap-2'>
                <div>
                    <p className='font-[sansr]'>(02)</p>
                    <p className='text-[.85rem] font-[sansr]'><span className='font-[sansm]'>security</span> and <span className='font-[sansm]'>measures</span></p>
                </div>
                <p className='text-[.55rem] font-[sansl] '>we understand that security is a top concern for our users. which is why we have implemented <span className='font-[sansb]'>state-of-the-art security</span> measures to protect your assets.</p>
            </div>
            <div className='w-[16rem] flex flex-col-reverse justify-center items-end gap-3'>
                <div className='w-[9rem] h-[10rem] flex flex-col justify-between items-center'>
                    <Image src={eth} alt='' className='border border-stone-700 w-full h-[7.5rem] rounded-xl'/>
                    <p className='text-[.6rem] fon t-[sansl] underline underline-offset-2 '>read more about security measures</p>
                </div>
                <div className='flex flex-col justify-center gap-2 items-center w-full'>
                    <div className='border border-stone-500 h-[7.5rem] w-full rounded-xl flex justify-center items-center'>etheriam video</div>
                    <div className=' w-full flex justify-between items-start'>
                        <div className='w-[7.7rem] h-[8rem] rounded-xl  flex flex-col justify-center gap-1 text-right p-2 bg-white bg-opacity-80 text-black'>
                            <p className='text-[.5rem] font-[sansm] '>we use <span className='font-bold'>multi-factor</span> authentication to ensure only <span className='font-bold'>authorized users</span> can <span className='underline underline-offset-2'>access</span> and <span className='underline'>manage</span> their <span className='font-semibold'>accounts and investments</span></p>
                            <p className='text-[.8rem] font-[sanseb] '>Multi-Factor Authentication</p>
                        </div>
                        <div className='border border-white w-[7.7rem] h-[8rem] text-left p-[.5rem] rounded-xl flex flex-col justify-center gap-[.1rem]'>
                            <p className='text-[.8rem] font-[sansb] '>Smart Contract Assurance</p>
                            <p className='text-[.48rem] font-[sansl] '>We use <span className='text-amber-500'>blockchain smart contracts</span> to enforce terms automatically, <span className='font-[sansm]'>reduce fraud</span>, & <span className='underline underline-offset-2 '>ensure fund transfers when conditions are met</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security_section