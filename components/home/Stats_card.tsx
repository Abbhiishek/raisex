import React from 'react'
import Image from 'next/image'
import Profit from '../../public/assets/Profits.png'
import doller from '../../public/assets/doller.png'
import arrowb from '../../public/assets/Right arrow black.png'

function Stats_card() {
    return (
        <div className='rounded-2xl bg-white bg-opacity-15 p-2 w-[11rem] h-[8rem] flex flex-col justify-around items-center'>
            <div className='flex justify-start gap-4 items-center text-[.8rem] h-[2.8rem] w-[10rem] px-3   rounded-xl dark:bg-black bg-white/10 '>
                <Image src={Profit} alt="Profits" className=' w-[1.5rem] h-[1.5rem]' />
                <div className='flex justify-center items-center gap-[.6rem]'>
                    <p className='font-[sansm] text-[1.8rem]'>46k</p>
                    <p className='font-[SANSL] text-[.5rem] '>Total<br />User</p>
                </div>
            </div>
            <div className=' flex justify-between  p-1 items-center h-[3.2rem] w-[100%] '>
                <Image src={doller} alt='$' className='rounded-xl w-[3rem] h-[3rem] bg-black p-[.5rem]' />
                <div className='flex flex-col items-start justify-center'>
                    <p className='font-[sansm] text-[1.5rem]'>15+</p>
                    <p className='font-[sansr] text-[.4rem] px-[.3rem]'>Investors</p>
                </div>
                <Image src={arrowb} alt='->' className='border w-[2.3rem] bg-white rounded-full p-[.4rem]' />
            </div>
        </div>
    )
}

export default Stats_card