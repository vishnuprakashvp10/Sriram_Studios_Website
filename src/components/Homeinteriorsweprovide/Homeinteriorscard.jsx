import React from 'react';

const Homeinteriorscard = ({ handleOrderPopup }) => {
  const style = `
  
    * {
      box-sizing: border-box;
    }

    .app-wrapper {
      display: flex;  
      flex-wrap: wrap;  
      align-items: flex-start; /* Align items to the start */
      justify-content: space-around;
      padding: 2rem;
    }

    .card {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 1px 1px 10px 1px #ddd;
      margin-bottom: 1rem;
      margin-top: 2rem; /* Add top margin */
      max-width: 300px;
      padding: 1rem 0;
      position: relative;
      width: 100%;
      text-align: center;
    }

    .card.free { border-top: 6px solid #1abc9c; }
    .card.basic { border-top: 6px solid #3498db; }
    .card.medium { border-top: 6px solid #9b59b6; }
    .card.pro { border-top: 6px solid #f1c40f; }

    .most-popular {
      font-size: 15px;
      font-weight: 700;
      background-color: #9b59b6;
      color: #fff;
      padding: .25em 1rem;
      border-radius: 15px;
      text-transform: uppercase;
    }

    .card-description h2 { 
      font-size: 26px;
      margin-bottom: .5rem;
    }

    .separator {
      border-bottom: 1px solid #ddd;
      margin: 10px 0;
    }

    .card-features {
      min-height: 150px;
    }

    .card-features ul li { 
      margin-bottom: .5rem;
    }

    .card-action > button {
      border: 3px solid #3498db;
      background-color: transparent;
      color: #3498db;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      padding: .5rem 0;
      width: 100%;
      transition: .3s ease all;
    }

    .card-action > button:hover {
      background-color: #3498db;
      color: #fff;
    }
  `;

  function CardDescription({ title, description }) {
    return (
      <div className="card-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

  function CardFeatures({ data }) {
    return (
      <div className="card-features">
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  function CardAction({ handleOrderPopup }) {
    return (
      <div className="card-action">
        <div className="mx-auto space-x-4">
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-3 px-3 md:py-4 md:px-6 rounded-full"
          >
            Call Now
          </button>
        </div>
      </div>
    );
  };

  function PricingCard({ type, title, description, mostPopular, data, handleOrderPopup }) {
    return (
      <div className={`card ${type}`}>
        {mostPopular && <span className="most-popular">Most Popular</span>}
        <CardDescription title={title} description={description} />
        <div className="separator"></div>
        <CardFeatures data={data} />
        <div className="separator"></div>
        <CardAction handleOrderPopup={handleOrderPopup} />
      </div>
    );
  };

  function App({ handleOrderPopup }) {
    const cardsData = [
      {
        id: 1,
        type: 'free',
        title: 'Standard',
        description: 'Suitable for 1BHK & 2BHK',
        mostPopular: false,
        data: ['Modular Kitchen', 'TV Unit in Living Room', 'Wardrobe in Bedrooms', 'Dressing Unit in Master Bedroom', 'Loft in Wardrobe Above Areas', 'Kitchen Chimney','Curtain rods with Brackets', 'Toilet Accessories Towel Rod', 'Tooth Brush Holder', 'Towel Ring , Soap Case, Hook Rail']
      },
      {
        id: 2,
        type: 'basic',
        title: 'Premium',
        description: 'Suitable for 2BHK & 3BHK',
        mostPopular: false,
        data: ['Modular Kitchen', 'TV Unit in Living Room', 'Wardrobe in Bedrooms', 'Dressing Unit in Master Bedroom', 'Loft in Wardrobe Above Areas', 'False Ceiling with Lighting for Living & Dining Area', 'Wall Mounted Foldable Study Table', 'Toilet Accessories', 'Curtain rods with Brackets', 'Kitchen Chimney', 'Chandelier Ceiling Lamp', 'Two Door Shoe Cabinet', 'Expert Interior Designer Advices' ]
      },
      {
        id: 3,
        type: 'medium',
        title: 'Elite',
        description: 'Suitable for 2BHK, 3BHK & Duplex',
        mostPopular: true,
        data: ['Modular Kitchen', 'TV Unit in Living Room', 'Wardrobe in Bedrooms', 'Dressing Unit in Master Bedroom', 'Loft in Wardrobe Above Areas', 'False Ceiling with Lighting for Living & Dining Area', 'Wall mount Puja Unit', 'Crockery Unit in Dining Area', 'Bathroom Vanity Cabinets', 'Toilet Accessories', 'Curtain rods with Brackets', 'Wall Mounted Foldable Study Table', 'Wall Texture Paints on 1 Wall', 'Kitchen Chimney', 'Two Door Shoe Cabinet', 'Chandelier Ceiling Lamp', 'Expert Interior Designer Advices']
      },
      {
        id: 4,
        type: 'pro',
        title: 'Ultra',
        description: 'Suitable for 3BHK, 4BHK, Villas & more',
        mostPopular: false,
        data: ['We can set up customized Interior packages at your interest.']
      }
    ];

    return (
      <div className="app-wrapper">
        <style dangerouslySetInnerHTML={{ __html: style }} />
        {cardsData.map(props => (
          <PricingCard {...props} key={props.id} handleOrderPopup={handleOrderPopup} />
        ))}
      </div>
    );
  };

  return <App handleOrderPopup={handleOrderPopup} />;
};

export default Homeinteriorscard;
