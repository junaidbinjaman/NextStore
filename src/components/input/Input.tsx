import React, { useState } from 'react';

interface InputProps {
  label: string;
  id: string;
  type: string;
  labelClass?: string;
  inputClass?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  labelClass = '',
  inputClass = '',
  ...rest
}) => {
  const [value, setValue] = useState<string>('');

  return (
    <p>
      <label
        className={`${labelClass} text-stone-700 font-ubuntu text-lg font-normal`}
        htmlFor={id}
      >
        {label}
      </label>
      <br />
      <input
        className={`${inputClass} rounded-full border border-stone-800 text-stone-700 font-ubuntu text-base py-2.5 px-4`}
        id={id}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        {...rest}
      />
    </p>
  );
};

export default Input;
