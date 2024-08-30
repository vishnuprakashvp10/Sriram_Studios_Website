import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Cameralenseshero from './components/Cameralenses/Cameralenseshero'
import Cameralensesweprovidetext from './components/Cameralenses/Cameralensesweprovidetext'
import Cameralensesweprovide from './components/Cameralenses/Cameralensesweprovide'
import Exploreourspaces from './components/Exploreourspaces/Exploreourspaces'
import Banner1 from './assets/Hero/signature-prime-lens.jpg';
import Banner2 from './assets/Hero/signature-zooms.jpg';
import Banner3 from './assets/Hero/cookie-7i-lenses.jpg';
import Banner4 from './assets/Hero/master-prime-lens.jpg';
import Banner5 from './assets/Hero/supreme-prime-lenses.jpg';
import Banner6 from './assets/Hero/atlas-anamorphic-lenses.jpg';
import Banner7 from './assets/Hero/cookie-anamorphic-lenses.jpg';
import Banner8 from './assets/Hero/fujinon-lens.jpg';
import Banner9 from './assets/Hero/Laowa-lens.jpg';
import Banner10 from './assets/Hero/laowa-100mm-macro-lens.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Cameralenses = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
 
  const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:+04423751935`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div className="bg-black ">
      <Helmet>
        <title>Camera Lenses &#124; Sriram Studios</title>
        <meta name='description' content="From prime to zoom lenses, find the perfect lens for your professional film and photography needs." />
      </Helmet>
      <WhatsAppButton />
      <Cameralenseshero
        handleOrderPopup={handleOrderPopup} />
      <Cameralensesweprovidetext />
      <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Signature Prime Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
      <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Signature Zooms"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
      />
           <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Cookie S7/i Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
            <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title="Master Prime Lenses"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
      />
                 <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner5}
        title="Supreme Prime Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
            <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner6}
        title="Atlas Anamorphic Lenses"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
      />
                       <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner7}
        title="Cookie Anamorphic Lenses"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
      />
                  <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner8}
        title="Fujinon Premista Lenses"
        description="Fujinon Premista Lenses are a series of premium large-format cinema lenses designed for high-end film production. These lenses are renowned for their outstanding optical performance, delivering exceptional sharpness, clarity, and beautiful color rendition across the frame. The Premista series includes wide-angle, standard, and telephoto zoom lenses, offering a versatile range of focal lengths while maintaining consistent image quality."
      />
                             <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner9}
        title="Laowa 12mm Lenses"
        description="Its impressive 122-degree field of view, making it a go-to choice for landscape, architectural, and interior photography. With its close-to-zero distortion, the Laowa 12mm lens ensures accurate lines and structures, offering sharp, crisp images across the frame. Its manual focus design provides precise control over focus, especially when shooting wide vistas or in tight spaces."
      />
                        <Cameralensesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner10}
        title="Laowa 100 Macro Lenses"
        description="This lens is equipped with an apochromatic (APO) design, which minimizes chromatic aberrations, ensuring sharp images with accurate colors even at high magnifications. It has a manual focus system, providing precise control for capturing intricate details, and a 100mm focal length that allows for a comfortable working distance from subjects."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Camera Lenses"} />
      <Exploreourspaces />
      <Callusbanner />
    </div>
  )
}

export default Cameralenses