import React, { useState } from 'react';
import Img1 from "../../assets/Hero/haze-filter.jpg";
import Img2 from "../../assets/Hero/polarizing-filter.jpg";
import Img3 from "../../assets/Hero/nd-filer.jpg";
import Img4 from "../../assets/Hero/color-filter.jpg";
import Img5 from "../../assets/Hero/close-up-filer.jpg";
import Img6 from "../../assets/Hero/special-effects-filter.jpg";
import Img7 from "../../assets/Hero/ir-filter.jpg";
import Img8 from "../../assets/Hero/gnd-filer.jpg";
import Img9 from "../../assets/Hero/all-filters.jpg";

const ModularkitchenweprovideData = [
  {
    id: 1,
    img: Img1,
    name: "Haze Filters",
    text: "Haze filters are designed to combat the effects of atmospheric haze, often caused by UV light. These filters help in capturing clearer, sharper images, particularly when shooting in outdoor environments with significant haze or smog. By cutting down the UV light that can cause a blue cast and reduce contrast, haze filters allow for greater detail and color accuracy. ",
  },
  {
    id: 2,
    name: "Polarizing Filters",
    text: "Polarizing filters are essential for enhancing image quality by controlling reflections and glare. They work by filtering out polarized light, which can create distracting reflections from surfaces like water, glass, or shiny metal. In addition to reducing glare, polarizing filters also deepen the color saturation of skies, foliage, and other vibrant elements in a scene.",
    img: Img2,
  },
  {
    id: 3,
    name: "Neutral Density (ND) Filters",
    text: "ND filters reduce the amount of light entering the camera without affecting color balance, enabling filmmakers to use slower shutter speeds or wider apertures even in bright light conditions. This opens up creative possibilities, such as creating motion blur for fast-moving objects or achieving a shallow depth of field in daylight.",
    img: Img3,
  },
  {
    id: 4,
    name: "Colour Filters",
    text: "Colour filters allow filmmakers to control the color temperature and mood of a scene. Whether you're correcting the warmth of tungsten lights, cooling down daylight shots, or creating an entirely new mood with creative color shifts, these filters offer versatile control over your image's final look. Colour filters are particularly useful for enhancing skin tones and balancing lighting environments.",
    img: Img4,
  },
  {
    id: 5,
    name: "Close-up Filters",
    text: "Close-up filters are an economical alternative to a macro lens, enabling the camera to focus at much closer distances than usual. These filters magnify the subject, making them perfect for capturing detailed shots of small objects such as insects, flowers, or intricate textures. Close-up filters are a favorite among filmmakers and photographers who want to add macro capabilities to their existing lens.",
    img: Img5,
  },
  {
    id: 6,
    name: "Special Effects Filters",
    text: "Special effects filters are designed to bring a unique, creative element to your cinematography. They can produce effects like starbursts around bright lights, soft focus for a dreamy, romantic feel, or distortions for surreal, abstract imagery. Whether you're shooting a music video, commercial, or artistic film, these filters help add a distinctive visual signature to your work.",
    img: Img6,
  },
  {
    id: 7,
    img: Img7,
    name: "Infrared (IR) Filters",
    text: "Infrared filters allow you to capture images using infrared light, blocking out visible light and revealing hidden textures and contrasts not typically seen by the naked eye. Often used in artistic and experimental cinematography. IR filters can make greenery appear white and skies dark, offering a completely different perspective that adds a surreal, ethereal quality to your work.",
  },
  {
    id: 8,
    name: "Graduated Neutral Density (GND) Filters",
    text: "GND filters are invaluable when shooting scenes with extreme contrast, such as landscapes where the sky is significantly brighter than the foreground. These filters gradually darken one portion of the frame (typically the sky), allowing you to achieve balanced exposures without blowing out highlights or losing detail in shadows.",
    img: Img8,
  },
  {
    id: 9,
    name: "All Lens Filters Available",
    text: "At Sriram Studios, we provide an extensive selection of high-quality lens filters, ensuring that you have the right tools to control light, color, and mood in any shooting condition. Whether you're aiming for creative effects, precise exposure control, or enhanced image clarity, our range of filters supports every cinematic need.",
    img: Img9,
  },
];

const Cupboardweprovide = ({handleOrderPopup}) => {

  return (
    <div className="py-14 mb-10">
      <div className="container">

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ModularkitchenweprovideData.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-2xl mt-20 bg-white/100 hover:bg-primary relative shadow-xl duration-high group max-w-[300px] h-[500px] `}
            >
              <div className="h-[150px]">
                <img
                  src={service.img}
                  alt=""
                  className="max-w-[250px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl text-primary group-hover:text-white font-bold">{service.name}</h1>
                <p className="text-black group-hover:text-white duration-high text-sm ">
                  {service.text}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-3 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Call Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cupboardweprovide;
