import React, { useEffect } from 'react';
// import PotraittSecttion from '../../Shared/PotraitSection/PotraittSecttion';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PotraittSecttion from '../../Shared/PotraitSection/PotraittSecttion';
import resume from '../../../assets/resume.pdf';
import SkillsetSection from '../../Shared/SkillsetSection/SkillsetSection';
const Home = () => {

   
        const handleResumeDownload = () => {
          window.open(resume);
        }
      
   
  return (
    <div>
       
       <section className="bg-zinc-900 py-16 text-white">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text1">Welcome to My Portfolio</span>
          </h1>
          <p className="text-lg mb-8 leading-loose text-gray-300">
            Hi, I'm Tahmid Ahmad Khan, a passionate MERN stack developer with experience in building robust and scalable web applications. I specialize in utilizing the MERN (MongoDB, Express, React, Node.js) stack to create efficient and dynamic solutions. Through my projects, I aim to deliver seamless user experiences and solve real-world problems. Take a look at my portfolio to explore my work and skills.
          </p>
          <button onClick={handleResumeDownload} className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary" >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Resume
          </button> 
        </div>
        <div className="w-1/2">
          <PotraittSecttion></PotraittSecttion>
        </div>
      </div>
    </section>
   <SkillsetSection></SkillsetSection>
    </div>
  );
};

export default Home;
