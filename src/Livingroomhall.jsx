import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Livingroomhallhero from './components/Livingroomhallhero/Livingroomhallhero'
import Livingroomhallweprovidetext from './components/Livingroomhallweprovide/Livingroomhallweprovidetext'
import Livingroomhallweprovide from './components/Livingroomhallweprovide/Livingroomhallweprovide'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';


const Livingroomhall = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:+04423751935`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div className="bg-black text-white">

      <Helmet>
        <title>Audio Mixing Studios in Chennai &#124; Sriram Studios</title>
        <meta name='description' content='Experience professional audio mixing services at Sriram Studios in Chennai. Our state-of-the-art mixing studios provide top-tier sound quality for your projects.' />
      </Helmet>
      <WhatsAppButton />
      <Livingroomhallhero
        handleOrderPopup={handleOrderPopup} />
      <Livingroomhallweprovidetext />
      <Livingroomhallweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Living Room"} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Livingroomhall