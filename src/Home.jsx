import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Herocard from './components/Hero/Herocard';
import Servicesoffer from './components/Servicesoffer/Servicesoffer';
import Exploredesigns from './components/Exploreourspaces/Exploreourspaces';
import Callusbanner from './components/Callusbanner/Callusbanner';
import OrderPopup from "./Popup";
import Banner1 from './assets/Hero/alexa-lf-and-mini-lf.jpg';
import Banner2 from './assets/Hero/lights-and-grips.jpg';
import Banner3 from './assets/Hero/lens-filters.webp';
import Banner4 from './assets/Hero/signature-prime-lens.jpg';
import Banner5 from './assets/Hero/genset.avif';
import { Link } from "react-router-dom";
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async';
import { isMobile } from 'react-device-detect';

const Home = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

 const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:04423751935`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };

  return (  
    <div className="bg-black text-white">
      <Helmet>
        <title>Sriram Studios &#124; All In One Production Services in Chennai</title>
        <meta name='description' content='Sriram Studios in Chennai offers premium film production and post-production services, specializing in camera, lens, and light rentals, and more.'/>
      </Helmet>
      <WhatsAppButton />
      <Hero />
      <Herocard />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Film Camera Units"
        description="At Sriram Studios, we provide top-quality film camera and digital film camera rentals to meet the demands of professional filmmakers. Our inventory includes a wide range of high-end cinema cameras tailored for both traditional film and cutting-edge digital productions. Whether you're working on a feature film, commercial, or any high-level production. Sriram Studios delivers the tools you need to achieve outstanding results. Explore our premium rental options today!"
        description2={<Link to="/film-camera-units"> Find out more!</Link>}
      />


      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Lights and Grips"
        description="At Sriram Studios, we offer top-tier camera lighting and grip services tailored for professional film productions. Our extensive range of grip and lighting equipment ensures that every scene is illuminated to perfection, enhancing the visual impact of your project. From professional lighting grip solutions to customized setups for any shooting environment, our equipment and expertise provide the support you need for high-quality productions."
        description2={<Link to="/lights-and-grips"> Learn more.</Link>}
      />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Lens Filters"
        description="At Sriram Studios, we provide an extensive range of camera lens filters designed for professional film productions. Our high-quality filters help filmmakers achieve the perfect shot by enhancing colors, reducing glare, and creating stunning visual effects. Whether you’re working with film cameras or digital film cameras, our selection of filters ensures that your footage meets the highest cinematic standards. Everything you need to fine-tune your visual aesthetic and achieve exceptional results on every project."
        description2={<Link to="/lens-filters"> Find out more!</Link>}
      />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title="Camera Lenses"
        description="At Sriram Studios, we offer a wide selection of professional camera lenses tailored to meet the needs of high-end filmmakers. Whether you require prime lenses for sharp, fixed focal lengths or zoom lenses for versatile shooting options, our inventory has the perfect lens for every scene. Our collection ensures exceptional image quality and performance, whether you're shooting a close-up or a sweeping landscape. With our premium camera lenses, you can achieve stunning visuals that elevate your production to the highest standards of filmmaking."
        description2={<Link to="/camera-lenses"> Discover more!</Link>}
      />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        img={Banner5}
        title="Genset Rentals"
        description="At Sriram Studios, we provide reliable genset rentals for film productions, ensuring uninterrupted power supply on set. Our gensets is designed to meet the demands of both indoor and outdoor shoots, offering consistent and efficient power solutions. Whether you're working with heavy lighting setups or high-end camera equipment, our gensets ensure that your production runs smoothly without any power disruptions. Trust Sriram Studios for dependable power solutions tailored for professional filmmakers."
        description2={<Link to="/genset-rentals"> Explore more!</Link>}
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Home Page"} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  );
};

export default Home;
