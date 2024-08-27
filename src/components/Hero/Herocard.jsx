import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import OrderPopup from "../../Popup";
import { isMobile } from "react-device-detect";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const Herocard = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderPopup = () => {
    if (isMobile) {
      window.location.href = `tel:+917092805747`;
      return null;
    }
    setShowOrderPopup(!showOrderPopup);
  };

  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="flex items-center justify-center mb-8">
          <div className="py-4 max-w-[1200px] mx-auto">
            <h1 className="text-center text-3xl text-primary font-bold">
            SRIRAM STUDIOS - All In One Production Services in Chennai
            </h1>
            <p className="text-center text-bold py-4 text-white">
            Sriram Studios is a leading film post-production company in Chennai, Tamil Nadu, offering a full spectrum of services designed exclusively for seasoned professionals in the film industry. Our range includes comprehensive digital camera rental services, ensuring you have the top-tier gear you need for cinematic excellence. In addition to our camera services, we specialize in film lights rentals, filters rentals, gensets, lens rentals, and advanced post-production services such as dubbing, mixing, and green matte studio work.
                                    </p>
          </div>
        </div>
      </div>
      <div className="">

      </div>
            {/* Centered button */}
            <div className="flex justify-center mt-6">
        <button
          onClick={handleOrderPopup}
          className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-4 px-4 mt-4 md:py-6 md:px-8 rounded-full"
        >
          Call Now
        </button>
      </div>
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Services We Provide Card"} />
    </div>
  );
};

export default Herocard;
