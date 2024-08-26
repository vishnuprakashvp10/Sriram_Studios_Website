import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Banner from "./assets/Hero/blog-painting.jpg";
import Image1 from "./assets/Hero/cdrive.jpg";
import Image2 from "./assets/Hero/paintwall.webp";
import Image3 from "./assets/Hero/paintingext.jpg";
import Image4 from "./assets/Hero/myhpaint.webp";
import Image5 from "./assets/Hero/vijay.jpg";
import Image6 from "./assets/Hero/justp.jpg";
import Image7 from "./assets/Hero/smartp.jpg";
import Image8 from "./assets/Hero/coatp.jpeg";
import Image9 from "./assets/Hero/asian.jpg";
import Image10 from "./assets/Hero/zzpaint.jpg";
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
      "ColourDrive",
      "PaintMyWalls",
      "My Home Painting Solutions",
      "Vijay Painting Services",
      "Justpainting",
      "Smart Paints",
      "Radiant Coats",
      "Asian Paints Home Solutions",
      "ZZ Painting Contractors",
    ],
  },
];

  export const questions = [
    {
      question: "How can I evaluate the quality of painting services offered by these companies?",
      answer: "To assess the quality, review their portfolio of completed projects, read customer reviews, and ask about the materials and techniques they use. You can also visit previous projects to see the finish and durability of their work firsthand."
    },
    {
      question: "Do these companies offer both interior and exterior painting services?",
      answer: "Yes, most painting service companies provide both interior and exterior painting solutions. Their services often include surface preparation, color consultation, and the use of weather-resistant materials for exterior projects."
    },
    {
      question: "How do these painting service companies ensure a long-lasting finish?",
      answer: "Many companies use high-quality paints, primers, and sealants, along with thorough surface preparation to ensure a durable finish. They may also offer warranties on their work, so it's important to discuss these details during your consultation."
    },
    {
      question: "Are eco-friendly and low-VOC paint options available?",
      answer: "Yes, many painting companies offer eco-friendly and low-VOC (volatile organic compound) paint options. These paints are better for indoor air quality and the environment. Inquire about these options if sustainability is a priority for your project."
    },
    {
      question: "What should I consider when choosing colors for my home’s interior and exterior?",
      answer: "When selecting colors, consider the existing décor, lighting conditions, and the architectural style of your home. For exteriors, take into account the climate and surroundings. Many companies offer color consultation services to help you make the best choice."
    },
  ];
  

const HomeConstructionsTop10 = () => {
  const [cards] = useState(questions);

  return (
    <div>
    <Helmet>
        <title>Top 10 Painting Companies in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Explore the leading paintings to enhance your space with stunning art and timeless beauty.' />
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
      Check Out The Top 10 Painting Services Companies In Chennai
      </h1>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Chennai, a bustling metropolis, is not only known for its rich cultural heritage but also for its modern infrastructure and aesthetic appeal. The demand for professional painting services has surged as both residential and commercial spaces seek to enhance their interiors and exteriors with vibrant colors and designs. Whether it's a fresh coat of paint for your home or a complete makeover for your office, the top painting services companies in Chennai offer expert solutions that blend creativity with quality. This guide introduces you to the leading painting service providers in Chennai, known for their exceptional craftsmanship and attention to detail, helping you make an informed decision for your next painting project.
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
  <a href="https://colourdrive.in">2. ColourDrive</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image1})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  ColourDrive is a premier painting service company in Chennai, providing personalized interior and exterior painting solutions. With a focus on customer satisfaction, they offer color consultations and use high-quality materials to ensure long-lasting results. Their expertise in modern techniques makes them a leader in Chennai's painting industry.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Anil Kumar</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2013</li>
  <li><span className='font-bold'>Email:</span> support@colourdrive.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://colourdrive.in">https://colourdrive.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 90141 52689</li>
  <li><span className='font-bold'>Address:</span> 102, 2nd Main Road, Anna Nagar, Chennai - 600040</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}>
  <a href="https://paintmywalls.in">3. PaintMyWalls</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image2})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  PaintMyWalls is a trusted name for professional painting services in Chennai, offering a seamless experience from consultation to execution. Specializing in both residential and commercial projects, they provide high-quality interior and exterior painting solutions tailored to individual needs, ensuring a perfect finish every time.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ashok Nair</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2016</li>
  <li><span className='font-bold'>Email:</span> contact@paintmywalls.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://paintmywalls.in">https://paintmywalls.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 76760 08282</li>
  <li><span className='font-bold'>Address:</span> 5th Floor, Tower C, SP Infocity, Perungudi, Chennai - 600096</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> 
  <a href="https://myhomepaintingsolutions.com">4. My Home Painting Solutions</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image4})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
