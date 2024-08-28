import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Turfconstructionhero from './components/Turfconstruction/Turfconstructionhero'
import Turfconstructionweprovidetext from './components/Turfconstruction/Turfconstructionweprovidetext'
import Turfconstructionweprovide from './components/Turfconstruction/Turfconstructionweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/arri-m90.jpg';
import Banner2 from './assets/Hero/arri-m40.jpg';
import Banner3 from './assets/Hero/arri-m18.jpg';
import Banner4 from './assets/Hero/arri-s120.jpg';
import Banner5 from './assets/Hero/arri-s60.jpg';
import Banner6 from './assets/Hero/arri-s30.jpg';
import Banner7 from './assets/Hero/nanlite-forza.jpg';
import Banner8 from './assets/Hero/apututre-lights.jpg';
import Banner9 from './assets/Hero/grips.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton'; 
import { Helmet } from 'react-helmet-async';
import { isMobile } from 'react-device-detect';
 


const Turfconstruction = () => {
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
        <title>Lights and Grips &#124; Sriram Studios</title>
        <meta name='description' content='Sriram Studios offers professional lights and grips services in Chennai, providing high quality equipment and support.' />
      </Helmet>
      <WhatsAppButton />
      <Turfconstructionhero
        handleOrderPopup={handleOrderPopup} />
      <Turfconstructionweprovidetext />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Arri Par Light M90"
        description="The Arri Par Light M90 delivers exceptional brightness and precision, making it ideal for a wide range of film and television production needs. Its robust design ensures reliable performance, while its powerful output enhances scene detail and depth, allowing for dynamic and visually striking lighting effects."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Arri Par Light M40"
        description="The Arri Par Light M40 combines high-quality illumination with versatile functionality, making it an excellent choice for a variety of production environments. Its compact design offers powerful lighting that can be easily adjusted to create dynamic effects and highlight key scene elements."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Arri Par Light M18"
        description="The Arri Par Light M18 is a compact yet powerful lighting solution, designed for detailed and precise illumination. Its focused beam is perfect for adding texture and depth to your scenes, making it a versatile choice for close-up shots and small-scale setups."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title="Arri Sky Panel 120"
        description="The Arri Sky Panel 120 offers robust and adjustable lighting for large-scale productions. With its wide coverage and high output, it provides comprehensive illumination for expansive scenes. This panel allows for precise control over color and intensity, making it suitable for a range of lighting needs."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner5}
        title="Arri Sky Panel 60"
        description="The Arri Sky Panel 60 delivers high-quality, adjustable lighting with a balance of power and precision. Its versatile design is ideal for medium-sized setups, offering excellent color accuracy and control. Perfect for creating dynamic lighting effects or maintaining consistent illumination"
      />
            <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner6}
        title="Arri Sky Panel 30"
        description="The Arri Sky Panel 30 provides compact, flexible lighting solutions with adjustable intensity and color options. Its smaller size makes it suitable for close-up shots and controlled environments, offering high performance in a compact form. This panel is designed for versatility, delivering reliable and precise lighting."
      />
            <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner7}
        title="Nanlite Forza"
        description="The Nanlite Forza is a high-performance LED light known for its powerful output and exceptional color accuracy. Designed for professional use, the Forza offers versatile lighting options with adjustable intensity and color temperature to suit various shooting environments."
      />
                  <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner8}
        title="Aputure (All Models)"
        description="Aputure lights offer versatile features including adjustable color temperatures, high output, and precise control. Whether for key lighting, fill lighting, or special effects, Aputure’s comprehensive lineup delivers reliable performance and flexibility, making them a top choice for achieving cinematic excellence."
      />
                  <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner9}
        title="All Grips"
        description="We offers a full range of professional grip equipment, ensuring smooth and precise camera movements on set. From stands and rigs to dollies and mounts, our grip gear supports every shot, enabling flawless execution of complex setups for film and video production."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Turf Construction"} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Turfconstruction