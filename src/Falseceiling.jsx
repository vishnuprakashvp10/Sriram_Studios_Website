import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Falseceilinghero from './components/Falseceilinghero/Falseceilinghero'
import Falseceilingweprovidetext from './components/Falseceilingweprovide/Falseceilingweprovidetext'
import Falseceilingweprovide from './components/Falseceilingweprovide/Falseceilingweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/dubbing-studio-img1.jpg';
import Banner2 from './assets/Hero/soundproofing-dubbing.webp';
import Banner3 from './assets/Hero/industry-dubbing.jpg';
import Banner4 from './assets/Hero/dubbing-engineers.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Falseceiling = () => {
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
        <title>Dubbing Studios in Chennai &#124; Sriram Studios</title>
        <meta name='description' content='Sriram Studios offers professional audio recording and post-production services for high-end film and media projects.' />
      </Helmet>
      <WhatsAppButton />
      <Falseceilinghero
        handleOrderPopup={handleOrderPopup} />
      <Falseceilingweprovidetext />
      <Falseceilingweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title= "Professional Sound Quality"
        description="Our dubbing studios at Sriram Studios are equipped with the latest technology to deliver high-definition sound quality. We ensure that every recording is crisp and clear, enhancing the overall production value of your project. Whether it's for films, TV shows, or ads, our sound engineers provide top-notch results."
      />
      <Falseceilingweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title= "Advanced Soundproofing"
        description="We understand the importance of a distraction-free environment. Our studios are built with advanced soundproofing to ensure a controlled recording atmosphere, isolating any unwanted noise. This creates a perfect setting for capturing every vocal detail with precision."

      />
      <Falseceilingweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title ="Seamless Syncing"
        description="Perfect audio synchronization is crucial for dubbing, and our studios are equipped with industry-standard software and hardware to ensure flawless syncing between visuals and voice recordings. Whether it's lip-syncing or off-screen narration, we make sure everything aligns seamlessly."
      />
            <Falseceilingweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title= "Experienced Engineers"
        description="Our team of sound engineers brings years of expertise to your project. They work closely with your creative team to understand the unique needs of your production, ensuring every line is recorded with the perfect tone, pitch, and emotion, enhancing the storytelling of your film or media."

      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"False Ceiling"} />

      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Falseceiling