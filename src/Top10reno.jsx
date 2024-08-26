import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Banner from "./assets/Hero/blog-renov.png";
import Image1 from "./assets/Hero/desq.jpeg";
import Image2 from "./assets/Hero/rennow.webp";
import Image3 from "./assets/Hero/blog-ren-3.webp";
import Image4 from "./assets/Hero/blog-ren-4.jpg";
import Image5 from "./assets/Hero/living.jpg";
import Image6 from "./assets/Hero/blog-ren-6.avif";
import Image7 from "./assets/Hero/blog-ren-7.webp";
import Image8 from "./assets/Hero/blog-ren-8.jpg";
import Image9 from "./assets/Hero/blog-ren-9.png";
import Image10 from "./assets/Hero/blog-ren-10.jpg";
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
      answers: [
        "DesignQube",
        "HomeLane",
        "Livspace",
        "Infratech Builders",
        "The Studio",
        "Deejos Interiors",
        "Vismaya Interiors",
        "D'LIFE Home Interiors",
        "Zenith Interior",
        "V5 Design Studio",
      ],
    },
  ];
  
  

  export const questions = [
    {
      question: "What should I consider when planning a home renovation project?",
      answer: "Start by defining your goals, budget, and timeline. Consider the scope of the project, including any structural changes, design preferences, and material choices. It's also important to consult with a professional to understand the feasibility and potential challenges."
    },
    {
      question: "How can I choose the right home renovation contractor?",
      answer: "Evaluate contractors based on their experience, portfolio, customer reviews, and credentials. It's crucial to get detailed quotes, ask for references, and ensure they are licensed and insured. Communication and transparency are key factors in making the right choice."
    },
    {
      question: "How do I manage my budget during a home renovation?",
      answer: "Set a realistic budget that includes a contingency fund for unexpected expenses. Prioritize essential renovations and be clear about your financial limits with your contractor. Regularly review costs and make adjustments as needed to stay within budget."
    },
    {
      question: "What are the common mistakes to avoid in home renovations?",
      answer: "Common mistakes include underestimating the budget, not planning for enough time, and choosing materials or designs that don’t match your lifestyle. It's also important to avoid DIY work that requires professional skills and not obtaining the necessary permits."
    },
    {
      question: "How can I ensure a home renovation adds value to my property?",
      answer: "Focus on renovations that enhance functionality, energy efficiency, and curb appeal. Kitchen and bathroom upgrades, adding living space, and improving the overall flow of the home are generally high-value projects. Consulting a real estate expert can also provide insights into what buyers in your area are looking for."
    },
  ];
  

const HomeConstructionsTop10 = () => {
  const [cards] = useState(questions);

  return (
    <div>
    <Helmet>
        <title>Top 10 Home Renovators in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Explore the leading home renovation companies in Chennai for expert transformations and quality craftsmanship.' />
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
      Check Out The Top 10 Home Renovation Companies In Chennai
      </h1>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Chennai, a city where tradition meets modernity, is home to some of the most innovative home renovation companies. With a growing demand for stylish and functional living spaces, these companies provide a wide array of services, including interior and exterior painting, modular kitchen designs, and complete home makeovers. Whether you are looking to update a single room or embark on a full-scale renovation project, the top home renovation companies in Chennai offer tailored solutions that blend creativity with practicality. Their expertise in interior design and renovation ensures that every project reflects the client's personality while enhancing the space's functionality and aesthetic appeal. Discover how these top 10 home renovation companies in Chennai can transform your home into a stunning masterpiece.
            </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}>
  <a href="https://www.designqube.in">1. DesignQube</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image1})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  DesignQube is a leading home renovation company in Chennai, offering comprehensive solutions for interior design, architecture, and renovation. Their team of skilled architects and designers focuses on creating personalized spaces that blend functionality with aesthetics. Specializing in modern and contemporary designs, DesignQube ensures every project meets high standards of quality and innovation. With expertise in interior and exterior painting, they bring a fresh and vibrant look to homes, enhancing both value and comfort.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ganesh Kumar</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2010</li>
  <li><span className='font-bold'>Email:</span> contact@designqube.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.designqube.in">https://www.designqube.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 97909 00018</li>
  <li><span className='font-bold'>Address:</span> 41/19, North Boag Road, T. Nagar, Chennai - 600017</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}>
  <a href="https://www.homelane.com">2. HomeLane</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image2})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  HomeLane is a pioneer in the home renovation industry in Chennai, known for its end-to-end interior design services. They provide custom solutions for kitchens, wardrobes, and living spaces, ensuring seamless integration of design and functionality. With a focus on delivering on-time and on-budget projects, HomeLane offers hassle-free renovation services, including interior and exterior painting, to transform homes into elegant and personalized spaces.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Srikanth Iyer</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2014</li>
  <li><span className='font-bold'>Email:</span> care@homelane.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.homelane.com">https://www.homelane.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 1800 102 4663</li>
  <li><span className='font-bold'>Address:</span> No.3, Rajiv Gandhi Salai, Thoraipakkam, Chennai - 600097</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.livspace.com">3. Livspace</a></h1>

