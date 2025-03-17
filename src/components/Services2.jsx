import { RiArrowRightCircleLine } from '@remixicon/react'
import { services2Items } from '../constant/data'

const Services2 = () => {
  return (
    <section className='pt-[90px]'>
      <div className="container">
        <h2>Solutions for every need</h2>
        <p className='max-w-[551px] mx-auto text-bodyFontClr text-center mt-[10px]'>Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</p>


        <ul className='mt-20 grid gap-[25px] md:grid-cols-3 sm:grid-cols-2'>
          {services2Items.map((item)=>(
            <li key={item.id} className='relative'>
                <div className="">
                  <img src={item.imgUrl} alt="person image" className='w-full' />
                </div>
                <div className="bg-white absolutebottom-0 left-0  -translate-y-1/2 z-10 py-[22px] px-[25px] max-w-max">
                  <p>{item.name}</p>
                  <div className="flex gap-8 mt-5">
                    <div className="">
                      <h4 className='text-[24px]'>{item.followers}</h4>
                      <p className='text-[#ADADBA] text-[10px] font-medium mt-2'>{item.followersText}</p>
                    </div>
                    <div className="">
                      <h4 className='text-[24px]'>{item.engagement}</h4>
                      <p className='text-[#ADADBA] text-[10px] font-medium mt-2'>{item.engagementText}</p>
                    </div>
                  </div>
                  <a href="" className='mt-[27px] mb-[24px] flex gap-[6px] text-purple-600 hover:text-purple-800 transition-colors'>
                    {item.link}
                    <RiArrowRightCircleLine />
                  </a>
                </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Services2