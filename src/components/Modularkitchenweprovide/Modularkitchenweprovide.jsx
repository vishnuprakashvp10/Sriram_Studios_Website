import React from "react";
import Img1 from "../../assets/Hero/voice-studio.jpg";
import Img2 from "../../assets/Hero/ab-roll.jpeg";
import Img3 from "../../assets/Hero/gobal-edit.jpg";
import Img4 from "../../assets/Hero/non-linear-editing.jpg";
import Img5 from "../../assets/Hero/high-performance.jpg";
import Img6 from "../../assets/Hero/editing-suite-for-needs.jpg";

const ModularkitchenweprovideData = [
  {
    id: 1,
    img: Img1,
    name: "Voice Studios and Ad Posting",
    text: "At Sriram Studios, we offer premier voice studios and exclusive ad-posting services within our editing suites, tailored for exceptional audio and visual production. Our advanced voice studios are equipped with high-quality microphones, soundproofing and industry-leading recording technology ensuring crystal-clear audio captures. ",
  },
  {
    id: 2,
    name: "AB Roll Edit Studio",
    text: "Our AB Roll Studio in the editing suite provides seamless editing capabilities for professionals, enabling smooth transitions between two video sources. Equipped with advanced editing tools and high-performance systems, it is designed to deliver precise cuts, sync audio perfectly, and enhance the overall storytelling process.",
    img: Img2,
  },
  {
    id: 3,
    name: "High-End Equipment from Global Brands",
    text: "Our editing suites are equipped with top-of-the-line hardware sourced from renowned international vendors like Sony, JVC, Steinberg, and Nuendo. This ensures superior performance, unmatched audio-visual quality, and a seamless editing experience for all your post-production needs.",
    img: Img3,
  },
  {
    id: 4,
    name: "Advanced Non-Linear Editing Systems",
    text: "Our editing suites are equipped with state-of-the-art non-linear editing systems from renowned brands such as Matrix, Avid, and Discreet Logic. These cutting-edge tools provide unparalleled precision and flexibility, ensuring high-quality post-production for your projects. Our technology ensures seamless editing with advanced features.",
    img: Img4,
  },
  {
    id: 5,
    name: "High-Performance Editing Workstations",
    text: "Our editing systems are powered by high-performance SGI and IBM workstations, delivering unparalleled speed and precision. These robust systems enable seamless handling of complex video projects, ensuring smooth editing workflows and exceptional output quality.",
    img: Img5,
  },
  {
    id: 6,
    name: "Diverse Editing Suites for Every Need",
    text: "Our facility offers a wide range of editing suites to accommodate all your post-production requirements. These state-of-the-art suites are equipped with advanced technology and tailored to meet various editing needs. Whether you require high-performance systems for intricate edits or user-friendly setups for straightforward projects.",
    img: Img6,
  },
];

const Modularkitchenweprovide = ({ handleOrderPopup }) => {
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

export default Modularkitchenweprovide;
