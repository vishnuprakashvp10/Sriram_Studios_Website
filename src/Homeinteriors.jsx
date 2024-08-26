import React, { useState } from 'react';
import Homeinteriorshero from './components/Homeinteriorshero/Homeinteriorshero'
import Homeinteriorsweprovidetext from './components/Homeinteriorsweprovide/Homeinteriorsweprovidetext'
import Homeinteriorsweprovide from './components/Homeinteriorsweprovide/Homeinteriorsweprovide'
import Homeinteriorscard from './components/Homeinteriorsweprovide/Homeinteriorscard'
import Homeinteriorstable from './components/Homeinteriorsweprovide/Homeinteriorstable'
import Homeinteriorstabletext from './components/Homeinteriorsweprovide/Homeinteriorstabletext'
import Homeinteriorsotherservices from './components/Homeinteriorsweprovide/Homeinteriorsotherservices';
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner'
import Banner1 from './assets/Hero/livingroom.jpg';
import Banner2 from './assets/Hero/dinning.jpg';
import Banner3 from './assets/Hero/bedroom.jpg';
import OrderPopup from "./Popup";
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async';
import { isMobile } from 'react-device-detect';

const Homeinteriors = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:+917092805747`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };

  return (
    <div>
      <Helmet>
        <title>Home Interior Decorators in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Infratech Builders in Chennai crafts your vision with expertise in Building & Turf Construction, Interior Designing, Renovations and Painting. Get a quote today!' />
      </Helmet>
      <WhatsAppButton />
      <Homeinteriorshero
        handleOrderPopup={handleOrderPopup} />
      <Homeinteriorsweprovidetext />
      <Homeinteriorsweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Interior Design for Every Room"
        description=" Living Room Design, Bedroom Design, Kitchen Design, Dining Room Design and Foyer Design"
        description2="Transforming spaces into stunning sanctuaries is our expertise. We blend elegance to craft unforgettable interiors. From cozy living rooms to tranquil bedrooms and inspiring kitchens, every corner reflects your style. Our designs create inviting dining atmospheres and captivating foyer entrances. Trust us to redefine luxury and comfort for"  
     />
      <Homeinteriorsweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Enhancement Solutions"
        description=" Create a sacred sanctuary for prayer and reflection with our serene pooja room or mandir designs, adhering to Vastu principles for south-facing homes."
        description2 =" Maximize the functionality of every room with our ingenious solutions, whether it's concealing cords on walls or crafting stunning false ceiling designs. Select materials like engineered wood, waterproof plywood, and acrylic kitchen cabinets that perfectly match your needs and budget."
      />
      <Homeinteriorsweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Interior Design Expertise"
        description=" As your design partner, Infratech Builders guides from concept to completion, transforming spaces with style and comfort."
        description2="Bringing expertise to diverse commercial spaces, we specialize in crafting captivating interiors for malls, salons, bakeries, gyms, and more. With 3D visualization tools, preview your dream space before construction. Prioritizing quality and sustainability, we recommend weatherproof materials for enduring beauty."
     />
      <Homeinteriorscard 
      handleOrderPopup={handleOrderPopup}/>
      <Homeinteriorstabletext/>
      <Homeinteriorstable/>
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Dining Room"} />
      <Exploredesigns />
      <Homeinteriorsotherservices />
      <Callusbanner />
    </div>
  );
}

export default Homeinteriors;
