import React from 'react';

type ButtonProps = {
  title: string | React.ReactNode;
  className?: string;
  click?: () => void;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ title, className, click, ...rest }) => {
  const handleOnClick = () => {
    if (click) {
      click();
    }
  }

  return (
    <button
      className={`bg-yellow-700 py-4 px-8 text-white font-ubuntu text-base rounded-full transition-all active:scale-75 ${className}`}
      onClick={handleOnClick}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
