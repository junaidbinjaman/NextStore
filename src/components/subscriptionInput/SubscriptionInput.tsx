import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';

type SubscriptionInputProps = {
  color?: string;
  backgroundColor?: string;
  placeholder?: string;
  className?: string
};

const SubscriptionInput: React.FC<SubscriptionInputProps> = ({
  color = 'white',
  backgroundColor = 'black',
  placeholder = 'Your Email',
  className
}) => {
  return (
    <div
      className={`flex items-center border-[1px] border-${color} bg-${backgroundColor} rounded-[10px] py-[13px] px-4 max-w-72 gap-3 ${className}`}
    >
      <FaRegEnvelope className={`text-[24px] text-${color}`} />
      <div className="flex items-center gap-[10px]">
        <input
          className={`text-base font-normal leading-[23px] font-ubuntu bg-${backgroundColor} text-white focus:outline-none focus:border-transparent`}
          type="email"
          placeholder={placeholder}
        />
        <FaArrowRightLong
          className={`text-${color} active:scale-75 cursor-pointer transition-all`}
        />
      </div>
    </div>
  );
};

export default SubscriptionInput;
