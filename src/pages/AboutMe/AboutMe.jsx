

import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/p4.png';
import './AboutMe.css'
import ContactForm from '../Shared/Contact/ContactForm';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-zinc-900 lg:h-[49rem]  md:h-[68rem]">
         {/* <h2 className="text-4xl font-bold mb-8 text-center gradient-text1  ml-[2rem]">About Me</h2> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        
      >
        <motion.img
          src={img}
          alt="Profile Image"
          className="rounded-full w-40 h-40 mb-4 mx-auto"
        />
        <p className="text-center text-[#a6adba] text-lg leading-loose">
        Hi, I'm Tahmid Ahmad Khan, a passionate MERN stack developer with experience in building robust and scalable web
         applications. I specialize in utilizing the MERN stack to create efficient and dynamic solutions.

         With a solid foundation in MongoDB, Express, React, and Node.js, I have developed a wide range of web applications,
         from e-commerce platforms to social media applications. I enjoy working with the latest technologies and tools in the MERN stack to deliver high-quality, responsive, and user-friendly applications.

         Throughout my journey as a developer, I have gained expertise in front-end and back-end development, RESTful APIs, database design, and deployment on platforms such as Firebase and Netlify.

        I am always eager to take on new challenges and learn new technologies to enhance my skills. By staying updated with the latest trends and best practices in web development, I strive to deliver seamless user experiences and solve real-world problems.

         Take a look at my portfolio to explore some of my projects and see how I leverage the MERN stack to create innovative solutions.

         If you have any inquiries or would like to collaborate on a project, feel free to reach out to me. Let's create something amazing together!
        </p>
      </motion.div>
      {/* <ContactForm /> */}
    </div>
  );
};

export default AboutMe;
