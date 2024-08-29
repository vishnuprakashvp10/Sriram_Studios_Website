import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Audiomixinghero from './components/Audiomixinghero/Audiomixinghero'
import Audiomixingweprovidetext from './components/Audiomixingweprovide/Audiomixingweprovidetext'
import Audiomixingweprovide from './components/Audiomixingweprovide/Audiomixingweprovide'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import Exploreourspaces from './components/Exploreourspaces/Exploreourspaces'
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';


const Audiomixing = () => {
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
        <title>Audio Mixing Studios in Chennai &#124; Sriram Studios</title>
        <meta name='description' content='Experience professional audio mixing services at Sriram Studios in Chennai. Our state-of-the-art mixing studios provide top-tier sound quality for your projects.' />
      </Helmet>
      <WhatsAppButton />
      <Audiomixinghero
        handleOrderPopup={handleOrderPopup} />
      <Audiomixingweprovidetext />
      <Audiomixingweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Audio Mixing"} />
      <Exploreourspaces />
      <Callusbanner />
    </div>
  )
}

export default Audiomixing