import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Banner from "./assets/Hero/turf-bloggg.jpg";
import Image1 from "./assets/Hero/turftech.jpg";
import Image2 from "./assets/Hero/arenaturf.jpg";
import Image3 from "./assets/Hero/footballturf.jpg";
import Image4 from "./assets/Hero/sporturf.jpg";
import Image5 from "./assets/Hero/perfectturf.webp";
import Image6 from "./assets/Hero/turfmaster.webp";
import Image7 from "./assets/Hero/proturf.jpeg";
import Image8 from "./assets/Hero/synturf.webp";
import Image9 from "./assets/Hero/urban.jpg";
import Image10 from "./assets/Hero/field.jpeg";
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
        "Infratech Builders",
        "TurfTech India",
        "Arena Turf",
        "Sporturf",
        "Perfect Turf",
        "Turf Masters",
        "Pro Turf Solutions",
        "Synthetic Turf Systems",
        "Urban Turf Construction",
        "Field Solutions",
      ],
    },
  ];
  

  export const questions = [
    {
      question: "How can I evaluate the credibility of these turf construction companies before making a decision?",
      answer: "To assess credibility, review their portfolio of completed projects, read customer reviews, check their certifications, and ask for references. Visiting previous installations and inspecting the quality of their turf systems can also provide valuable insights."
    },
    {
      question: "Do these turf construction companies handle both residential and commercial projects?",
      answer: "Yes, many turf construction companies specialize in both residential and commercial projects. Their portfolios often include a range of installations such as sports fields, playgrounds, lawns, and commercial landscaping. Reviewing their past work can help determine if they meet your specific needs."
    },
    {
      question: "How do these turf construction companies incorporate sustainable and eco-friendly practices in their projects?",
      answer: "Several companies focus on sustainability by using eco-friendly materials, installing water-efficient irrigation systems, and employing energy-efficient practices. For detailed information on their sustainability initiatives, inquire about their approach during your consultation."
    },
    {
      question: "Are customization options available for synthetic turf installations?",
      answer: "Yes, most turf construction companies offer customization options such as different turf types, infill materials, and drainage systems to meet specific requirements. Discuss your needs with the company to ensure they can tailor the installation to your preferences."
    },
    {
      question: "What should I consider when choosing between different types of turf for my project?",
      answer: "Consider the intended use of the space, maintenance requirements, durability, and appearance. Different types of turf are designed for specific applications, such as sports fields, playgrounds, or residential lawns. It's important to select a turf that meets both your aesthetic and functional needs."
    },
  ];  

const HomeConstructionsTop10 = () => { 
  const [cards] = useState(questions);

  return (
    <div>
    <Helmet>
        <title>Top 10 Turf Constructors in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Explore the leading turf construction companies in Chennai offering expert solutions for high-quality sports turf and outdoor surfaces.' />
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
      Check Out The Top 10 Turf Construction Companies in Chennai
      </h1>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Chennai, with its thriving sports culture, is home to several premier companies specializing in sports turf construction. These companies offer expert services in creating high-quality synthetic and natural grass surfaces for various sports facilities, ensuring durability and optimal performance. From football pitches to cricket grounds, their services include everything from design and installation to maintenance. Many of these companies also provide additional services such as interior and exterior painting for related infrastructure. Discover the top 10 sports turf construction companies in Chennai that can help transform your sports facility into a top-notch venue with exceptional turf solutions
            </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://infratechbuilders.in/">1. Infratech Builders</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image3})` }}
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

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}>
  <a href="https://www.turftechindia.com">2. TurfTech India</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image1})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  TurfTech India provides comprehensive solutions for sports turf construction, including synthetic and natural grass fields. They offer expertise in design, installation, and maintenance, focusing on creating high-quality playing surfaces that meet international standards. Their services also extend to related infrastructure, including interior and exterior painting.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ravi Shankar</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2008</li>
  <li><span className='font-bold'>Email:</span> contact@turftechindia.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.turftechindia.com">https://www.turftechindia.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 90030 12345</li>
  <li><span className='font-bold'>Address:</span> 5th Floor, Apex Building, Mount Road, Chennai - 600006</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}>
  <a href="https://www.arenaturf.in">3. Arena Turf</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image2})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Arena Turf specializes in constructing high-performance sports turfs for a variety of sports, including football, hockey, and cricket. They offer state-of-the-art synthetic turf solutions and comprehensive services, including design, installation, and maintenance. Their focus is on delivering durable and aesthetically pleasing sports surfaces.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Pradeep Reddy</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2010</li>
  <li><span className='font-bold'>Email:</span> info@arenaturf.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.arenaturf.in">https://www.arenaturf.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 94444 12345</li>
  <li><span className='font-bold'>Address:</span> 22, 2nd Street, Nungambakkam, Chennai - 600034</li>
