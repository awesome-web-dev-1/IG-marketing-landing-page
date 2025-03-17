import { RiArrowRightCircleLine } from '@remixicon/react'

const Feature2 = () => {
  return (
    <section className='pt-10'>
        <div className="container flex flex-col gap-[145px] md:flex-row items-center justify-center">
            <div className="md:order-1">
                <p className="text-yellow-500 uppercase font-semibold">Community</p>
                <h3 className="mt-[8px] mb-[14px]">Community marketing</h3>
                <p className="max-w-[340px] w-full text-bodyFontClr">
                Bring your relationships to new heights with our community product. Discover your biggest enthusiasts 
                </p>
                <a href="" className="mt-[30px] flex items-center gap-3">
                Learn More
                <RiArrowRightCircleLine />
                </a>
            </div>

            <div className="">
                <img src="/images/banner-2.png" alt="banner" className='w-full' />
            </div>

        </div>
    </section>
  )
}

export default Feature2