import React from 'react';

export interface ButtonProps {
  /**
   * Button color [primary, secondary]
   */
  color?: 'primary' | 'secondary';
  label: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  label,
  onClick,
  size,
  color = 'primary',
}: ButtonProps) => {
  const bgColor = {
    primary: 'bg-indigo-400',
    secondary: 'bg-amber-400',
  };
  return (
    <button
      onClick={onClick}
      className='group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow'
    >
      <div
        className={`absolute inset-0 w-3 ${bgColor[color]} transition-all duration-[250ms] ease-out group-hover:w-full`}
      ></div>
      <span className='relative text-black group-hover:text-white'>
        {label ?? 'Hover me!'}
      </span>
    </button>
  );
};
