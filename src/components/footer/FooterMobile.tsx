import React from 'react';
import { MdLocalPhone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SubscriptionInput from '../subscriptionInput/SubscriptionInput';

type FooterProps = {
  logo: string;
  phone: string;
  email: string;
  address: string;
  metaTitle: string;
  description: string;
  copyright: string;
  footerIcons: React.ReactNode[] & React.ReactElement[];
};

const FooterMobile: React.FC<FooterProps> = ({
  logo,
  phone,
  email,
  address,
  metaTitle,
  description,
  copyright,
  footerIcons,
}) => {
  return (
    <div>
      <div className="bg-[#131118] w-fit mx-auto">
        <div className="p-[20px]">
          <div>
            <h2 className="text-[35px] font-bold text-white font-inter">
              {logo}
            </h2>
            <ul className="mt-5">
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
          <div className="mt-5">
            <h3 className="font-inter text-[22px] font-medium">{metaTitle}</h3>
            <p className="font-ubuntu text-base font-normal leading-[23px] w-[300px] mt-3">
              {description}
            </p>
            <SubscriptionInput className="mt-5" />
          </div>
        </div>
        <div className="border-t-[1px] border-[rgba(255, 255, 255, 0.20)]">
          <div className="p-5">
            <p className="font-ubuntu text-base font-normal leading-[23px]">
              {copyright}
            </p>
          </div>
          <div className="flex font-[24px] gap-4 cursor-pointer px-5 pb-6">
            {footerIcons.map((Icon, index) =>
              React.isValidElement(Icon) ? (Icon as React.ReactElement) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
