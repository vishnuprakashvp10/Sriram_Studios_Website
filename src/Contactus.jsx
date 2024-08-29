import React from 'react'
import Contactushero from './components/Contactus/Contactushero'
import Contactusdetails from './components/Contactus/Contactusdetails'
import WhatsAppButton from './whatsappbutton'
import { Helmet } from 'react-helmet-async'


const Contactus = () => {
  return (
    <div className="bg-black ">
      <Helmet>
        <title>Contact Us &#124; Sriram Studios, Chennai</title>
        <meta name='description' content="Get in touch with Sriram Studios, our dedicated team is ready to assist you with top-notch services and solutions for all your requirements." />
      </Helmet>
      <WhatsAppButton />
      <Contactushero />
      <Contactusdetails />
    </div>
  )
}

export default Contactus  