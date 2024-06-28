import Image from 'next/image'
import React from 'react'
import rightarrowb from '../../public/assets/Right arrow black.png'

function Button() {
    return (
    <div className='border border-white flex justify-between items-center w-[8rem] p-1  rounded-full'>
                <p className='w-[8rem] text-center text-[.9rem]'>Read More</p>
                <Image src={rightarrowb} alt='' className='bg-white w-[1.5rem] h-[1.5rem] rounded-full p-[.3rem]'/>
            </div>
    )
}

export default Button