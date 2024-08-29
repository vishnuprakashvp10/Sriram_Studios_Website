import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import Image1 from "../../assets/Hero/lenses-hero.jpg";

const ImageList = [
  {
    id: 1,
    img: Image1,
  },

];

const Paintingserviceshero = ({ handleOrderPopup }) => {
  return (
    <div className='md:max-w-[1400px] md:h-[780px] max-w-[1300px] h-[465px] w-full m-auto py-24 px-4 relative group '>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
        style={{ backgroundImage: `url(${ImageList[0].img})` }}
      >            
      </div>
      <div className='flex top-10 justify-center py-2'>
        {ImageList.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
          >
            <RxDotFilled style={{ color: 'white' }} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center w-[900px]">
          <h1 className="text-3xl text-primary font-bold">
          CAMERA LENSES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Paintingserviceshero;
