import { RiArrowRightCircleLine } from '@remixicon/react'

const Features = () => {
  return (
    <section className='section'>
      <div className="container">
        <h2 className="mb-[10px] text-balance">Solutions for every need</h2>
        <p className="text-center text-bodyFontClr max-w-[551px] mx-auto mb-[85px]">Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</p>

        <div className="flex flex-col gap-[140px] md:flex-row items-center justify-center">
          <div className="">
            <p className="text-purple-600 uppercase font-semibold">Influencer</p>
            <h3 className="mt-[8px] mb-[14px]">Influencer marketing</h3>
            <p className="max-w-[340px] w-full text-bodyFontClr">
            Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs
            </p>
            <a href="" className="mt-[30px] flex items-center gap-3">
              Learn More
              <RiArrowRightCircleLine />
            </a>
          </div>
          <div className="">
            <img src="/images/services-card-banner.png" alt="banner" width={240} height={282}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features