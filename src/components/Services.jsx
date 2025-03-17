import { RiArrowRightCircleLine } from '@remixicon/react'

const Services = () => {
  return (
    <section>
      <div className="container flex flex-col gap-[97px] md:flex-row items-center justify-center">
            <div className="">
                <p className="text-[#DE2879] uppercase font-semibold">services</p>
                <h3 className="mt-[8px] mb-[14px]">Managed services</h3>
                <p className="max-w-[354px] text-bodyFontClr">
                Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling
                </p>
                <a href="" className="mt-[30px] flex items-center gap-3">
                Learn More
                <RiArrowRightCircleLine />
                </a>
            </div>

            <div className="">
                <img src="/images/banner-3.png" alt="banner" className='w-full' />
            </div>

        </div>
    </section>
  )
}

export default Services