import React, { useState } from 'react';
import Img1 from "../../assets/Hero/nuendo-audio.jpg";
import Img2 from "../../assets/Hero/sound-engineer.jpg";
import Img3 from "../../assets/Hero/acoustic-room.jpeg";
import Img4 from "../../assets/Hero/flexible-recording.jpg";
import Img5 from "../../assets/Hero/comp-post-production.jpg";
import Img6 from "../../assets/Hero/audio-mix-last.jpg";

const AudiomixingweprovideData = [
  {
    id: 1,
    img: Img1,
    name: "NUENDO-3 Audio Workstation",
    text: "Our dubbing studio is powered by NUENDO-3, a highly advanced digital audio workstation designed for professional audio post-production. This industry-standard tool ensures precision editing, mixing, and mastering, allowing for seamless integration of voiceovers and sound effects.",
  },
  {
    id: 2,
    name: "Expert Sound Engineers",
    text: "Our team of highly skilled sound engineers has years of experience in the film industry, providing expert-level audio production services. From mixing and mastering to voice synchronization, we ensure every project is handled with precision and creativity. Our attention to detail ensures that every layer of sound is flawlessly integrated enhancing the overall production quality.",
    img: Img2,
  },
  {
    id: 3,
    name: "Acoustically Treated Studios",
    text: "Our studios are designed with acoustics in mind, ensuring optimal sound isolation and clarity. The controlled environment guarantees that every sound element in your project is recorded and mixed to perfection, free from external noise interference. The result is crystal-clear audio that enhances the storytelling experience and elevates your production to new heights.",
    img: Img3,
  },
  {
    id: 4,
    name: "Flexible Recording Spaces",
    text: "We know that every production has unique needs, and that’s why we offer a variety of recording spaces to suit any project. From spacious, multi-purpose rooms for large ensemble recordings to more intimate booths for individual voiceover work, Sriram Studios provides an environment tailored to your requirements.We make sure that the space and atmosphere are perfectly suited to the creative process.",
    img: Img4,
  },
  {
    id: 5,
    name: "Comprehensive Post-Production Support",
    text: "In addition to dubbing and mixing, Sriram Studios offers complete post-production services, including sound editing, Foley, and ADR (Automated Dialogue Replacement). We ensure a seamless audio experience that complements your visual storytelling. We guarantee a seamless audio experience that elevates the quality",
    img: Img5,
  },
  {
    id: 6,
    name: "Industry-Leading Equipment",
    text: "Sriram Studios is equipped with the latest technology, including cutting-edge microphones, speakers, and sound processing systems. We invest in top-tier equipment to deliver the highest audio quality possible for your films, TV shows, and ads. Our advanced technology enables us to produce outstanding results.",
    img: Img6,
  },
];

const Audiomixingweprovide = ({ handleOrderPopup }) => {
  return (
    <div className="py-14 mb-10">
      <div className="container">

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {AudiomixingweprovideData.map((service, index) => (
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
                <h1 className="text-xl text-primary group-hover:text-white  font-bold">{service.name}</h1>
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

export default Audiomixingweprovide;  
