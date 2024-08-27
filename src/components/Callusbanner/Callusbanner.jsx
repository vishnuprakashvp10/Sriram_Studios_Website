import React from "react";
import Banner from "../../assets/Hero/banner.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Callusbanner = () => {
  return (
    <div className="mb-20 bg-gray-100 text-black" style={BannerImg}>
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 mx-auto text-center sm:text-left">
          <h1 className="text-xl text-white text-center sm:text-4xl font-semibold">
          Reach Us to Elevate Your Production
          </h1>
          <p className="text-white text-center hover:scale-105 sm:text-2xl font-semibold">
            <div>
            <span>Contact us:</span>{" "} </div>
            <a href="tel:04423751935" className="underline">
            044 23751935
            </a>{" "}
            <div>
            <a href="tel:+919840041312" className="underline">
            +91 9840041312
            </a></div>
          </p>
          <p className="text-white hover:scale-110 text-center sm:text-2xl font-semibold">
            <a href="mailto:sriramstudioschennai@gmail.com" className="underline">
            sriramstudioschennai@gmail.com
            </a>
          </p>
          <p className="text-white text-center sm:text-2xl font-semibold">
          Sriram Studios is dedicated to ensuring that top-tier film production services are accessible for every professional project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Callusbanner;
