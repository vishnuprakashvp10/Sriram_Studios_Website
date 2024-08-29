import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Renovationserviceshero from './components/Renovationservices/Renovationserviceshero'
import Renovationservicesweprovidetext from './components/Renovationservices/Renovationservicesweprovidetext'
import Renovationservicesweprovide from './components/Renovationservices/Renovationservicesweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/genset-img-2.jpg';
import Banner2 from './assets/Hero/genset.avif';
import Banner3 from './assets/Hero/genset-img-3.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'
import { isMobile } from 'react-device-detect';

const Renovationservices = () => {
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
        <title>Genset Rentals &#124; Sriram Studios</title>
        <meta name='description' content="Power your productions seamlessly with high performance gensets with uninterrupted energy supply for cameras, lighting, and equipment on location." />
      </Helmet>
      <WhatsAppButton />
      <Renovationserviceshero
        handleOrderPopup={handleOrderPopup} />
      <Renovationservicesweprovidetext />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Our Gensets - 80kVA to 120kVA"
        description="We provide a range of gensets from 80kVA to 120kVA, perfect for powering your film productions, events, or commercial shoots. Our gensets are designed to handle the energy needs of large-scale productions, ensuring uninterrupted power for lighting, camera setups, and other critical equipment. With reliable performance and top-tier maintenance, our gensets guarantee that your production runs smoothly."
      />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Reliable Power Supply"
        description="Our gensets provide a continuous and reliable power supply, ensuring that even during peak production hours, all equipment such as lights, cameras, and audio systems remain operational. Designed for optimal performance, these gensets are equipped with automatic voltage regulation to prevent fluctuations and ensure stable power output throughout the shoot."
      />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Fuel Efficiency and Low Noise"
        description="Fuel efficiency is a key feature of our gensets, designed to minimize operational costs without compromising on power. Additionally, these gensets are built with noise-reduction technology, making them suitable for film sets where low noise is essential. This ensures that you can focus on your production without the distractions of loud machinery in the background."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Renovation Services"} />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Renovationservices 