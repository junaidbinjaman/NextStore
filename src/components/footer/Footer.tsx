import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdLocalPhone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SubscriptionInput from '../subscriptionInput/SubscriptionInput';

type FooterProps = {
  logo: string;
  phone: string;
  email: string;
  address: string;
  navHeading: string;
  footerNav: {
    label: string;
    link: string;
  }[];
  metaTitle: string;
  description: string;
  paymentIcons: {
    alt: string;
    src: string;
  }[];
  copyright: string;
  footerIcons: React.ReactNode[] & React.ReactElement[];
};

const Footer: React.FC<FooterProps> = ({
  logo,
  phone,
  email,
  address,
  navHeading,
  footerNav,
  metaTitle,
  description,
  paymentIcons,
  copyright,
  footerIcons,
}) => {
  return (
    <div className="bg-[#131118]">
      <div className="bg-[#131118] w-fit mx-auto">
        <div className="flex gap-28 p-[20px]">
          <div>
            <h2 className="text-[35px] font-bold text-white font-inter">
              {logo}
            </h2>
            <ul className='text-white'>
              <li className="text-[18px] font-ubuntu font-normal mt-[10px]">
                <MdLocalPhone className="text-[24px] inline mr-[10px]" />{' '}
                {phone}
              </li>
              <li className="text-[18px] font-ubuntu font-normal mt-[10px]">
                <HiOutlineMail className="text-[24px] inline mr-[10px]" />{' '}
                {email}
              </li>
              <li className="text-[18px] font-ubuntu font-normal mt-[10px] w-[290px]">
                <FaMapMarkerAlt className="text-[24px] inline mr-[10px]" />{' '}
                {address}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-inter text-[22px] text-white font-medium">{navHeading}</h3>
            <ul>
              {footerNav.map((menu, index) => (
                <li
                  className="text-[18px] font-ubuntu font-normal mt-[10px] leading-6 text-white"
                  key={index}
                >
                  <Link href={menu.link}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-inter text-[22px] font-medium text-white">{metaTitle}</h3>
            <p className="font-ubuntu text-base font-normal text-white leading-[23px] w-[365px] mt-3">
              {description}
            </p>
            <SubscriptionInput className="mt-5" />
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] border-[rgba(255, 255, 255, 0.20)]">
          <div className="flex items-center gap-[10px] p-5">
            {paymentIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={36}
                height={24}
              />
            ))}
          </div>
          <div className="p-5">
            <p className="font-ubuntu text-base font-normal leading-[23px] text-white">
              {copyright}
            </p>
          </div>
          <div className="flex font-[24px] gap-4 text-white cursor-pointer p-5">
            {footerIcons.map((Icon, index) =>
              React.isValidElement(Icon) ? (Icon as React.ReactElement) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
