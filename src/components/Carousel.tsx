import React from 'react';

interface CarouselProps {
  images: string[];
  labelButtonNext: string;
  labelButtonPrev: string;
}

const demoImages = [
  'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg',
];

export const Carousel = ({
  labelButtonNext,
  labelButtonPrev,
  images = demoImages,
}: CarouselProps) => {
  return (
    <div id='carouselExample' className='carousel slide'>
      <div className='carousel-inner'>
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image} className='d-block w-100' alt='...' />
          </div>
        ))}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExample'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>{labelButtonPrev ?? 'Previous'}</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExample'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>{labelButtonNext ?? 'Next'}</span>
      </button>
    </div>
  );
};
