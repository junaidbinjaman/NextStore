import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import Button from '../button/Button';
import Link from 'next/link';

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
  cartHandler: () => void;
  accountHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({
  topbarLeft,
  topbarRight1,
  topbarRight2,
  topbarRight3,
  logo,
  navbar,
  cartHandler,
  accountHandler,
}) => {
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
          <small className="flex items-center gap-2">
            <FiPhoneCall /> {topbarRight2}
          </small>
          <small className="flex items-center gap-2">
            <IoLocationOutline /> {topbarRight3}
          </small>
        </div>
      </div>
      <div className="main-header flex items-center justify-between p-5 bg-stone-800">
        <div className="logo font-inter font-bold text-4xl ">{logo}</div>
        <nav className="navbar">
          <ul className="flex items-center gap-5 text-white font-medium text-base">
            {navbar.map((element, index) => (
              <li
                key={index}
                className="transition-all cursor-pointer active:scale-75"
              >
                <Link href={element.link}>{element.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="action">
          <ul className="flex items-center gap-6">
            <li onClick={cartHandler}>
              <Button title={<LuShoppingCart />} className="!p-3" />
            </li>
            <li onClick={accountHandler}>
              <Button title={<FaRegUser />} className="!p-3" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