My Home Painting Solutions offers expert interior and exterior painting services in Chennai, focusing on quality workmanship and innovative techniques. Their professional team ensures precise execution, transforming spaces with vibrant colors and finishes that enhance the visual appeal and durability of walls.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Raghavendra Rao</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2012</li>
  <li><span className='font-bold'>Email:</span> info@myhomepaintingsolutions.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://myhomepaintingsolutions.com">https://myhomepaintingsolutions.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98848 72826</li>
  <li><span className='font-bold'>Address:</span> 12, Ground Floor, Arcot Road, Vadapalani, Chennai - 600026</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> 
  <a href="https://vijaypaintingservices.com">5. Vijay Painting Services</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image5})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Vijay Painting Services is a leading provider of residential and commercial painting services in Chennai. With a team of experienced painters, they deliver superior interior and exterior painting solutions that meet the highest standards of quality and aesthetics, ensuring customer satisfaction with every project.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Vijay Kumar</li>
  <li><span className='font-bold'>Year of Establishment: </span>2010</li>
  <li><span className='font-bold'>Email:</span> vijaypaintingservices@gmail.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://vijaypaintingservices.com">https://vijaypaintingservices.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 90929 55552</li>
  <li><span className='font-bold'>Address: </span>No. 45, 1st Avenue, Ashok Nagar, Chennai - 600083</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> 
  <a href="https://justpainting.in">6. Justpainting</a>
</h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image6})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Justpainting is a Chennai-based painting company known for its exceptional interior and exterior painting services. They offer a comprehensive range of solutions, including color consultations and modern techniques that ensure a flawless finish. Their commitment to quality and customer satisfaction has made them a preferred choice in the Chennai market.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Deepak K</li>
  <li><span className='font-bold'>Year of Establishment: </span>2011</li>
  <li><span className='font-bold'>Email:</span> info@justpainting.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://justpainting.in">https://justpainting.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98408 84604</li>
  <li><span className='font-bold'>Address:</span> 33, Thiruvalluvar Street, Kolathur, Chennai - 600099</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}><a href="https://smartpaints.in">7. Smart Paints</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image7})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Smart Paints offers top-notch interior and exterior painting services in Chennai, using advanced techniques and high-quality materials. Their skilled professionals are dedicated to delivering exceptional results that transform spaces and meet the diverse needs of residential and commercial clients.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Karthik Raj</li>
  <li><span className='font-bold'>Year of Establishment: </span>2014</li>
  <li><span className='font-bold'>Email: </span>info@smartpaints.in</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://smartpaints.in">https://smartpaints.in</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98405 55220</li>
  <li><span className='font-bold'>Address:</span> 3/4, 4th Street, Royapettah, Chennai - 600014</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}><a href="https://radiantcoats.com">8. Radiant Coats</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image8})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Radiant Coats specializes in high-quality interior and exterior painting services in Chennai, focusing on customer satisfaction and attention to detail. Their expert team ensures a smooth and efficient process, delivering stunning results that enhance the aesthetic appeal and value of your property.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Prakash R</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2017</li>
  <li><span className='font-bold'>Email:</span> info@radiantcoats.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://radiantcoats.com">https://radiantcoats.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 98942 25432</li>
  <li><span className='font-bold'>Address:</span> 7/11, Velachery Main Road, Velachery, Chennai - 600042</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}><a href="https://asianpaintshomesolutions.com">9. Asian Paints Home Solutions</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image9})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Asian Paints Home Solutions is a renowned name in the painting industry, offering premium interior and exterior painting services in Chennai. With a reputation for quality and reliability, they provide expert consultation and execution, ensuring a beautiful and lasting finish for every project.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> N/A (Part of Asian Paints Ltd.)</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2001</li>
  <li><span className='font-bold'>Email:</span> info@asianpaintshomesolutions.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://asianpaintshomesolutions.com">https://asianpaintshomesolutions.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 1800 209 5678</li>
  <li><span className='font-bold'>Address:</span> 5th Floor, Chennai Citi Centre, Dr. Radhakrishnan Salai, Chennai - 600004</li>
</ul>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}><a href="https://zzpaintingcontractors.com">10. ZZ Painting Contractors</a></h1>
<div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image10})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
ZZ Painting Contractors offers comprehensive interior and exterior painting services in Chennai, known for their professionalism and high-quality results. Their skilled painters use the latest techniques and premium materials to deliver durable and aesthetically pleasing finishes for both residential and commercial properties.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Zahir Hussain</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Email:</span> contact@zzpaintingcontractors.com</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://zzpaintingcontractors.com">https://zzpaintingcontractors.com</a></span></li>
  <li><span className='font-bold'>Contact Number:</span> +91 94444 77229</li>
  <li><span className='font-bold'>Address:</span> 10, Poes Garden, Teynampet, Chennai - 600086</li>
</ul>



      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Chennai's vibrant painting services sector offers a plethora of options for anyone looking to enhance the appearance of their homes or offices. The top painting companies highlighted here are renowned for their expertise in both interior and exterior painting, using high-quality materials and innovative techniques to ensure stunning and long-lasting results. Whether you're aiming to refresh your living space or create a new look for your home.
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
