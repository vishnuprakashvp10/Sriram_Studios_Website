import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Paintingserviceshero from './components/Paintingservices/Paintingserviceshero'
import Paintingservicesweprovidetext from './components/Paintingservices/Paintingservicesweprovidetext'
import Paintingservicesweprovide from './components/Paintingservices/Paintingservicesweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/signature-prime-lens.jpg';
import Banner2 from './assets/Hero/signature-zooms.jpg';
import Banner3 from './assets/Hero/cookie-7i-lenses.jpg';
import Banner4 from './assets/Hero/master-prime-lens.jpg';
import Banner5 from './assets/Hero/supreme-prime-lenses.jpg';
import Banner6 from './assets/Hero/atlas-anamorphic-lenses.jpg';
import Banner7 from './assets/Hero/cookie-anamorphic-lenses.jpg';
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
        title="Signature Prime Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
      <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Signature Zooms"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
      />
           <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Cookie S7/i Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
            <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title="Master Prime Lenses"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
      />
                 <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner5}
        title="Supreme Prime Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
            <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner6}
        title="Atlas Anamorphic Lenses"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
      />
                       <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner7}
        title="Cookie Anamorphic Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Painting Services"} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Paintingservices