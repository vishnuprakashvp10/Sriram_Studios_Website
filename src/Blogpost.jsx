import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Img1 from './assets/Hero/blog-home-cons.jpg'; 
import Img2 from './assets/Hero/blog-turf.jpg';
import Img3 from './assets/Hero/blog-renoo.jpg';
import Img4 from './assets/Hero/blog-interior.jpg';
import Img5 from './assets/Hero/blog-paint.jpeg';
import { Helmet } from 'react-helmet-async'

 
const BlogData = [
  {
    id: 1,
    img: Img1,
    name: 'Top 10 Home Construction Companies in Chennai',
    text: "Here are the top 10 home construction companies in Chennai, known for their quality craftsmanship and exceptional service.",
  },
  {
    id: 2,
    name: 'Top 10 Interior Designing Companies in Chennai',
    text: 'Here are the top 10 interior designing companies in Chennai renowned for their creative excellence and transformative designs.',
    img: Img4,
  },
  {
    id: 3,
    name: 'Top 10 Multi-Turf Construction Companies in Chennai',
    text: "Find the top 10 multi-turf construction companies in Chennai to ensure the best quality for your sports or recreational area.",
    img: Img2,
  },
  {
    id: 4,
    name: 'Top 10 Renovation Companies in Chennai',
    text: "Explore the top 10 renovation companies in Chennai that specialize in turning your vision into reality with exceptional craftsmanship.",
    img: Img3,
  },
  {
    id: 5,
    name: 'Top 10 Painting Companies in Chennai',
    text: 'Discover the top 10 painting companies in Chennai, each offering exceptional quality and a wide range of color options to enhance your home. ',
    img: Img5,
  },
];

const Blogpost = ({ handleOrderPopup }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadMore = (id) => {
    switch (id) {
      case 1:
        navigate('/blog-post/top-10-construction-companies-in-chennai');
        break;
      case 2:
        navigate('/blog-post/top-10-interior-designing-companies-in-chennai');
        break;
      case 3:
        navigate('/blog-post/top-10-turf-construction-companies-in-chennai');
        break;
      case 4:
        navigate('/blog-post/top-10-home-renovation-companies-in-chennai');
        break;
      case 5:
        navigate('/blog-post/top-10-painting-services-companies-in-chennai');
        break;
    }
  };

  return (
    <div className="ml-4">
      <Helmet>
        <title>Blog &#124; Infratech Builders</title>
        <meta name='description' content='Read Infratech Builders&#39; blogs to learn more about construction, interior, renovation and painting companies in Chennai.' />
      </Helmet>
      <h1 className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl  md:text-5xl" style={{ color: 'orange' }}>
        BLOG POSTS
      </h1>
      <div className="py-14 mb-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {BlogData.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl mt-20 bg-white/100 hover:bg-primary relative shadow-xl duration-high group max-w-[300px] h-[450px]"
              >
                <div className="h-[150px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[250px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="py-2 text-gray-500 group-hover:text-white duration-high text-sm">
                    {service.text}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-3 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleReadMore(service.id)} // Pass id to handleReadMore
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
