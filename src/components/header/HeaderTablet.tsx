'use client';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import Button from '../button/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  topbarLeft: string;
  topbarRight1: string;
  logo: string;
  navbar: {
    label: string;
    link: string;
  }[];
}

const HeaderTablet: React.FC<HeaderProps> = ({
  topbarLeft,
  topbarRight1,
  logo,
  navbar,
}) => {
  const pathname = usePathname();

  const handleCartClick = () => {
    console.log('Cart Icon is clicked');
  };

  const handleAccountClick = () => {
    console.log('Account Icon is licked');
  };
  return (
    <div className="font-ubuntu">
      <div className="topbar bg-stone-200 text-zinc-900 flex items-center py-2 px-5">
        <div className="left">
          <small>{topbarLeft}</small>
        </div>
        <div className="right flex items-center gap-5 ml-auto">
          <small className="flex items-center gap-2">
            <FaRegClock /> {topbarRight1}
          </small>
        </div>
      </div>
      <div className="main-header p-5 bg-stone-800">
        <div className="max-w-3xl flex items-center justify-between mx-auto">
          <div className="logo font-inter font-bold text-4xl text-white">
            {logo}
          </div>
          <nav className="navbar">
            <ul className="flex items-center gap-5 text-white font-medium text-base">
              {navbar.map((element, index) => (
                <li
                  key={index}
                  className="transition-all cursor-pointer active:scale-75"
                >
                  <Link
                    className={`${pathname === element.link ? 'text-stone-400' : 'white'}`}
                    href={element.link}
                  >
                    {element.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="action">
            <ul className="flex items-center gap-6">
              <li onClick={handleCartClick}>
                <Button title={<LuShoppingCart />} className="!p-3" />
              </li>
              <li onClick={handleAccountClick}>
                <Button title={<FaRegUser />} className="!p-3" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTablet;
