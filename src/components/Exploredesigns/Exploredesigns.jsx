import React, { useState } from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from "../../assets/Hero/green-matte-studio.jpg";
import Img2 from "../../assets/Hero/editing-suite.jpg";
import Img3 from "../../assets/Hero/dubbing-studio.jpg";
import Img4 from "../../assets/Hero/mixing.webp";
import Img5 from "../../assets/Hero/lights-and-grips.jpg";
import Img6 from "../../assets/Hero/lens-filters.webp";
import Img7 from "../../assets/Hero/signature-prime-lens.jpg";
import Img8 from "../../assets/Hero/genset.avif";
import Img9 from "../../assets/Hero/alexa-lf-and-mini-lf.jpg";
import Img10 from "../../assets/Hero/projector.webp";
import OrderPopup from "../../Popup";
import { isMobile } from "react-device-detect";


const Exploredesignscard = [
  {
    id: 1,
    img: Img1,
    name: "Green Matte Studio",
    link: "/green-matte-studio",
    text: "Elevate your kitchen with modular interior design, incorporating creative ideas for small apartments.",
  },
  {
    id: 2,
    img: Img2,
    name: "Editing Suite",
    link: "/editing-suite",
    text: "We specialize in designing spaces that seamlessly  blend style and comfort, from minimalist to eclectic.",
  },
  {
    id: 3,
    img: Img3,
    name: "Dubbing Studios",
    link: "/dubbing-studios",
    text: "Transform your interior into a stylish haven, adding a touch of sophistication and charm to your living areas.",
  },
  {
    id: 4,
    img: Img4,
    name: "Audio Mixing",
    link: "/audio-mixing",
    text: "Our catalog inspires functional and stylish wardrobe interior designs, perfect for loft spaces.",
  },
  {
    id: 5,
    img: Img5,
    name: "Lights and Grips",
    link: "/lights-and-grips",    
    text: "Discover imaginative dining room wall decor ideas that elegantly redefine style within your home.",
  },
  {
    id: 6,
    img: Img6,
    name: "Lens Filters",
    link: "/lens-fileters",
    text: "Our designs seamlessly integrate stylish bathroom decorations that  blends luxury and utility.",
  },
  {
    id: 7,
    img: Img7,
    name: "Camera Lenses",
    link: "/camera-lenses",   
    text: " Explore interior design websites for inspiration on creating an elegant and functional centerpiece in your living space.",
  },
  {
    id: 8,
    img: Img8,
    name: "Genset",
    link: "/genset",    
    text: "Transform your study space with our specialized interior design. We create a conducive and stylish environment.",
  },
  {
    id: 9,
    img: Img9,
    name: "Film Camera Units",
    link: "/film-camera-units",
    text: "Minimalist elegance for spaces, including Pooja rooms, reflect your unique style with sophistication.",
  },
  {
    id: 10,
    img: Img10,
    name: "Projector and Screens",
    link: "/projector-and-screens",    
    text: "Elevate your bedrooms with imaginative decor concepts, inspiring ideas for bunk bed decoration.",
  },
];

const Exploredesigns = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:+917092805747`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };
  
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="flex items-center justify-center mb-8 ">
          <div className="text-center w-[1200px] ">
            <h1 className="text-3xl text-primary font-bold">
            Explore Our Film Production Spaces
</h1>
            <p className="text-bold py-4 text-white">
            Discover expertly designed production setups at Sriram Studios, crafted to cater to every filming requirement. From fully equipped editing suites to immersive green matte studios and advanced dubbing rooms, explore the perfect environment for your next project. Each space is meticulously designed to enhance creativity and efficiency, offering filmmakers and production teams the ideal balance of functionality and inspiration.
                        </p>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {Exploredesignscard.map((data) => (
              <div key={data.id} className={`my-6`}>
                <Link to={data.link} className="card-link">
                  <div className={`flex flex-col transition-all shadow-md hover:scale-105 gap-4 pb-2 mx-4 bg-secondary relative`}>
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="md:h-[200px] md:w-[300px] h-[250px]  object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <h1 className="text-xl text-center font-bold text-white">
                          {data.name}
                        </h1>
                        <p className="text-xs text-center text-white-500 p-2">{data.text}</p>
                      </div>

                    </div>
                  </div>
                  
                </Link>
              </div>
            ))}
          </Slider>
          
        </div>
        
      </div>
      {/* Centered button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleOrderPopup}
          className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-4 px-4 mt-4 md:py-6 md:px-8 rounded-full"
        >
          Call Now
        </button>
      </div>
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Explore Designs"} />

    </div>
  );
};

export default Exploredesigns;
