import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Lensfiltershero from './components/Lensfiltershero/Lensfiltershero'
import Lensfiltersweprovidetext from './components/Lensfiltersweprovide/Lensfiltersweprovidetext'
import Lensfiltersweprovide from './components/Lensfiltersweprovide/Lensfiltersweprovide'
import Exploreourspaces from './components/Exploreourspaces/Exploreourspaces'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Lensfilters = () => {
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
        <title>Lens Filters &#124; Sriram Studios</title>
        <meta name='description' content="Enhance your film and photography with our premium filters, providing precise control over light and color for perfect shots." />
      </Helmet>
      <WhatsAppButton />
      <Lensfiltershero
        handleOrderPopup={handleOrderPopup} />
      <Lensfiltersweprovidetext />
      <Lensfiltersweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Lens Filters"} />
      <Exploreourspaces />
      <Callusbanner />
    </div>
  )
}

export default Lensfilters 