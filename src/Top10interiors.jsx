import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Banner from "./assets/Hero/int-hero.jpg";
import Image1 from "./assets/Hero/designqube.jpg";
import Image2 from "./assets/Hero/aamphaa.jpeg";
import Image3 from "./assets/Hero/livingroom.jpg";
import Image4 from "./assets/Hero/deejo.jpg";
import Image5 from "./assets/Hero/vismaya.jpg";
import Image6 from "./assets/Hero/studio.jpg";
import Image7 from "./assets/Hero/zenith.jpeg";
import Image8 from "./assets/Hero/v5.jpg";
import Image9 from "./assets/Hero/dlife.jpg";
import Image10 from "./assets/Hero/k2india.jpg";
import { Helmet } from 'react-helmet-async'

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const table = [
  {
    question: "TABLE OF CONTENTS",
    answers: ["DesignQube", "Infratech Builders", "Aamphaa Projects", "Deejos Interiors", "Vismaya Interiors", "The Studio", "Zenith Interior", "V5 Design Studio", "D’LIFE Home Interiors", "K2India"],
  },
];

export const questions = [
  {
    question: "How can I evaluate the credibility of these interior designers before making a decision?",
    answer: "To assess credibility, review their portfolio of completed projects, check client testimonials, verify their certifications, and ask for references from past clients. Visiting previous design projects in person can also give you a sense of their style and quality."
  },
  {
    question: "Do these interior designers specialize in both residential and commercial projects in Chennai?",
    answer: "Yes, many interior designers work on both residential and commercial projects. Their portfolios often include a variety of spaces such as homes, offices, retail stores, and restaurants. You can review their past work on their websites to see if their style matches your needs."
  },
  {
    question: "How do these interior designers incorporate sustainable and eco-friendly practices in their projects?",
    answer: "Several interior designers emphasize sustainability by using eco-friendly materials, energy-efficient lighting, and sustainable furniture. They may also focus on creating designs that maximize natural light and reduce energy consumption. For more details, ask about their approach to sustainable design during consultations."
  },
  {
    question: "Are customization options available for home interiors from these designers?",
    answer: "Yes, most interior designers offer extensive customization options to meet your specific needs. This can include tailored furniture designs, custom color schemes, and personalized layouts. Discuss your vision with the designer to ensure they can create a space that reflects your style."
  },
  {
    question: "What should I consider when choosing between different interior design styles for my home?",
    answer: "Consider your personal taste, lifestyle, and how you want your space to feel. Different styles offer varying aesthetics and functionalities, such as modern minimalism, classic elegance, or rustic charm. It's also important to think about how the design will complement the architecture of your home."
  },
];


