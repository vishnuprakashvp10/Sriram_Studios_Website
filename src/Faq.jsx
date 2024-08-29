import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Helmet } from 'react-helmet-async'

export const questions = [
  {
    question: "What factors should I consider when choosing a film camera?",
    answer: "Consider resolution, frame rate capabilities, sensor size, and lens compatibility to ensure the camera meets your project needs."
  },
  {
    question: "How do I maintain and care for film cameras?",
    answer: "Regularly clean the lens and sensor, ensure proper storage, and follow the manufacturer’s guidelines for maintenance and servicing."
  },
  {
    question: "Can I use film cameras for both indoor and outdoor shoots?",
    answer: "Yes, film cameras are versatile and can be used in various settings. Adjust settings and use appropriate accessories for different environments."
  },
  {
    question: "What are the advantages of using a film camera over a digital one?",
    answer: "Film cameras often provide a distinct aesthetic, greater dynamic range, and a classic look that many filmmakers prefer for artistic purposes."
  },
  {
    question: "How do I choose the right film camera for a specific project?",
    answer: "Assess your project's requirements, including the desired visual style, budget, and technical specifications, and consult with experts to select the most suitable camera."
  },
];

export const questions2 = [
  {
    question: "What types of lighting equipment are essential for film production?",
    answer: "Key lights, fill lights, backlights, and diffusion materials are essential to control lighting and achieve the desired look on set."
  },
  {
    question: "How can I effectively control lighting in different environments?",
    answer: "Use modifiers, reflectors, and diffusers to control light intensity and direction, and adjust based on the shooting environment and desired effect."
  },
  {
    question: "What are grips, and how do they support film production?",
    answer: "Grips handle equipment that supports lighting and camera setups, such as stands, flags, and rigging systems, ensuring stability and flexibility on set."
  },
  {
    question: "How do I choose the right grip equipment for a shoot?",
    answer: "Consider the specific needs of your shoot, including the type of lights and camera setups, and select equipment that provides stability and versatility."
  },
  {
    question: "Can lighting and grip equipment be rented?",
    answer: "Yes, many rental services offer a wide range of lighting and grip equipment to suit various production needs and budgets."
  },
];

export const questions3 = [
  {
    question: "What are lens filters used for in film production?",
    answer: "Lens filters are used to control light, reduce glare, and enhance color balance, contributing to the overall look and feel of the footage."
  },
  {
    question: "How do I choose the right lens filter for my project?",
    answer: "Consider the specific effects you want to achieve, such as polarizing, UV protection, or color correction, and select filters accordingly."
  },
  {
    question: "Can lens filters impact image quality?",
    answer: "High-quality filters generally maintain image quality, but poor-quality filters may introduce distortion or reduce sharpness. Choose reputable brands to avoid these issues."
  },
  {
    question: "Are lens filters compatible with all camera lenses?",
    answer: "Filters come in various sizes and types, so ensure compatibility with your lens's thread size and type before purchasing."
  },
  {
    question: "How should I clean and maintain lens filters?",
    answer: "Use a soft, lint-free cloth and lens cleaning solution to gently clean filters. Avoid abrasive materials that could scratch the surface."
  }
];

export const questions4 = [
  {
    question: "What factors should I consider when selecting a camera lens?",
    answer: "Consider focal length, aperture size, image stabilization, and lens type (e.g., prime or zoom) based on your shooting requirements."
  },
  {
    question: "How do I maintain and care for camera lenses?",
    answer: "Regularly clean lenses with a soft brush or cloth, store them in a protective case, and avoid touching the lens elements directly."
  },
  {
    question: "What is the difference between prime and zoom lenses?",
    answer: "Prime lenses have a fixed focal length and typically offer better image quality, while zoom lenses provide variable focal lengths for more versatile shooting."
  },
  {
    question: "Can I use different lenses with the same camera body?",
    answer: "Yes, as long as the lenses are compatible with your camera's mount system, you can interchange them for different shooting needs."
  },
  {
    question: "How do lens filters affect camera lenses?",
    answer: "Filters can enhance or modify the light entering the lens, impacting the overall image quality and effect. Use filters based on your desired outcome."
  }

];

