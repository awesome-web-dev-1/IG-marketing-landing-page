import React, { useState } from 'react'
import { navItems } from '../constant/data'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'

const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <header className="fixed items-center top-0 left-0 z-10 w-full py-6">
      <div className="container flex items-center justify-between">
        <a href="#" className="">
          <img src="/images/Logo.png" alt="logo" width={144} height={30}/>
        </a>
        <ul className='gap-[32px] hidden md:flex'>
          {
            navItems.map((item)=>(
              <li key={item.id}>
                <a href={item.path} className='text-white nav-link'>{item.label}</a>
              </li>
            ))
          }
        </ul>

        {/* Mobile menu */}
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <button className='max-w-max block ml-auto' onClick={()=>setMenuOpen(!menuOpen)}>
            <RiCloseLine size={30} />
          </button>
          <ul className='gap-[32px] grid mt-[30px]'>
            {
              navItems.map((item)=>(
                <li key={item.id}>
                  <a href={item.path} className='nav-link' onClick={()=>setMenuOpen(!menuOpen)}>{item.label}</a>
                </li>
              ))
            }
          </ul>
          <a href="#" className='bg-ligth py-3 px-5 rounded-[21px] text-[#FFFAF9] hover:ring-1 hover:ring-[#fff5] transition-colors'>Request Demon</a>
        </nav>
        <button className='text-white md:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
          <RiMenuLine size={30} />
        </button>
        <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={()=>setMenuOpen(!menuOpen)}></div>
        <a href="#" className='bg-ligth py-3 px-5 rounded-[21px] text-[#FFFAF9] hover:ring-1 hover:ring-[#fff5] transition-colors hidden md:block'>Request Demon</a>
      </div>
    </header>
  )
}

export default Header