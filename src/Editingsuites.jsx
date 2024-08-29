import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Editingsuiteshero from './components/Editingsuiteshero/Editingsuiteshero'
import Editingsuitesweprovidetext from './components/Editingsuitesweprovide/Editingsuitesweprovidetext'
import Editingsuitesweprovide from './components/Editingsuitesweprovide/Editingsuitesweprovide'
import Exploreourspaces from './components/Exploreourspaces/Exploreourspaces'
import { Link } from "react-router-dom";
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';


const Editingsuites = () => {
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
        <title>Editing Suites in Chennai &#124; Sriram Studios</title>
        <meta name='description' content='At Sriram Studios we provide everything you need for professional video and film editing.' />
      </Helmet>
      <WhatsAppButton />
      <Editingsuiteshero
        handleOrderPopup={handleOrderPopup} />
      <Editingsuitesweprovidetext />
      <Editingsuitesweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup type={"Editing Suites"} orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
      <Exploreourspaces />
      <Callusbanner />
    </div>
  )
}

export default Editingsuites