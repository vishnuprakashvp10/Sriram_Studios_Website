import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Teleprompterhero from './components/Teleprompterhero/Teleprompterhero'
import Teleprompterweprovidetext from './components/Teleprompterweprovide/Teleprompterweprovidetext'
import Teleprompterweprovide from './components/Teleprompterweprovide/Teleprompterweprovide'
import Exploreourspaces from './components/Exploreourspaces/Exploreourspaces'
import Banner1 from './assets/Hero/teleprom-3.jpg';
import Banner2 from './assets/Hero/teleprom-1.jpg';
import Banner3 from './assets/Hero/teleprom-2.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Teleprompter = () => {
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
        <title>Teleprompters &#124; Sriram Studios</title>
        <meta name='description' content='Sriram Studios provides top-quality teleprompter services for seamless and efficient video productions.' />
      </Helmet>
      <WhatsAppButton />
      <Teleprompterhero
        handleOrderPopup={handleOrderPopup} />
      <Teleprompterweprovidetext />
      <Teleprompterweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title= "Adjustable Display"
        description="Our teleprompters feature high-resolution displays with adjustable text sizes and scroll speeds, allowing for easy readability and a natural flow of speech during recording or live events. The display is adaptable to suit different lighting conditions, ensuring visibility in any setup."
      />
      <Teleprompterweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title= "Fully Remote Controlled"
        description="The teleprompters can be controlled remotely, giving directors and operators full control over the script's speed and position. This remote functionality ensures that adjustments can be made in real-time, reducing interruptions and keeping the performance smooth."

      />
      <Teleprompterweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title ="Flexible Mounting Options"
        description="Our teleprompters are designed to fit a wide range of cameras, from compact setups to full-size cinema cameras. With flexible mounting options, they can easily be integrated into any production environment, whether it's for studio shoots or on-location filming."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Teleprompters"} />
      <Exploreourspaces />
      <Callusbanner />
    </div>
  )
}

export default Teleprompter