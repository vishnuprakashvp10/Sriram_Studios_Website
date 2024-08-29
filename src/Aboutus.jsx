import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Aboutushero from './components/Aboutus/Aboutushero'
import Aboutusdetails from './components/Aboutus/Aboutusdetails'
import Exploredesigns from './components/Exploreourspaces/Exploreourspaces'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Aboutus = () => {
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
        <title>About Us &#124; Sriram Studios, Chennai</title>
        <meta name='description' content="Sriram Studios, with a commitment to excellence and innovation, we provide top-tier services in film production and post production." />
      </Helmet>
      <Aboutushero
        handleOrderPopup={handleOrderPopup} />
      <WhatsAppButton />
      <Aboutusdetails
      />
      <OrderPopup type={"About us"} orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Aboutus 