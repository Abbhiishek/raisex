import Image from 'next/image'
import React from 'react'
import rightarroww from '../../public/assets/Right arrow white.png'
import { ThemeToggler } from '../shared/ThemeToggler'
// import rightarroww from '../../public/assets/'

// import logo from '../../public/assets/raisex_logo.svg'

function Navbar() {
    return (
        <div className='border border-white flex justify-between items-center w-full h-[3rem] '>
            <div className='flex justify-center items-center'>
                <div className='flex justify-start items-center rounded-full bg-black shadow-[0_15px_14px_-18px_rgba(0,0,0,0.3)] shadow-slate-50 px-3 gap-2 w-[6rem] h-[2.5rem] '>
                    <p>@</p>
                    {/* <Image src={logo} alt='' className=''/> */}
                    <p>Raisx</p>
                </div>
                {/* <div className='border border-white w-[5.2rem] h-[2.5rem] flex justify-center items-center rounded-full font-[sansr]'>FAQ</div> */}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <ThemeToggler />
                <div className='border border-white flex justify-center items-center'>
                    <p>Login</p>
                    <Image src={rightarroww} alt='' className='w-[2rem]' />
                </div>
            </div>
        </div>
    )
}

export default Navbar