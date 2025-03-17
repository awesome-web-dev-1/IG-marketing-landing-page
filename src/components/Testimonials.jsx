import React from 'react'
import { testimonialsItems } from '../constant/data'
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react'

const Testimonials = () => {
  return (
    <section className='py-[70px]'>
      <div className="container">
        <h2 className='mb-[10px]'>Happy Clients</h2>
        <p className='text-center max-w-[551px] mx-auto mb-[69px] text-bodyFontClr'>The Marketing Accountability Standards Board (MASB) endorses the definitions, purposes, and constructs of classes</p>
        <div className="grid md:grid-cols-2 gap-[154px]">
        <div className="">
          <div className="">
            <img src="/images/profile icon.png" alt="" />
          </div>
          <ul className='flex gap-5 max-w-[477px] overflow-x-hidden'>
            {testimonialsItems.map((item)=>(
              <li key={item.id} className='min-w-full'>
                <p className='max-w-[477px] text-bodyFontClr'>{item.text}</p>
                <div className="mt-[55px]">
                  <div className="">
                    <h4 className='text-[25px]'>{item.author}</h4>
                    <p className='text-bodyFontClr'>{item.job}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 mt-8">
            <button className='border-2 border-neutral-300 p-1'>
              <RiArrowLeftSLine />
            </button>
            <button className='border-2 border-neutral-300 p-1'>
              <RiArrowRightSLine />
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img src="/images/testi banner.png" alt="" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials