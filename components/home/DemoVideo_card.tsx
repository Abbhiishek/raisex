import Image from 'next/image'
import time from '../../public/assets/time.png'
import eth from '../../public/assets/eth.jpg'
function DemoVideo_card() {
  return (
    <div className='font-[hand] border-2 border-stone-700 flex justify-between items-center h-[8rem] w-[13.5rem] rounded-2xl overflow-clip p-[.05rem] '>
        <div className=' py-[.5rem] px-[.25rem] w-[50%] h-[100%] flex flex-col justify-start gap-2 items-start '>
            <div className='border w-[85%] flex justify-center gap-1 items-center text-[.7rem] p-[.2rem] rounded-full border-stone-700'>
                <Image src={time} alt='' className='w-[.6rem]'/>
                <p className="font-[sansl] text-[.5rem]">4m 35s</p>
            </div>
            <div className='flex flex-col gap-[.4rem]'>
                <p className='font-[sansr] text-[1rem]'>Watch demo<br />video</p>
                <p className='font-[sansl] text-[.41rem]'>see this video to get a idea about our platform</p>
            </div>
        </div>
        <div className='border bordr-white w-[50%] h-[100%] border-stone-800 rounded-xl overflow-clip'>
        <Image src={eth} alt='' className='w-fit h-full bg-center opacity-50'/>
        </div>
    </div>
  )
}

export default DemoVideo_card