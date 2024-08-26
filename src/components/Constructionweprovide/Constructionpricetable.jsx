import React from 'react';
import Banner from "../../assets/Hero/contactusheroblock.jpg";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Constructionpricetable = () => {
  return (
    <div className="mb-20 bg-gray-100 text-black" style={BannerImg}>
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 mx-auto text-center sm:text-left">
          <h1 className="text-xl text-black text-center sm:text-4xl font-semibold">
          Starts from Rs 2150 per sqft
          </h1>
          <p className="text-black text-center sm:text-2xl font-semibold">
            <div>
            <span>Construction Cost per sqft</span>{" "} </div>
            <div>
</div>
          </p>


        </div>
      </div>
    </div>
  );
};

export default Constructionpricetable;
