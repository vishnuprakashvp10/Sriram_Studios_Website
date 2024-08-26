import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Helmet } from 'react-helmet-async'

export const questions = [
  {
    question: "How can I find the right interior designer for my home?",
    answer:
      "Start by researching local designers, reviewing portfolios, and seeking recommendations from friends or online reviews."  
    },
  {
    question: "What factors influence the cost of interior designing services?",
    answer:
    "Costs vary based on scope, materials, and designer expertise. Consultations are crucial for accurate estimates."
  },
  {
    question: "Can interior designers work within my budget constraints?",
    answer:
      "Yes, many designers offer customized solutions to accommodate various budgets. Clearly communicate your financial limits during consultations."
  },
  {
    question: "How long does the interior designing process typically take?",
    answer:
      "Timelines vary depending on the project's complexity and size. Discuss specific timelines with your chosen designer."
  },
  {
    question: "What are the latest trends in interior design for residential spaces?",
    answer:
      "Trends evolve, but current themes include sustainable design, biophilic elements, and minimalist aesthetics. Stay updated through design blogs and magazines.",
  },
];

export const questions2 = [
  {
    question: "How often should I repaint the interior and exterior of my home?",
    answer:
      "Repainting intervals depend on factors like weather, wear, and personal preference. A general guideline is every 5-7 years for interiors and 7-10 years for exteriors."  
    },
  {
    question: "What types of paint finishes are suitable for different areas of my home?",
    answer:
    "Finishes like flat for ceilings, eggshell for walls, and satin or semi-gloss for trim are common choices. Consult with painters for personalized recommendations."
  },
  {
    question: "How can I choose the right paint color for my space?",
    answer:
      "Consider factors like natural light, room function, and personal preferences. Many paint stores offer color consultations to assist you."
  },
  {
    question: "What is the average cost of hiring professional painters for an interior or exterior project?",
    answer:
      "Costs vary based on location, project size, and complexity. Obtain multiple Quotes for accurate estimates."
  },
  {
    question: "Can I paint over existing wallpaper, or does it need to be removed?",
    answer:
      "It's generally recommended to remove wallpaper before painting for a smoother finish. However, consult with professionals for the best approach.",
  },
];

export const questions3 = [
  {
    question: "How do I choose the right home construction company for my project?",
    answer:
      "Research companies, check reviews, and reQuest portfolios. Ensure they are licensed and have experience in the type of construction you need."  
    },
  {
    question: "What is the typical timeline for building a new home?",
    answer:
    "Timelines vary based on factors like size, complexity, and weather conditions. A custom home may take 8-12 months or longer."
  },
  {
    question: "How can I estimate the cost of building a new home?",
    answer:
      "Costs depend on factors like location, size, design, and finishes. Consult with construction companies for accurate estimates."
  },
  {
    question: "Can I make changes to the home design during the construction process?",
    answer:
      "Changes are possible but may incur additional costs and extend the timeline. Discuss potential modifications with your builder early in the process."
  },
  {
    question: "What permits and approvals are needed for new home construction?",
    answer:
      "Permits vary by location but typically include zoning, building, and environmental permits. Your builder can guide you through the process.",
  },
];

export const questions4 = [
  {
    question: "What is turf construction, and how does it enhance outdoor spaces?",
    answer:
      "Turf construction involves creating artificial grass surfaces. It provides a low-maintenance, visually appealing alternative to natural grass."  
    },
  {
    question: "What are the benefits of turf construction for residential properties?",
    answer:
    "Benefits include water conservation, minimal maintenance, durability, and a lush, green appearance year-round."
  },
  {
    question: "Can turf construction be customized for different areas of my outdoor space?",
    answer:
      "Yes, turf construction is versatile and can be tailored to various areas, including lawns, rooftops, and play areas."
  },
  {
    question: "How long does turf construction take, and what is the installation process?",
    answer:
      "Timelines vary based on the project size. The installation process involves site preparation, base installation, and laying the turf."
  },
  {
    question: "Does turf construction require special maintenance?",
    answer:
      "Turf is low-maintenance, reQuiring occasional cleaning and brushing. It doesn't need watering, mowing, or fertilizing like natural grass.",
  },
];

export const questions5 = [
  {
    question: "How do I plan for a home renovation project?",
    answer:
      "Define your goals, set a budget, and create a timeline. Consult with professionals for guidance on the renovation process."  
    },
  {
    question: "What are the most common types of home renovations?",
    answer:
    "Common renovations include kitchen upgrades, bathroom remodels, room additions, and exterior makeovers."
  },
  {
    question: "Can I live in my home during the renovation process?",
    answer:
      " Depending on the scope, living in your home during renovations is possible. Discuss options with your contractor for minimal disruption."
  },
  {
    question: "How do I choose between remodeling and renovating my home?",
    answer:
      "Remodeling involves changing the structure, while renovation updates existing elements. Choose based on your goals and budget."
  },
  {
    question: "What permits are required for home renovations, and how do I obtain them?",
    answer:
      "Permits vary by location and project. Consult with your contractor to determine the necessary permits and obtain approvals.",
  },
];

export default function Faq() {
  const [cards1] = useState(questions);
  const [cards2] = useState(questions2);
  const [cards3] = useState(questions3);
  const [cards4] = useState(questions4);
  const [cards5] = useState(questions5);

  return (
    <>
        <Helmet>
        <title>FAQ &#124; Infratech Builders</title>
        <meta name='description' content='Infratech Builders answers your common questions to help you understand our services and processes better.' />
      </Helmet>
      <section className="max-w-xl mx-auto py-20 px-4">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8 text-2xl" style={{ color: 'orange' }}>
          FAQs
        </h1>

        <h1 className="text-center tracking-widest font-bold mb-8 text-2xl" style={{ color: 'orange' }}>
          Interior Designing FAQs:
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards1.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>

        <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl" style={{ color: 'orange' }}>
        Painting FAQs:
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards2.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>

        <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl" style={{ color: 'orange' }}>
        Home Construction FAQs:
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards3.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>

        <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl" style={{ color: 'orange' }}>
          Turf Construction FAQs:
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards4.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>

        <h1 className="text-center tracking-widest font-bold mb-8 mt-8 text-2xl" style={{ color: 'orange' }}>
          Renovation FAQs
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards5.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}

function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border border-gray-400 rounded-lg bg-white">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className="cursor-pointer"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article className={showAnswer ? "border-t border-gray-400 p-4 lg:p-6" : ""}>
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
}


