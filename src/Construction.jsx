import React, { useState } from 'react';
import Constructionhero from './components/Constructionhero/Constructionhero'
import Constructionweprovidetext from './components/Constructionweprovide/Constructionweprovidetext'
import Constructionweprovide from './components/Constructionweprovide/Constructionweprovide'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';
import Banner1 from './assets/Hero/alexa-s35.jpg';
import Banner2 from './assets/Hero/alexa-lf.jpg';
import Banner3 from './assets/Hero/alexa-minilf.webp';
import Banner4 from './assets/Hero/alexa-sxt.jpg';
import Banner5 from './assets/Hero/alexamini.jpg';
import Banner6 from './assets/Hero/sony-venice1.jpg';
import Banner7 from './assets/Hero/sony-venice2.jpg';
import Banner8 from './assets/Hero/red-raptor.jpg';
import Banner9 from './assets/Hero/red-gemini.jpg';
import Banner10 from './assets/Hero/red-helium.jpg';
import Banner11 from './assets/Hero/sony-fx9.jpg';
import OrderPopup from "./Popup";
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async';
import { isMobile } from 'react-device-detect';

const Construction = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

 const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:04423751935`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Professional Film Camera Units in Chennai &#124; Sriram Studios </title>
        <meta name='description' content='Sriram Studios provides top of the line film camera units in Chennai, offering the latest equipment for professional film production.' />
      </Helmet>
      <WhatsAppButton />
      <Constructionhero
        handleOrderPopup={handleOrderPopup} />
      <Constructionweprovidetext />
      <Constructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Alexa S35 Cameras"
        description="The Alexa S35 Camera is renowned for its Super 35mm sensor and exceptional image quality, offering filmmakers a balance of resolution and depth. With its advanced color science and dynamic range, the Alexa S35 is ideal for a wide range of productions, from high-end narrative films to commercial work."
      />
      <Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  reverse={true}
  img={Banner2}
  title="Alexa LF Cameras"
  description="The Alexa LF Camera offers exceptional large-format image quality, making it perfect for high-end cinematic productions. Its stunning resolution, dynamic range, and color science create breathtaking visuals. Ideal for feature films and commercials that require the highest level of detail and depth."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  img={Banner3}
  title="Alexa LF Mini Cameras"
  description="The Alexa LF Mini Camera delivers the same large-format image quality as its bigger counterpart but in a smaller, lighter package. This compact camera is perfect for dynamic shooting environments, giving filmmakers the flexibility to capture stunning visuals in tight spaces or handheld shots."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  reverse={true}
  img={Banner4}
  title="Alexa SXT Cameras"
  description="The Alexa SXT Camera is a reliable workhorse known for its powerful image processing and superior color rendition. Perfect for both narrative filmmaking and commercial productions, the Alexa SXT ensures precise skin tones and incredible clarity, providing a cinematic feel in every shot."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  img={Banner5}
  title="Alexa Mini Cameras"
  description="The Alexa Mini Camera offers a versatile and compact solution for productions needing lightweight gear without compromising on image quality. With the renowned ARRI color science, it delivers exceptional performance for documentaries, commercials, and even drone work."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  reverse={true}
  img={Banner6}
  title="Sony Venice 1 Cameras"
  description="The Sony Venice 1 Camera is designed for professional cinema production, delivering full-frame capabilities, stunning color accuracy, and advanced exposure latitude. Known for its flexibility in diverse shooting environments, it excels in both studio and on-location shoots."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  img={Banner7}
  title="Sony Venice 2 Cameras"
  description="The Sony Venice 2 Camera builds on the Venice 1 with improved image processing and enhanced dynamic range. Its dual-base ISO, along with 8K recording capability, makes it perfect for high-resolution productions. It's ideal for capturing visually stunning content in any lighting condition."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  reverse={true}
  img={Banner8}
  title="Red Raptor Cameras"
  description="The Red Raptor Camera is the ultimate tool for filmmakers seeking ultra-high-resolution images with impeccable detail. With 8K resolution and cutting-edge image sensors, it's perfect for feature films, nature documentaries, and productions that demand breathtaking clarity and depth."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  img={Banner9}
  title="Red Gemini Cameras"
  description="The Red Gemini Camera is known for its exceptional low-light performance, offering dual sensitivity modes for versatility in various lighting conditions. With its 5K resolution and advanced color science, the Gemini is perfect for narrative films, music videos, and commercials."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  reverse={true}
  img={Banner10}
  title="Red Helium Cameras"
  description="The Red Helium Camera is renowned for its 8K resolution, providing extraordinary image quality with exceptional detail and texture. Ideal for high-end film production, the Helium's flexibility and stunning color accuracy make it a favorite among directors and cinematographers."
/>
<Constructionweprovide
  handleOrderPopup={handleOrderPopup}
  img={Banner11}
  title="Sony FX9 Cameras"
  description="The Sony FX9 Camera combines full-frame sensor technology with incredible autofocus capabilities, making it perfect for both scripted and documentary-style filmmaking. With 6K resolution down-sampled to 4K, it ensures stunning image quality while maintaining versatility on set."
/>
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Construction"} />
      <Exploredesigns />
      <Callusbanner />

    </div>
  )
}

export default Construction
