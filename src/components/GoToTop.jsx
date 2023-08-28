import React from "react";

function GoToTop() {
  return (
    <div className='p-2 mb-16 border-b border-gray-300 flex justify-end'>
      <a
        title='Go to Start'
        href='#top'
        className='p-2 rounded-full hover:bg-neutral-200'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 15.75l7.5-7.5 7.5 7.5'
          />
        </svg>
      </a>
    </div>
  );
}

export default GoToTop;
