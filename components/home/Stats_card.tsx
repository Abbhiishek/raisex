import React from 'react'
import Image from 'next/image'
import Profit from '../../public/assets/Profits.png'
import doller from '../../public/assets/doller.png'
import arrowb from '../../public/assets/Right arrow black.png'

function Stats_card() {
    return (
        <div className='rounded-2xl bg-white bg-opacity-15 p-2 2xl:p-4 w-[11rem] h-[8rem] lg:w-[15rem] lg:h-[10rem] xl:w-[20rem] xl:h-[13rem] 2xl:w-[22rem] 2xl:h-[14rem]  flex flex-col justify-around lg:justify-around lg:gap-2 items-center'>
            <div className='flex justify-start gap-4 lg:gap-[2.2rem] items-center text-[.8rem] h-[2.8rem] lg:h-[3.5rem] w-[10rem] lg:w-[14rem] xl:w-[19rem] 2xl:w-[99%] xl:h-[4.4rem] px-3   rounded-xl dark:bg-black bg-white/10 '>
                <Image src={Profit} alt="Profits" className=' w-[1.5rem] h-[1.5rem] xl:w-[2rem] xl:h-[2rem]' />
                <div className='flex justify-center items-center gap-[.6rem]'>
                    <p className='font-[sansm] text-[1.8rem] lg:text-[2.5rem] xl:text-[2.8rem]'>46k</p>
                    <p className='font-[SANSL] text-[.5rem]  lg:text-[.6rem] xl:text-[.7rem]'>Total<br />User</p>
                </div>
            </div>
            <div className=' flex justify-between px-1  items-center h-[3.2rem] lg:h-[3.5rem] xl:h-[4.5rem]  w-[100%] '>
                <Image src={doller} alt='$' className='rounded-xl w-[3rem] h-[3rem]   lg:w-[3.5rem] lg:h-full xl:w-[4.2rem] xl:h-[4rem] bg-black p-[.5rem]' />
                <div className='flex flex-col items-start justify-center'>
                    <p className='font-[sansm] text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]'>15+</p>
                    <p className='font-[sansr] text-[.4rem] px-[.3rem] lg:text-[.5rem] xl:text-[.7rem]'>Investors</p>
                </div>
                <Image src={arrowb} alt='->' className='border w-[2.3rem] lg:w-[2.6rem] xl:w-[3.4rem] bg-white rounded-full p-[.4rem]' />
            </div>
        </div>
    )
}

export default Stats_card