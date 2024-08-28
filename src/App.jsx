import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Construction from './Construction';
import Commercialinteriordesigns from './Commercialinteriordesigns';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homeinteriors from './Homeinteriors';
import Modularkitchen from './Modularkitchen';
import Livingroomhall from './Livingroomhall';
import Falseceiling from './Falseceiling';
import Cupboard from './Cupboard';
import Turfconstruction from './Turfconstruction';
import Paintingservices from './Paintingservices';
import Renovationservices from './Renovationservices';
import Privacypolicy from './Privacypolicy';
import Faq from './Faq';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import ScrollToTop from './ScrollToTop';
import OrderPopup from './Popup';
import { FormContextProvider } from './contexts/FormSubmitted.context';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './components/NotFound';

const App = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup((e) => !e);
  };

  return (
    <>
      <HelmetProvider>
        <FormContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar orderPopup={showOrderPopup} handleOrderPopup={handleOrderPopup} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/film-camera-units" element={<Construction />} /> 
              <Route path="/multi-camera-setup" element={<Commercialinteriordesigns />} />
              <Route path="/green-matte-studio" element={<Homeinteriors />} />
              <Route path="/editing-suites" element={<Modularkitchen />} />
              <Route path="/audio-mixing" element={<Livingroomhall />} />
              <Route path="/dubbing-studios" element={<Falseceiling />} />
              <Route path="/lens-filters" element={<Cupboard />} />
              <Route path="/lights-and-grips" element={<Turfconstruction />} />
              <Route path="/camera-lenses" element={<Paintingservices />} />
              <Route path="/renovation-services" element={<Renovationservices />} />
              <Route path="/privacy-policy" element={<Privacypolicy />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <OrderPopup type={"Popup"} orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} timeoutReq={true} /> {/* Important */}
          </BrowserRouter>
        </FormContextProvider>
      </HelmetProvider>
    </>
  );
};

export default App;