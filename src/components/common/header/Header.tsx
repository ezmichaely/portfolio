"use client"

// import { motion, useCycle } from "framer-motion";
import { useState, useEffect } from 'react';
import { MenuToggle } from "@/components";
import { Link } from 'react-scroll';
import { useMediaQuery } from "@/hooks/useMediaQuery";
import './header.css'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const mediaQuery = useMediaQuery(1024);

  const [isOpen, setIsOpen] = useState(false);
  const [headerChange, setHeaderChange] = useState('shadow-none');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) { setHeaderChange('shadow-lg'); }
      else { setHeaderChange('shadow-none'); }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${headerChange} header bg-moon/50 backdrop-blur-lg`}>
      <div className="container flex justify-between items-center gap-8">
        <div className={`brand`}>
          {`<ezmichaely />`}
        </div>

        <div className='navbar'>
          <nav className='navbarList'>
            <Link to="home" activeClass="navLinksActive"
              spy={true} smooth={true} offset={-76}
              duration={500} className={`navLinks`}>
              HOME
            </Link>

            <Link to="about" activeClass="navLinksActive"
              spy={true} smooth={true} offset={0}
              duration={500} className={`navLinks`}>
              ABOUT
            </Link>

            <Link to="projects" activeClass="navLinksActive"
              spy={true} smooth={true} offset={0}
              duration={500} className={`navLinks`}>
              PROJECTS
            </Link>

            <Link to="contact" activeClass="navLinksActive"
              spy={true} smooth={true} offset={0}
              duration={500} className={`navLinks`}>
              CONTACT
            </Link>
          </nav>

          <div className="navbarDownload">
            <a href="/EZ_MICHAEL_YUCOR-CV.pdf" target="_blank"
              className={`resumeDownload`}>
              RESUME / CV
            </a>
          </div>

        </div>

        {!mediaQuery && 
          <Sheet>
            <SheetTrigger asChild>
              <button className='text-white'>Open</button>
              {/* <MenuToggle toggle={(prev: any) => setIsOpen(!prev)} /> */}
            </SheetTrigger>

            {/* //ignore ts-error */}
            <SheetContent side="top" className='h-screen container mx-auto mt-4'>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        }
      </div>
    </header>
  )
}

export default Header