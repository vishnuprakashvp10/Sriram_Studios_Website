import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Paintingserviceshero from './components/Paintingservices/Paintingserviceshero'
import Paintingservicesweprovidetext from './components/Paintingservices/Paintingservicesweprovidetext'
import Paintingservicesweprovide from './components/Paintingservices/Paintingservicesweprovide'
import Ourpaintingservices from './components/Paintingservices/Ourpaintingservices'
import Paintotherservices from './components/Paintingservices/Paintotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/paintingext.jpg';
import Banner2 from './assets/Hero/extpaintingnew.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Paintingservices = () => {
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
        <title>Camera Lenses &#124; Sriram Studios</title>
        <meta name='description' content="From prime to zoom lenses, find the perfect lens for your professional film and photography needs." />
      </Helmet>
      <WhatsAppButton />
      <Paintingserviceshero
        handleOrderPopup={handleOrderPopup} />
      <Paintingservicesweprovidetext />
      <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Interior Painting"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."

      />
      <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Exterior Painting"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Painting Services"} />

      <Ourpaintingservices />
      <Paintotherservices />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Paintingservices