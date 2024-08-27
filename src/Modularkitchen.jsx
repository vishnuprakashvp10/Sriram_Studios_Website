import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Modularkitchenhero from './components/Modularkitchenhero/Modularkitchenhero'
import Modularkitchenweprovidetext from './components/Modularkitchenweprovide/Modularkitchenweprovidetext'
import Modularkitchenweprovide from './components/Modularkitchenweprovide/Modularkitchenweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import { Link } from "react-router-dom";
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';


const Modularkitchen = () => {
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
        <title>Editing Suites in Chennai &#124; Sriram Studios</title>
        <meta name='description' content='Our state-of-the-art facilities provide everything you need for professional video and film editing.' />
      </Helmet>
      <WhatsAppButton />
      <Modularkitchenhero
        handleOrderPopup={handleOrderPopup} />
      <Modularkitchenweprovidetext />
      <Modularkitchenweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup type={"Modular Kitchen"} orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Modularkitchen