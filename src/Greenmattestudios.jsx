import React, { useState } from 'react';
import Greenmattestudioshero from './components/Greenmattestudioshero/Greenmattestudioshero'
import Greenmattestudiosweprovidetext from './components/Greenmattestudiosweprovide/Greenmattestudiosweprovidetext'
import Greenmattestudiosweprovide from './components/Greenmattestudiosweprovide/Greenmattestudiosweprovide'
import Exploreourspaces from './components/Exploreourspaces/Exploreourspaces'
import Callusbanner from './components/Callusbanner/Callusbanner'
import Banner1 from './assets/Hero/chromekey-green.webp';
import Banner2 from './assets/Hero/pre-lit-green-matte.jpg';
import Banner3 from './assets/Hero/expansive-green-matte.jpeg';
import OrderPopup from "./Popup";
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async';
import { isMobile } from 'react-device-detect';
 
const Greenmattestudios = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:+04423751935`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };

  return (
    <div className="bg-black">
      <Helmet>
        <title>Green Matte Studios in Chennai  &#124; Sriram Studios</title>
        <meta name='description' content='Sriram Studios offers top-tier Green Matte Studio services, delivering exceptional solutions for your film production needs.' />
      </Helmet>
      <WhatsAppButton />
      <Greenmattestudioshero
        handleOrderPopup={handleOrderPopup} />
      <Greenmattestudiosweprovidetext />
      <Greenmattestudiosweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Chromakey Green Matte Studio"
        description2="Our chromakey green matte studio facility is fully equipped with state-of-the-art studio lighting, advanced sound systems, cutting-edge teleprompters, and high-definition video cameras. From the precise illumination provided by our latest lighting technology to the crystal-clear audio captured by our sophisticated sound equipment."  
     />
      <Greenmattestudiosweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Pre-Lit Infinity Cove Cyclorama"
        description2 =" Our studio features a state of the art pre-lit infinity cove cyclorama, designed to provide a seamless and versatile backdrop for your video productions. This advanced setup ensures a smooth, continuous background with no visible seams or edges, creating an immersive environment that enhances your visual storytelling."
      />
      <Greenmattestudiosweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Expansive Green Matte Studio"
        description2="Our green matte studio spans 15 feet by 19 feet, with a height of 30 feet. This spacious facility is ideal for a variety of filming needs, providing ample room for creative projects and versatile shooting angles. Its generous dimensions accommodate complex setups and large-scale productions, ensuring a professional and adaptable environment."
     />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Green Matte Studios"} />
      <Exploreourspaces />
      <Callusbanner />
    </div>
  );
}

export default Greenmattestudios;
