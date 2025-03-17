import React from 'react'
import { cliantsItem } from '../constant/data'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative py-[150px]'>
      <div className="container grid  md:grid-cols-2 items-center relative gap-20 lg:gap-[159px]">
        <div>
          <h1 className=''>Tell a better <br /> brand story</h1>
          <p className='max-w-[490px] mt-5 mb-10 text-bodyFontClr'>Automate the way you search through hashtags and suggested profiles to find results 100x faster.
          </p>
          <Button text={"Request Demo"} />
        </div>

        <div className="max-w-max">
          <img src="/images/hero-banner.png" alt="hero banner" className='img-cover'/>
        </div>
      </div>
      <div className="">
        <img src="/images/hero-bg-img.png" alt="hero bg image" className='md:img-cover h-[50%] object-cover absolute top-0 left-0 -z-10'/>
      </div>

      <div className="container text-center">
        <p className="mt-[127.4px] mb-[65px] font-bold text-[#B2B7BE]">SOME OF OUR TRUSTED CLIENTS</p>
        <div className="flex flex-wrap gap-12 justify-center items-center">
          {cliantsItem.map((item)=>(
            <div className="" key={item.id}>
              <img src={item.imgUrl} alt="client logo" width={122} height={25} />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Hero