export const questions5 = [
  {
    question: "What is a genset, and why is it important for film production?",
    answer: "A genset (generator set) provides reliable power for equipment and lighting on set, especially in locations without access to a stable power supply."
  },
  {
    question: "How do I choose the right genset for my production needs?",
    answer: "Consider the power requirements of your equipment, the duration of use, and the location to select a genset with adequate capacity and features."
  },
  {
    question: "Are gensets noisy, and how can I manage noise on set?",
    answer: "Gensets can be noisy, but soundproofing measures and proper placement can minimize disruption. Use noise-reducing enclosures if necessary."
  },
  {
    question: "How often should gensets be serviced or maintained?",
    answer: "Regular maintenance is essential. Follow the manufacturer's guidelines for servicing intervals and perform routine checks to ensure reliable operation."
  },
  {
    question: "Can gensets be rented for short-term or one-time projects?",
    answer: "Yes, many rental services offer gensets for short-term or temporary use, allowing flexibility for various production schedules."
  }
];

export const questions6 = [
  {
    question: "What is a multi-camera setup, and when is it used?",
    answer: "A multi-camera setup involves using multiple cameras simultaneously to capture different angles or scenes, often used in live broadcasts or complex shoots."
  },
  {
    question: "How do I plan and coordinate a multi-camera shoot?",
    answer: "Develop a detailed shooting plan, ensure camera placement and angles are well-coordinated, and use a director or switcher to manage live feeds."
  },
  {
    question: "What are the benefits of using multiple cameras?",
    answer: "Multiple cameras provide diverse perspectives, improve coverage, and allow for seamless editing with a range of shots."
  },
  {
    question: "How do I sync multiple cameras during filming?",
    answer: "Use timecode synchronization, clapperboards, or software tools to ensure all cameras are in sync for accurate editing."
  },
  {
    question: "Can I rent multi-camera setups for different types of projects?",
    answer: "Yes, rental services offer various multi-camera setups tailored to different production needs, from film shoots to live events."
  }
];

export const questions7 = [
  {
    question: "What is a green matte studio, and how is it used?",
    answer: "A green matte studio features a green backdrop used for chroma keying, allowing the replacement of the background with digital elements during post-production."
  },
  {
    question: "How do I prepare a scene for green matte filming?",
    answer: "Ensure even lighting on the green screen, avoid shadows, and dress actors in non-green clothing to prevent blending with the background."
  },
  {
    question: "Can green matte technology be used for both film and television production?",
    answer: "Yes, green matte technology is widely used in both film and television to create visual effects and composite backgrounds."
  },
  {
    question: "What are the key considerations for shooting in a green matte studio?",
    answer: "Pay attention to lighting, camera angles, and actor positioning to achieve clean and effective chroma keying results."
  },
  {
    question: "Are there specific software tools needed for green matte post-production?",
    answer: "Yes, professional video editing software with chroma keying capabilities, such as Adobe After Effects or Final Cut Pro, is required for post-production work."
  }
];

export const questions8 = [
  {
    question: "What features should I look for in an editing suite?",
    answer: "Look for high-resolution monitors, powerful processing capabilities, ample storage, and software compatibility for efficient video editing."
  },
  {
    question: "Can editing suites accommodate different types of projects?",
    answer: "Yes, editing suites are designed to handle a range of projects from short films to full-length features, with customizable setups based on project needs."
  },
  {
    question: "What types of software are commonly used in editing suites?",
    answer: "Commonly used software includes Adobe Premiere Pro, Avid Media Composer, and DaVinci Resolve for editing, color correction, and audio mixing."
  },
  {
    question: "How do I ensure my editing suite is set up correctly for a project?",
    answer: "Configure the suite based on the project’s specifications, including resolution and aspect ratio, and calibrate monitors for accurate color representation."
  },
  {
    question: "Can editing suites be rented for short-term use?",
    answer: "Yes, many rental services offer editing suites for short-term use, allowing flexibility for various production and post-production schedules."
  }
];

