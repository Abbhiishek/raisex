import Image from 'next/image'
import time from '../../public/assets/time.png'
import eth from '../../public/assets/eth.jpg'
function DemoVideo_card() {
  return (
    <div className='font-[hand] border-2 border-stone-700 flex justify-between items-center h-[8rem] w-[13.5rem] lg:h-[10rem] lg:w-[21rem] xl:w-[30rem] xl:h-[13rem] 2xl:h-[14rem] rounded-2xl overflow-clip p-[.05rem] '>
        <div className=' py-[.5rem] px-[.1rem]  w-[50%] h-[100%] flex flex-col justify-start gap-2 items-start '>
            <div className='border  lg:border-[1.5px] lg:ml-2 w-[85%] flex justify-center gap-1 lg:gap-2 items-center text-[.7rem] p-[.2rem] lg:p-[.5rem] xl:p-[.7rem] rounded-full border-stone-700'>
                <Image src={time} alt='' className='w-[.6rem] lg:w-[.8rem] xl:w-[1rem]'/>
                <p className="font-[sansl] text-[.5rem] lg:text-[.7rem] xl:text-[.8rem]">4m 35s</p>
            </div>
            <div className='flex flex-col gap-[.4rem] lg:ml-2'>
                <p className='font-[sansr] lg:font-[sansb] text-[.9rem] lg:text-[1.3rem] xl:text-[1.5rem]'>Watch demo<br />video</p>
                <p className='font-[sansl] text-[.41rem] lg:text-[.6rem] xl:text-[.8rem]'>see this video to get a idea about our platform</p>
            </div>
        </div>
        <div className='border bordr-white w-[50%] h-[100%] border-stone-800 rounded-xl overflow-clip'>
        <Image src={eth} alt='' className='w-fit h-full bg-center opacity-50'/>
        </div>
    </div>
  )
}

export default DemoVideo_card