</ul>


 

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.sporturf.in">4. Sporturf</a></h1>

<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image4})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Sporturf is a leading provider of sports turf construction services, specializing in synthetic and natural grass for sports facilities. They offer complete solutions from design to installation and maintenance, ensuring high-quality performance and durability. Sporturf also provides additional services such as interior and exterior painting for related sports infrastructure.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Anil Kapoor</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2015</li>
  <li><span className='font-bold'>Email:</span> sales@sporturf.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.sporturf.in">https://www.sporturf.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 91760 00099</li>
  <li><span className='font-bold'>Address:</span> 78, Ekkatuthangal, Chennai - 600032</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.perfectturf.com">5. Perfect Turf</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image5})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Perfect Turf offers expert sports turf construction services with a focus on delivering top-quality synthetic and natural grass solutions. Their services include the design, installation, and maintenance of sports surfaces, catering to football, cricket, and other sports. They are known for their commitment to high standards and client satisfaction.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Suresh V</li>
  <li><span className='font-bold'>Year of Establishment: </span>2011</li>
  <li><span className='font-bold'>Email:</span> info@perfectturf.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.perfectturf.com">https://www.perfectturf.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 95000 12345</li>
  <li><span className='font-bold'>Address: </span>90, Anna Nagar, Chennai - 600040</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.turfmasters.in">6. Turf Masters</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image6})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Turf Masters provides professional sports turf construction services with a focus on high-quality synthetic and natural grass fields. They offer end-to-end solutions, including design, installation, and maintenance, ensuring optimal playing conditions and durability. Their expertise extends to related services such as interior and exterior painting for sports facilities.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ramesh N</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2013</li>
  <li><span className='font-bold'>Email: </span> contact@turfmasters.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.turfmasters.in">https://www.turfmasters.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 99405 67890</li>
  <li><span className='font-bold'>Address:</span> 45, South Usman Road, T. Nagar, Chennai - 600017</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.proturfs.com">7. Pro Turf Solutions</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image7})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Pro Turf Solutions specializes in constructing high-quality sports turfs with a focus on synthetic and natural grass fields. They provide comprehensive services from design to installation and maintenance, ensuring durable and performance-oriented sports surfaces. They also offer additional services, including interior and exterior painting for sports infrastructure.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Karthik S</li>
  <li><span className='font-bold'>Year of Establishment: </span>2016</li>
  <li><span className='font-bold'>Email: </span>info@proturfs.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.proturfs.com">https://www.proturfs.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 90871 23456</li>
  <li><span className='font-bold'>Address:</span> 33, Kotturpuram, Chennai - 600085</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.syn-turf.in">8. Synthetic Turf Systems</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image8})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Synthetic Turf Systems is a prominent name in the sports turf construction industry, offering top-notch synthetic grass solutions for various sports. Their services include detailed design, expert installation, and ongoing maintenance to ensure high-performance and longevity. They also provide related services like interior and exterior painting for enhanced sports facility aesthetics.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Rajesh B</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Email:</span> contact@syn-turf.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.syn-turf.in">https://www.syn-turf.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98100 12345</li>
  <li><span className='font-bold'>Address:</span> 66, 4th Main Road, Besant Nagar, Chennai - 600090</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.urbanturf.in">9. Urban Turf Construction</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image9})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Urban Turf Construction offers a wide range of sports turf solutions, focusing on high-quality synthetic and natural grass installations. They provide end-to-end services, including design, installation, and maintenance, ensuring optimal playing conditions and durability. Their services also cover related needs such as interior and exterior painting for sports-related infrastructure.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Manoj Gupta</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2014</li>
  <li><span className='font-bold'>Email:</span> info@urbanturf.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.urbanturf.in">https://www.urbanturf.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98410 56789</li>
  <li><span className='font-bold'>Address:</span> 123, Velachery Road, Chennai - 600042</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.fieldsolutions.in">10. Field Solutions</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image10})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Field Solutions is known for its expertise in sports turf construction, offering high-quality synthetic and natural grass solutions for various sports facilities. Their services include design, installation, and maintenance, ensuring long-lasting and high-performance sports surfaces. They also provide additional services, including interior and exterior painting for sports venues.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Prakash J</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2017</li>
  <li><span className='font-bold'>Email:</span> contact@fieldsolutions.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.fieldsolutions.in">https://www.fieldsolutions.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98847 77654</li>
  <li><span className='font-bold'>Address:</span> 11, Chetpet, Chennai - 600031</li>
</ul>



      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Chennai’s sports turf construction industry features a range of companies specializing in creating top-quality playing surfaces for various sports. These top 10 companies offer expert services in synthetic and natural grass installation, ensuring durability and excellent performance. Their comprehensive solutions, including design, installation, and maintenance, are complemented by additional services such as interior and exterior painting for sports facilities
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
