import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Filmcameraunits from './Filmcameraunits';
import Multicamerasetup from './Multicamerasetup';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Greenmattestudios from './Greenmattestudios';
import Editingsuites from './Editingsuites';
import Audiomixing from './Audiomixing';
import Dubbingstudios from './Dubbingstudios';
import Lensfilters from './Lensfilters';
import Lightsandgrips from './Lightsandgrips';
import Cameralenses from './Cameralenses';
import Gensetrentals from './Gensetrentals';
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
              <Route path="/film-camera-units" element={<Filmcameraunits />} /> 
              <Route path="/multi-camera-setup" element={<Multicamerasetup />} />
              <Route path="/green-matte-studio" element={<Greenmattestudios />} />
              <Route path="/editing-suites" element={<Editingsuites />} />
              <Route path="/audio-mixing" element={<Audiomixing />} />
              <Route path="/dubbing-studios" element={<Dubbingstudios />} />
              <Route path="/lens-filters" element={<Lensfilters />} />
              <Route path="/lights-and-grips" element={<Lightsandgrips />} />
              <Route path="/camera-lenses" element={<Cameralenses />} />
              <Route path="/genset-rentals" element={<Gensetrentals />} />
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