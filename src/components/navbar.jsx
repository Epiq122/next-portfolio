'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LINKS */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-2'>Robert</span>
          <span className='w-13 h-8 rounded bg-white text-black flex items-center justify-center'>
            Gleason
          </span>
        </Link>
      </div>
      {/* SOCIALS */}
      <div className='hidden md:flex gap-4 w-1/3 '>
        <Link href='https://github.com/epiq122'>
          <Image src='/github.png' alt='github' width={24} height={24} />
        </Link>
        <Link href='https://www.linkedin.com/in/robert-gleason-222b30178/'>
          <Image src='/linkedin.png' alt='linkedin' width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* Menu button */}
        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='w-10 h-1 bg-white rounded-md' />
          <div className='w-10 h-1 bg-white rounded-md' />
          <div className='w-10 h-1 bg-white rounded-md' />
        </button>
        {/* Menu items */}
        {isOpen && (
          <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
