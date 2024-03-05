'use client';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import Button from '../button/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  topbarLeft: string;
  topbarRight1: string;
  topbarRight2: string;
  topbarRight3: string;
  logo: string;
  navbar: {
    label: string;
    link: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({
  topbarLeft,
  topbarRight1,
  topbarRight2,
  topbarRight3,
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
      <div className="topbar bg-stone-200">
        <div className="max-w-6xl text-zinc-900 flex items-center py-2 px-5 mx-auto">
          <div className="left">
            <small>{topbarLeft}</small>
          </div>
          <div className="right flex items-center gap-5 ml-auto">
            <small className="flex items-center gap-2">
              <FaRegClock /> {topbarRight1}
            </small>
            <small className="flex items-center gap-2">
              <FiPhoneCall /> {topbarRight2}
            </small>
            <small className="flex items-center gap-2">
              <IoLocationOutline /> {topbarRight3}
            </small>
          </div>
        </div>
      </div>
      <div className="main-header bg-stone-800">
        <div className="flex items-center justify-between p-5 mx-auto max-w-6xl">
          <div className="logo font-inter font-bold text-4xl text-white">
            {logo}
          </div>
          <nav className="navbar">
            <ul className="flex items-center gap-5 text-white font-medium text-base">
              {navbar.map((element, index) => (
                <li className='transition-all active:scale-75' key={index}>
                  <Link
                    className={`transition-all cursor-pointer ${pathname === element.link ? 'text-stone-400' : 'white'}`}
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
              <li>
                <Button
                  title={<LuShoppingCart />}
                  className="!p-3"
                  click={handleCartClick}
                />
              </li>
              <li>
                <Button
                  title={<FaRegUser />}
                  className="!p-3"
                  click={handleAccountClick}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
