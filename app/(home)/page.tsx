"use client"

import Status_card from '../../components/home/Stats_card'
import DemoVideo_card from '../../components/home/DemoVideo_card'
import Title_card from '../../components/home/Title_card'
import About_section from '../../components/home/About_section'
import Token from '../../public/assets/Token.png'
import Image from 'next/image'
import Security_section from '../../components/home/Security_section'
import Features_section from '@/components/home/Features_section'
import Navbar from '@/components/home/Navbar'
// import VerticalCarousel from '../../components/home/VerticalCarousel';



export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex justify-between w-full items-center'>
        <Status_card />
        <DemoVideo_card />
      </div>
      <Title_card />
      {/* <VerticalCarousel items={items} /> */}
      <div className='h-[30rem] w-[24rem] border border-white rounded-xl'></div>

      <div className='w-full h-[2.5rem] flex justify-between items-center '>
        <div className='border border-white w-[7rem] h-[2rem] rounded-full flex justify-start px-3 items-center'>
          <Image src={Token} alt='' className='w-[1rem] p-[.1rem]' />
          <p className='font-[sansl] text-[.7rem]'>Etheriam</p>
        </div>
        <div className='flex'>
          <div className='border border-white w-[5rem] h-[2rem] rounded-full'></div>
          <div className='border border-white w-[5rem] h-[2rem] rounded-full'></div>
        </div>
      </div>
      <About_section />
      <Security_section />
      <Features_section />
    </>
  );
}
