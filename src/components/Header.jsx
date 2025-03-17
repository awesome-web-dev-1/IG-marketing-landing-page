import React, { useEffect, useRef, useState } from "react";
import { navItems } from "../constant/data";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import logo from '/images/Logo.png'
import blackLogo from '/images/footer-brand.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? "active" : ""} transition-transform duration-500 ease-in-out`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="">
          {isScrolled ?

          <img src={blackLogo} alt="logo" width={144} height={30} /> :
          <img src={logo} alt="logo" width={144} height={30} />
          }
        </a>
        <ul className="gap-[32px] hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.path} className={isScrolled ? "after:bg-neutral-900" : "text-inherit nav-link"}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <button
            className="max-w-max block ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RiCloseLine size={30} />
          </button>
          <ul className="gap-[32px] grid mt-[30px]">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="nav-link"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="bg-neutral-300/50 py-3 px-5 rounded-[21px] text-[#333] hover:ring-1 hover:ring-neutral-800 transition-colors inline-block mt-auto max-w-max"
          >
            Request Demo
          </a>
        </nav>
        <button
          className={`text-white md:hidden ${isScrolled ? "text-neutral-900" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RiMenuLine size={30} />
        </button>
        <div
          className={`overlay ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></div>
        <a
          href="#"
          className={isScrolled ? "bg-neutral-300/50 py-3 px-5 rounded-[21px] text-[#333] hover:ring-1 hover:ring-neutral-800 transition-colors hidden md:block" : "bg-ligth py-3 px-5 rounded-[21px] text-[#FFFAF9] hover:ring-1 hover:ring-[#fff5] transition-colors hidden md:block"}
        >
          Request Demo
        </a>
      </div>
    </header>
  );
};

export default Header;
