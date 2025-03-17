import React from 'react'
import { statusItem } from '../constant/data'

const Countdown = () => {
  return (
    <section className='bg-bgClr py-[120px]'>
      <div className="container">
        <h2 className='text-white max-w-[734px] mx-auto'>Search through more than 11 million social media profiles</h2>
        <p className='text-[#7B9292] text-center mt-[18px] max-w-[562px] mx-auto'>Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports provide you with the metrics</p>


        <ul className='mt-[55px] md:mt-[110px] flex flex-wrap justify-center gap-[90px] md:gap-[140px]'>
          {statusItem.map((item)=>(
            <li key={item.id}>
              <h2 className='text-white text-left'>{item.num}</h2>
              <p className='text-[#7B9292]'>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Countdown