const HomeConstructionsTop10 = () => {
  const [cards] = useState(questions);

  return (
    <div>
    <Helmet>
        <title>Top 10 Interior Design Companies in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Discover the leading interior designing companies in Chennai, offering expert insights on creating stylish and functional spaces.' />
    </Helmet>
    <div className='text-xl' >
      <div className="mb-2 bg-gray-100  text-black" style={BannerImg}>
        <div className="container py-28 ">
          <div className="space-y-6 mx-auto">
          </div>
        </div>
      </div>
      <div className="ml-4">
      <h1 className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl md:text-3xl" style={{color: 'orange'}}>
      Check Out The Top 10 Interior Designing Companies In Chennai
      </h1>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Chennai, a vibrant and dynamic city in India, is renowned for its rich cultural heritage and architectural beauty. As the city continues to grow and modernize, the demand for innovative and creative interior design solutions has surged. From luxurious residential spaces to functional commercial environments, the top interior design companies in Chennai are redefining the way we live and work. These firms are at the forefront of the industry, offering a blend of traditional elegance and contemporary style, tailored to meet the unique needs of their clients. This guide highlights the leading interior designers in Chennai, showcasing their expertise, creativity, and dedication to transforming spaces into stunning works of art. Whether you are looking to revamp your home or enhance your workspace, these companies provide comprehensive design services that cater to every aesthetic and functional requirement. Explore the profiles of the top 10 interior design companies in Chennai and discover how they can bring your vision to life.
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.designqube.in">1.DesignQube</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image1})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      DesignQube is a prominent interior design company in Chennai, specializing in sustainable and innovative architectural and interior design solutions. Known for their cutting-edge designs in residential, commercial, and hospitality projects, DesignQube focuses on creating functional and aesthetically pleasing environments that enhance the living experience. Their commitment to quality and customer satisfaction makes them a top choice for interior design services in Chennai.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span> Arun T</li>
        <li><span className='font-bold'>Year of Establishment:</span> 2010</li>
        <li><span className='font-bold'>Email:</span> chennai@designqube.in</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.designqube.in">https://www.designqube.in</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 95000 00964</li>
        <li><span className='font-bold'>Address:</span> 8/12, Vaidyaraman Street, T Nagar, Chennai - 600017</li>
      </ul>
      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://infratechbuilders.in/">2. Infratech Builders</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image3})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Infratech Builders is a leading name in the interior design industry in Chennai, offering comprehensive home interior solutions through an innovative online platform. They provide end-to-end services, from design consultation to installation, ensuring a hassle-free experience for homeowners. Their team of experienced designers collaborates with trusted suppliers to deliver personalized and stylish interiors, making Livspace a preferred choice for home renovations and interior design in Chennai.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Suresh, Laxmanan</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2014</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span> <span className='underline hover:text-primary'><a href="https://infratechbuilders.in/">https://infratechbuilders.in/</a></span></li>
        <li> <a href="tel:+917092805747"><span className='font-bold'>Contact Number:</span>  <span className='underline hover:text-primary'>+91 7092805747</span></a></li>
        <li> <a href="https://www.google.com/maps/place/13%C2%B004'23.7%22N+80%C2%B011'12.0%22E/@13.0732603,80.1841011,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0732603!4d80.186676?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" ><span className='font-bold'>Address:</span>  <span className='underline hover:text-primary'>Door no: 74, Ettiappan street, Golden George Nagar, Nerkundram, Chennai-600107</span></a></li>
        <li><a href="mailto:enquiries@infratechbuilders.in"><span className='font-bold'>Email:</span>  <span className='underline hover:text-primary'>enquiries@infratechbuilders.in</span></a></li>
      </ul>


      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.aamphaa.com">3. Aamphaa Projects</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image2})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Aamphaa Projects is a well-regarded interior design firm in Chennai, specializing in residential interior design and home renovation services. With a focus on customized solutions, Aamphaa Projects caters to the unique preferences and needs of each client. Their expertise in crafting functional and stylish interiors has earned them a reputation for excellence in the Chennai interior design scene.
            </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Karthikeyan K</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2010</li>
        <li><span className='font-bold'>Email:</span> info@aamphaa.com</li>
        <li><span className='font-bold'>Website:</span>  <span className=' underline'><a href="http://www.aamphaa.com">http://www.aamphaa.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 99410 15050</li>
        <li><span className='font-bold'>Address:</span> No 2/1, 5th Floor, Rathna Building, Triplicane High Road, Triplicane, Chennai - 600005</li>
      </ul>

 

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.deejos.com">4.Deejos Interiors</a></h1>
      
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image4})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Deejos Interiors is a leading interior design company in Chennai known for its modern and contemporary design approach. They offer a wide range of interior design services for residential and commercial spaces, focusing on functionality, aesthetics, and client satisfaction. Their commitment to delivering high-quality and timely solutions has made them a trusted name in the Chennai interior design industry.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Vijay Raj</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2008</li>
        <li><span className='font-bold'>Email:</span>  info@deejos.com</li>
        <li> <span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.deejos.com">https://www.deejos.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 81100 71155</li>
        <li><span className='font-bold'>Address:</span>  New No: 63, 6th Avenue, Ashok Nagar, Chennai - 600083</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.vismayainteriors.com">5.Vismaya Interiors</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image5})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Vismaya Interiors is a top-rated interior design firm in Chennai, offering a wide range of interior design services for residential and commercial projects. Their team of skilled designers focuses on creating spaces that are both beautiful and functional, ensuring that each project reflects the client's vision and lifestyle. With a strong emphasis on quality and customer satisfaction, Vismaya Interiors has become a leading choice for interior design in Chennai.