<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image3})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Livspace is a leading name in home renovation services in Chennai, offering personalized design solutions for residential spaces. Their expert team specializes in modular kitchens, wardrobes, and complete home makeovers, focusing on delivering high-quality finishes and innovative designs. Livspace's commitment to excellence is evident in their use of premium materials and advanced technology, ensuring every project is executed to perfection. They also provide comprehensive interior and exterior painting services to enhance your home's appeal.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Anuj Srivastava and Ramakant Sharma</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2015</li>
  <li><span className='font-bold'>Email:</span> care@livspace.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.livspace.com">https://www.livspace.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 91488 99808</li>
  <li><span className='font-bold'>Address:</span> Olympia Tech Park, SIDCO Industrial Estate, Guindy, Chennai - 600032</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.aamphaa.com">4. Aamphaa Projects</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image4})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Aamphaa Projects is a trusted home renovation company in Chennai, offering expert services in interior design and construction. Known for their attention to detail and innovative solutions, they specialize in transforming spaces into functional and aesthetically pleasing environments. With expertise in both residential and commercial projects, Aamphaa Projects delivers comprehensive solutions that include interior and exterior painting, ensuring a flawless finish and exceptional results.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ramesh S</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Email:</span> info@aamphaa.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.aamphaa.com">https://www.aamphaa.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98410 32366</li>
  <li><span className='font-bold'>Address:</span> 77, Arcot Road, Kodambakkam, Chennai - 600024</li>
</ul>




<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://infratechbuilders.in/">5. Infratech Builders</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image5})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Infratech Builders specializes in the construction of premium sports turfs for football, cricket, and other sports. They use high-quality synthetic and natural grass to ensure durability and excellent playing conditions. Their services include design, installation, and maintenance of sports surfaces, with a focus on delivering top-notch performance and aesthetics
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

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.deejos.com">6. Deejos Interiors</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image6})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Deejos Interiors is a leading home renovation company in Chennai, offering innovative solutions for both residential and commercial spaces. With a focus on quality craftsmanship and client satisfaction, they provide a range of services, including interior design, modular kitchens, and comprehensive renovation solutions. Their expertise in interior and exterior painting ensures a flawless finish that enhances the beauty and functionality of your space.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> K. D. Lakshmanan</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2011</li>
  <li><span className='font-bold'>Email:</span> <a href="mailto:sales@deejos.com" className=' hover:text-primary'>sales@deejos.com</a></li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.deejos.com">https://www.deejos.com</a></span></li>
  <li><span className='font-bold'>Phone Number:</span> +91 98848 99133</li>
  <li><span className='font-bold'>Address:</span> 3rd Floor, SMS Centre, 149/69, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://vismayainteriors.com">7. Vismaya Interiors</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image7})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Vismaya Interiors is a premier home renovation and interior design company in Chennai, offering bespoke solutions that combine style with functionality. Their experienced team of designers and craftsmen works closely with clients to create personalized spaces that meet individual needs and preferences. Vismaya Interiors specializes in modular kitchens, wardrobe designs, and interior and exterior painting services, ensuring a seamless and satisfying renovation experience.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> V. Saravanan</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2012</li>
  <li><span className='font-bold'>Email:</span> <a href="mailto:info@vismayainteriors.com" className=' hover:text-primary'>info@vismayainteriors.com</a></li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="http://www.vismayainteriors.com">http://www.vismayainteriors.com</a></span></li>
  <li><span className='font-bold'>Phone Number:</span> +91 90928 44884</li>
  <li><span className='font-bold'>Address:</span> 59, 3rd Main Road, Gandhi Nagar, Adyar, Chennai - 600020</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.dlifeinteriors.com">8. D'LIFE Home Interiors</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image8})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
