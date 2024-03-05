'use client';
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IoMdListBox } from 'react-icons/io';
import { IoReturnDownBack } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type HeaderProps = {
  topbarLeft: string;
  logo: string;
  navbar: {
    label: string;
    link: string;
  }[];
};

const HeaderMobile: React.FC<HeaderProps> = ({ topbarLeft, logo, navbar }) => {
  const [nav, setNav] = useState<boolean>(false);
  const pathname = usePathname();

  const displayNav = () => {
    setNav(true);
  };

  const hideNav = () => {
    setNav(false);
  };

  return (
    <div className="font-ubuntu">
      <div className="topbar bg-stone-200 text-zinc-900 text-center py-2 px-5">
        <small>{topbarLeft}</small>
      </div>

      <div className="main-header flex items-center justify-between p-4 bg-stone-800">
        <div className="logo font-inter font-bold text-4xl text-white">
          {logo}
        </div>
        <div>
          <IoMdMenu
            onClick={displayNav}
            className="text-4xl cursor-pointer active:scale-75 transition-all text-yellow-700"
          />
        </div>
      </div>

      <div
        className={`w-full h-full p-5 bg-white z-30 text-zinc-900 fixed top-0 bottom-0 left-0 right-0 transition-transform duration-500 ease-in-out ${nav ? 'opacity-100 translate-x-0' : '-translate-x-full'}`}
      >
        <ul>
          {navbar.map((element, index) => (
            <li key={index} className="pb-2">
              <Link
                href={element.link}
                className={`flex items-center gap-2 ${pathname === element.link ? 'text-red-600' : 'white'}`}
              >
                <IoMdListBox className="text-xl text-yellow-700" />
                {element.label}
              </Link>
            </li>
          ))}
        </ul>

        <IoReturnDownBack
          onClick={hideNav}
          className="text-4xl cursor-pointer active:scale-75 transition-all"
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