</p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Saravanan S</li>
        <li><span className='font-bold'>Year of Establishment: </span> 2012</li>
        <li><span className='font-bold'>Email:</span>  info@vismayainteriors.com</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="http://www.vismayainteriors.com">http://www.vismayainteriors.com</a></span></li>
        <li> <span className='font-bold'>Contact Number:</span> +91 98410 67496</li>
        <li><span className='font-bold'>Address: </span> No 8, M.T.H Road, Ambattur, Chennai - 600053.</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.thestudio.design">6. The Studio</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image6})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      India Builders Limited is a renowned and highly respected enterprise in Chennai, specializing in real estate development and construction. As a leading builder in the city, they are known for delivering practical and visually stunning apartments, featuring grand exteriors crafted with cutting-edge technology and equipped with essential amenities.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      The Studio is a premier interior design firm in Chennai, known for its bespoke design services and attention to detail. Specializing in luxury interiors, they offer customized solutions that combine functionality with elegance. The Studio's team of talented designers works closely with clients to create unique spaces that reflect their individual tastes and preferences, making them a standout choice for interior design services in Chennai.
            </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Akshaya V</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2015</li>
        <li><span className='font-bold'>Email: </span>  thestudio@design.com</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.thestudio.design">https://www.thestudio.design</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 78258 99888</li>
        <li><span className='font-bold'>Address:</span>   New No. 22, 2nd Cross Street, CIT Colony, Mylapore, Chennai - 600004</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.zenithinterior.com">7.Zenith Interior</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image7})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Zenith Interior is a leading interior design company in Chennai, specializing in creating modern and stylish interiors for residential and commercial clients. With a focus on quality craftsmanship and customer satisfaction, Zenith Interior offers comprehensive design solutions that transform spaces into functional and aesthetically pleasing environments. Their dedication to excellence has established them as a top choice for interior design in Chennai.
            </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Venu Gopal</li>
        <li><span className='font-bold'>Year of Establishment: </span> 2002</li>
        <li><span className='font-bold'>Email: </span> info@zenithinterior.com</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="http://www.zenithinterior.com">http://www.zenithinterior.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>   +91 98400 11011</li>
        <li><span className='font-bold'>Address:</span>  No.37, Veerabadran Street, Nungambakkam, Chennai - 600034</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.v5designstudio.com">8.V5 Design Studio</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image8})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      V5 Design Studio is a renowned interior design firm in Chennai, offering innovative and creative design solutions for residential and commercial spaces. Their team of experienced designers is dedicated to creating unique and functional interiors that meet the specific needs of each client. V5 Design Studio's commitment to quality and attention to detail have made them a trusted name in the Chennai interior design industry.
            </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Vivek K</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2011</li>
        <li><span className='font-bold'>Email:</span>  contact@v5designstudio.com</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="http://www.v5designstudio.com">http://www.v5designstudio.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 90030 20000</li>
        <li><span className='font-bold'>Address:</span>  No. 85, 5th Street, Padmanabha Nagar, Adyar, Chennai - 600020</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.dlifeinteriors.com">9. D’LIFE Home Interiors</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image9})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      D’LIFE Home Interiors is a full-service interior design company in Chennai, offering turnkey solutions for homes. Their services include modular kitchens, wardrobes, and complete home interior solutions. With a focus on quality and customer satisfaction, D’LIFE Home Interiors has established itself as a leading provider of interior design services in Chennai, known for their ability to create stylish and functional living spaces.
            </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Abdul Latheef</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2004</li>
        <li><span className='font-bold'>Email:</span>  chennai@dlifeinteriors.com</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.dlifeinteriors.com">https://www.dlifeinteriors.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span> +91 95672 34344</li>
        <li> <span className='font-bold'>Address:</span> No.12/31, 2nd Main Road, Gandhi Nagar, Adyar, Chennai - 600020</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.k2india.com">10. K2India</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image10})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      K2India is a premier interior design and architectural firm in Chennai, known for its luxurious and sophisticated designs. They offer comprehensive design services for residential and commercial projects, focusing on creating spaces that are both beautiful and functional. K2India's team of talented designers works closely with clients to ensure each project reflects their unique style and vision, making them a top choice for high-end interior design in Chennai.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>   Sunita Kohli</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2010</li>
        <li><span className='font-bold'>Email:</span>  info@k2india.com</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="http://www.k2india.com">http://www.k2india.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>   044-40014410</li>
        <li><span className='font-bold'>Address:</span>   +91 124 414 2801</li>
      </ul>


      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
The interior design industry in Chennai is thriving, with a diverse range of companies offering innovative solutions to meet the growing demand for stylish and functional spaces. From residential homes to commercial offices, the top interior design companies in Chennai have showcased their ability to blend creativity with practicality, creating environments that reflect the unique tastes and needs of their clients. These firms stand out for their commitment to quality, attention to detail, and dedication to delivering exceptional results. By leveraging their extensive experience and industry expertise, they transform spaces into captivating works of art that not only enhance the aesthetics but also improve the quality of life for those who inhabit them. Whether you're looking to renovate a single room or undertake a complete transformation, the interior design firms featured in this guide offer a wide array of services and styles to choose from. By partnering with one of these top companies, you can bring your vision to life, creating a space that truly feels like home. Explore the possibilities and let these talented designers help you redefine your living and working environments in the bustling city of Chennai.
      </p>
      </div>
      </div>
      <p className="text-center py-2 mb-8 text-2xl md:ml-4 max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>
        Frequently Asked Questions:
      </p>
      <section className="max-w-xl mx-auto mb-8 px-4 grid grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <SingleQuestion {...card} key={index} />
        ))}
      </section>
    </div>

  );
}

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border border-black rounded-lg bg-white">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer border-gray-400"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <BiMinus /> : <BsPlusLg />}
        </button>
      </article>

      {showAnswer && (
        <article className="border-t border-gray-400 p-4 lg:p-6">
          <p>{answer}</p>
        </article>
      )}
    </div>
  );
}


const SingleQuestion2 = ({ question, answers }) => {
  const [showAnswer, setShowAnswer] = useState(true); // Default state is true to keep answers always opened

  return (
    <div className="border border-black rounded-lg bg-primary md:width-320px width-500px">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer text-center font-bold text-white"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <BiMinus className="text-white" /> : <BsPlusLg className="text-white" />}
        </button>
      </article>

      {showAnswer && (
        <article className="border-t border-black p-4 lg:p-6 font-bold text-white">
          <ul>
            {answers.map((answer, index) => (
              <li
                key={index}
                style={{ listStyleType: 'disc', listStylePosition: 'inside' }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
};

export default HomeConstructionsTop10;
