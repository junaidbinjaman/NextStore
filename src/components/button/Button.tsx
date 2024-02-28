import React from 'react';

interface ButtonProps {
  title: string | React.ReactNode;
  className?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ title, className, ...rest }) => {
  return (
    <button
      className={`bg-yellow-700 py-4 px-8 text-white font-ubuntu text-base rounded-full transition-all active:scale-75 ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
