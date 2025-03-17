import { RiFacebookLine, RiInstagramLine, RiYoutubeFill } from '@remixicon/react'
import React from 'react'
import { navItems } from '../constant/data'

const Footer = () => {
  return (
    <footer className='pt-[75px]'>
      <div className="container">
        <div className="flex justify-between flex-wrap gap-8 mb-10 items-center">
          <a href="" className="logo max-w-max">
            <img src="/images/footer-brand.png" alt="footer logo" />
          </a>
          <ul className='flex gap-8'>
            {navItems.map((item)=>(
              <li key={item.id}>
                <a href="#">{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5">
            <a href="">
              <RiFacebookLine />
            </a>
            <a href="">
              <RiInstagramLine />
            </a>
            <a href="">
              <RiYoutubeFill />
            </a>
          </div>

        </div>

        <div className="w-full h-[2px] bg-neutral-200  "></div>
        <div className="my-[30px] text-center">
          <p>Copyright &copy; <span className="date"></span> InstaPop</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer