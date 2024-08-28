import React, { useState } from 'react';
import Commercialhero from './components/Commercial/Commercialhero'
import Commercialweprovidetext from './components/Commercial/Commercialweprovidetext'
import Commercialweprovide from './components/Commercial/Commercialweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner'
import Banner1 from './assets/Hero/multi-cam-img1.jpg';
import Banner2 from './assets/Hero/multi-cam-img2.jpg';
import Banner3 from './assets/Hero/multi-cam-img3.jpg';
import OrderPopup from "./Popup";
import WhatsAppButton from './whatsappbutton';
import { isMobile } from 'react-device-detect';
import { Helmet } from 'react-helmet-async'

const Homeinteriors = () => {
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
        <title>Multi Camera Setup &#124; Sriram Studios</title>
        <meta name='description' content='Sriram Studios offers professional audio recording and post-production services for high-end film and media projects.' />
      </Helmet>
      <WhatsAppButton />
      <Commercialhero
        handleOrderPopup={handleOrderPopup} />
      <Commercialweprovidetext />
      <Commercialweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Comprehensive Coverage"
        description="Multi-camera setups provide comprehensive coverage of every scene, capturing multiple angles simultaneously. This approach ensures that no detail is missed, offering a dynamic and immersive viewing experience. Whether for films, commercials, or live events, it enhances the visual storytelling by presenting varied perspectives."
      />
      <Commercialweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Seamless Integration"
        description="Our multi-camera setups are designed for seamless integration and synchronization. With precise coordination between cameras, we ensure that footage from different angles aligns perfectly, resulting in a cohesive and polished final product. This integration is essential for maintaining continuity and consistency in your project."
      />
            <Commercialweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Enhanced Production Flexibility"
        description="Multi-camera setups offer enhanced flexibility during production, allowing for quick adjustments and real-time decision-making. This flexibility is crucial for capturing spontaneous moments and adapting to evolving creative directions. It enables a more efficient workflow, saving time and optimizing the overall production process."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Commercial Interior Designs"} />

      <Exploredesigns />
      <Callusbanner />
    </div>
  );
}

export default Homeinteriors;