D'LIFE Home Interiors is a leading interior design and renovation company in Chennai, known for its comprehensive services and commitment to quality. They offer custom solutions for kitchens, wardrobes, and complete home transformations, ensuring every project is tailored to the client's needs. With expertise in interior and exterior painting, D'LIFE Home Interiors enhances the aesthetic appeal and functionality of homes, delivering exceptional results.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Dheeraj R. Nair</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2004</li>
  <li><span className='font-bold'>Email:</span> <a href="mailto:info@dlifeinteriors.com" className=' hover:text-primary'>info@dlifeinteriors.com</a></li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.dlifeinteriors.com">https://www.dlifeinteriors.com</a></span></li>
  <li><span className='font-bold'>Phone Number:</span> +91 90202 09000</li>
  <li><span className='font-bold'>Address:</span> 2nd Floor, Seshadri Road, Alwarpet, Chennai - 600018</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.zenithinterior.com">9. Zenith Interior</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image9})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Zenith Interior is a top home renovation and interior design company in Chennai, offering a wide range of services to transform spaces into functional and aesthetically pleasing environments. Their team of skilled professionals provides personalized solutions for kitchens, living rooms, and more, focusing on delivering high-quality finishes and innovative designs. With expertise in interior and exterior painting, Zenith Interior ensures a stunning and durable finish for every project.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Karthik Raja</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2010</li>
  <li><span className='font-bold'>Email:</span> <a href="mailto:info@zenithinterior.com" className=' hover:text-primary'>info@zenithinterior.com</a></li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="http://www.zenithinterior.com">http://www.zenithinterior.com</a></span></li>
  <li><span className='font-bold'>Phone Number:</span> +91 98847 58856</li>
  <li><span className='font-bold'>Address:</span> No. 10, 2nd Floor, Chari Street, T. Nagar, Chennai - 600017</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.v5designstudio.com">10. V5 Design Studio</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image10})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
V5 Design Studio is a renowned interior design and home renovation company in Chennai, offering innovative and creative solutions for residential and commercial spaces. Their team of expert designers and craftsmen ensures that every project reflects the client's vision and lifestyle. Specializing in modular kitchens, wardrobes, and interior and exterior painting, V5 Design Studio transforms spaces with a perfect blend of aesthetics and functionality.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Vinod Kumar</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2015</li>
  <li><span className='font-bold'>Email:</span> <a href="mailto:contact@v5designstudio.com" className=' hover:text-primary'>contact@v5designstudio.com</a></li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="http://www.v5designstudio.com">http://www.v5designstudio.com</a></span></li>
  <li><span className='font-bold'>Phone Number:</span> +91 98401 31235</li>
  <li><span className='font-bold'>Address:</span> 102/2, G. N. Chetty Road, T. Nagar, Chennai - 600017</li>
</ul>



      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Chennai's dynamic home renovation industry offers a multitude of options for those seeking to enhance their living spaces. The top home renovation companies highlighted in this guide are known for their expertise in interior and exterior painting, innovative design solutions, and commitment to quality. Whether you're looking to refresh a single room or undertake a complete home transformation, these companies provide tailored services that blend style and functionality. By partnering with one of these reputable firms, you can achieve a space that reflects your unique taste and enhances the overall appeal and value of your home. Explore the possibilities and let these top companies in Chennai help you create the home of your dreams.
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
