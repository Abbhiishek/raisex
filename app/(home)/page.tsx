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
import Footer from '@/components/home/Footer'
import carasouel from '../../public/assets/carasouel.png'




export default function Home() {
  return (
    <>
      <Navbar />
      <div className='w-full flex flex-col justify-start xl:justify-between items-center md:flex-row md:items-start gap-2'>
        <div className='w-full md:w-[60%] xl:w-[65%]'>
          <div className='flex justify-start gap-2 md:gap-4 2xl:gap-[5rem] w-full items-center'>
            <Status_card />
            <DemoVideo_card />
          </div>
          <Title_card />
        </div>
        {/* <VerticalCarousel items={items} /> */}
        <div className='h-[30rem] md:h-[28rem] xl:h-[34rem] 2xl:h-[46rem] w-[24rem] xl:w-[26rem] 2xl:w-[32rem] rounded-2xl 2xl:rounded-3xl overflow-clip'>
          <Image src={carasouel} alt='' className='h-full w-full' />
        </div>
      </div>

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
      <div className='w-full flex flex-col justify-center items-center gap-[10rem] container mx-auto'>
        <About_section />
        <Security_section />
        <Features_section />
      </div>
      <Footer />
    </>
  );
}
