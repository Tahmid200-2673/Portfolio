// import React, { useEffect } from 'react';
// // import PotraittSecttion from '../../Shared/PotraitSection/PotraittSecttion';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PotraittSecttion from '../../Shared/PotraitSection/PotraittSecttion';
// import resume from '../../../assets/resume.pdf';
// import SkillsetSection from '../../Shared/SkillsetSection/SkillsetSection';
// import Services from '../../Shared/Services/Services';
// const Home = () => {

   
//         const handleResumeDownload = () => {
//           window.open(resume);
//         }
      
   
//   return (
//     <div>
       
//        <section className="bg-zinc-900 py-16 text-white">
//       <div className="container mx-auto flex items-center">
//         <div className="w-1/2">
//           <h1 className="text-4xl font-bold mb-4">
//             <span className="gradient-text1">Welcome to My Portfolio</span>
//           </h1>
//           {/* <p className="text-lg mb-8 leading-loose text-gray-300">
//             Hi, I'm Tahmid Ahmad Khan, a passionate MERN stack developer with experience in building robust and scalable web applications. I specialize in utilizing the MERN (MongoDB, Express, React, Node.js) stack to create efficient and dynamic solutions. Through my projects, I aim to deliver seamless user experiences and solve real-world problems. Take a look at my portfolio to explore my work and skills.
//           </p> */}
//           <button onClick={handleResumeDownload} className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary" >
//             <FontAwesomeIcon icon={faDownload} className="mr-2" />
//             Download Resume
//           </button> 
//         </div>
//         <div className="w-1/2">
//           <PotraittSecttion></PotraittSecttion>
//         </div>
//       </div>
//     </section>
//    <SkillsetSection></SkillsetSection>
//    <Services></Services>
//     </div>
//   );
// };

// export default Home;
// import React from 'react';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PotraittSecttion from '../../Shared/PotraitSection/PotraittSecttion';
// import resume from '../../../assets/resume.pdf';
// import SkillsetSection from '../../Shared/SkillsetSection/SkillsetSection';
// import Services from '../../Shared/Services/Services';
// // import Typewriter from 'react-typewriter-effect';
// import { TypeAnimation } from 'react-type-animation';
// const Home = () => {
//   const handleResumeDownload = () => {
//     window.open(resume);
//   };

//   return (
//     <div>
//       <section className="bg-zinc-900 py-16 text-white">
//         <div className="container mx-auto flex items-center">
//           <div className="w-1/2">
//             <h1 className="text-4xl font-bold mb-4">
//             Welcome, I am Tahmid Ahmad Khan,
//             <br/>
//             <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         //'Welcome, I am Tahmid Ahmad Khan',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'I am Mern Stack Developer',
//         1000,
//         'I am Full Stack Developer',
//         1000,
//         'I am Front-End Developer',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '0.8em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
//             </h1>
//             <button
//               onClick={handleResumeDownload}
//               className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary"
//             >
//               <FontAwesomeIcon icon={faDownload} className="mr-2" />
//               Download Resume
//             </button>
//           </div>
//           <div className="w-1/2">
//             <PotraittSecttion />
//           </div>
//         </div>
//       </section>
//       <SkillsetSection />
//       <Services />
//     </div>
//   );
// };

//export default Home;
import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PotraittSecttion from '../../Shared/PotraitSection/PotraittSecttion';
import resume from '../../../assets/resume.pdf';
import SkillsetSection from '../../Shared/SkillsetSection/SkillsetSection';
import Services from '../../Shared/Services/Services';
import {TypeAnimation} from 'react-type-animation';
import './Home.css'
import ContactForm from '../../Shared/Contact/ContactForm';

const Home = () => {
  const handleResumeDownload = () => {
    window.open(resume);
  };

  return (
    <div>
      <section className="bg-zinc-900 py-16 text-white">
        {/* <div className="container mx-auto flex items-center "> */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-16 justify-items-center">
          <div className="w-full md:w-1/2 col-span-2">
          <h1 className=" text-4xl font-bold mb-4">
              <span className="welcome-text gradient-text">Welcome,</span>
              <br />
              <span className="typewriter-text">
               
                <span className="text-color-matcher decoration-amber-200"> I am Tahmid Ahmad Khan,</span>
                <br />
                <TypeAnimation
                  sequence={[
                    1000,
                    'I am a MERN Stack Developer',
                    1000,
                    'I am a Full Stack Developer',
                    1000,
                    'I am a Front-End Developer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '0.8em', display: 'inline-block' }}
                  repeat={Infinity}
                  className="gradient-text"
                />
              </span>
            </h1>
            <button
              onClick={handleResumeDownload}
              className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary  bttn-welcome"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2 " />
              Download Resume
            </button>
          </div>
          <div className="w-full md:w-1/2 col-span-2 ">
            <PotraittSecttion />
          </div>
        </div>
      </section>
      <SkillsetSection />
      <Services />
      <section id="contact">
      <ContactForm></ContactForm>
      </section>
    </div>
  );
};

export default Home;
