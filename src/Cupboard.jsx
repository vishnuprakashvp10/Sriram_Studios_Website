import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Cupboardhero from './components/Cupboardhero/Cupboardhero'
import Cupboardweprovidetext from './components/Cupboardweprovide/Cupboardweprovidetext'
import Cupboardweprovide from './components/Cupboardweprovide/Cupboardweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Cupboard = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:+917092805747`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>Cupboard & Wardrobe Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Infratech Builders in Chennai specializes in crafting elegant and functional cupboards and wardrobes, seamlessly blending style and functionality. Enquire now.'/>
      </Helmet>
      <WhatsAppButton />
      <Cupboardhero
        handleOrderPopup={handleOrderPopup} />
      <Cupboardweprovidetext />
      <Cupboardweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Cupboard"} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Cupboard 