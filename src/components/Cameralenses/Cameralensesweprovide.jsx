import React, { useState } from 'react';

const Cameralensesweprovide = ({ reverse, img, title, description2, description, handleOrderPopup }) => {
  return (
    
    <section>
      
      <main className="text-white">
        
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] mt-20 mb-10">
          <div className="grid grid-cols-1  items-center gap-4 md:grid-cols-2 ">
            <div
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="md:text-3xl text-2xl mx-auto font-bold text-primary xl:text-4xl">{title}</h1>
              <p className="py-2 max-w-[600px] text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base">
              {description}
              </p>
              <div>
              </div>
              <div className="mx-auto space-x-4">
              <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r  from-primary to-secondary hover:scale-110 duration-200 text-white py-4 px-4 md:py-6  md:px-8 rounded-full "
            >
              Call Now
            </button>
              </div>
            </div>
            <div
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="No image"
                className="md:w-[500px] md:h-[450px] h-[300px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Cameralensesweprovide