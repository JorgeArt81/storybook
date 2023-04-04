import React from 'react';

export interface AlertProps {
  backgroundColor?: 'blue' | 'red' | 'green' | 'orange';
  message?: string;
}

export const Alert = ({ backgroundColor: color = 'blue', message }: AlertProps) => {
  return (
    <div className='min-h-screen p-10 pt-32 h-100'>
      <div className='block w-full'>
        <div
          className={`font-regular relative mb-4 block w-full rounded-lg bg-${color}-500 p-4 text-base leading-5 text-white opacity-100`}
        >
          {message ?? 'An info alert for showing message.'}
        </div>
      </div>
      <div className='w-full md:w-7/12 pt-5 px-4 mb-8 mx-auto text-center'>
        <div className='text-sm text-gray-700 py-1'>
          This components requires
          <a
            href='https://www.material-tailwind.com?ref=tailwindcomponents'
            className='text-gray-700 font-semibold'
            target='_blank'
          >
            Material Tailwind CSS & JS
          </a>
          for classes. <br />
          <br />A component by
          <a
            href='https://www.creative-tim.com?ref=tailwindcomponents'
            className='text-gray-700 font-semibold'
            target='_blank'
          >
            Creative Tim
          </a>
          .
        </div>
      </div>
    </div>
  );
};