export const questions9 = [
  {
    question: "What is a dubbing studio, and what services does it offer?",
    answer: "A dubbing studio provides facilities for voice-over recording, sound replacement, and ADR (Automated Dialogue Replacement) for film and television projects."
  },
  {
    question: "How do I prepare for a dubbing session?",
    answer: "Review the script, ensure clear pronunciation and tone, and practice delivering lines as needed before the recording session."
  },
  {
    question: "What equipment is essential in a dubbing studio?",
    answer: "Key equipment includes high-quality microphones, soundproof booths, audio interfaces, and monitoring systems for accurate recording and playback."
  },
  {
    question: "Can dubbing studios accommodate different languages?",
    answer: "Yes, dubbing studios are equipped to handle multiple languages and provide localization services for international projects."
  },
  {
    question: "How do I choose the right dubbing studio for my project?",
    answer: "Consider factors such as studio reputation, equipment quality, and experience with similar projects to select a suitable dubbing studio."
  }
];

export const questions10 = [
  {
    question: "What is audio mixing, and why is it important for film production?",
    answer: "Audio mixing involves combining and adjusting multiple audio tracks to achieve a balanced and polished final sound, crucial for enhancing the overall production quality."
  },
  {
    question: "What equipment is used in audio mixing?",
    answer: "Essential equipment includes mixing consoles, audio interfaces, studio monitors, and effects processors for precise control and adjustment."
  },
  {
    question: "How do I prepare audio files for mixing?",
    answer: "Organize and label audio files, ensure proper recording quality, and provide a clear brief on the desired sound to facilitate a smooth mixing process."
  },
  {
    question: "What are common challenges in audio mixing, and how can they be addressed?",
    answer: "Common challenges include balancing different audio elements, managing background noise, and achieving clarity. Use techniques such as EQ, panning, and volume adjustments to address these issues."
  },
  {
    question: "Can audio mixing be done remotely, or is it always done in-studio?",
    answer: "Audio mixing can be done remotely using online collaboration tools and software, but in-studio mixing offers hands-on control and access to specialized equipment."
  }
];

export default function Faq() {
  const [cards1] = useState(questions);
  const [cards2] = useState(questions2);
  const [cards3] = useState(questions3);
  const [cards4] = useState(questions4);
  const [cards5] = useState(questions5);
  const [cards6] = useState(questions6);
  const [cards7] = useState(questions7);
  const [cards8] = useState(questions8);
  const [cards9] = useState(questions9);
  const [cards10] = useState(questions10);

  return (
    <div className="bg-black text-white">
        <Helmet>
          <title>FAQ &#124; Sriram Studios</title>
          <meta name='description' content='Sriram Studios answers your common questions to help you understand our services and processes better.' />
        </Helmet>
        <section className="max-w-xl mx-auto py-20 px-4">
          <h1 className="text-center uppercase tracking-widest text-primary font-bold mb-8 text-2xl">
            FAQs
          </h1>

          <h1 className="text-center tracking-widest font-bold mb-8 text-2xl text-primary">
            Film Camera Units FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards1.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl text-primary">
            Lights and Grips FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards2.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl text-primary">
            Lens Filters FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards3.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl text-primary">
            Camera Lenses FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards4.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mb-8 mt-8 text-2xl text-primary">
            Genset Rentals FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards5.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mb-8 mt-8 text-2xl text-primary">
            Multi Camera Setup FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards6.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl text-primary">
            Green Matte Studio FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards7.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mt-8 mb-8 text-2xl text-primary">
            Editing Suites FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards8.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mb-8 mt-8 text-2xl text-primary">
            Dubbing Studios FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards9.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>

          <h1 className="text-center tracking-widest font-bold mb-8 mt-8 text-2xl text-primary">
            Audio Mixing FAQs:
          </h1>
          <section className="grid grid-cols-1 gap-8">
            {cards10.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>
        </section>
    </div>
  );
}

function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-black text-black">
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
    </div>
  );
}