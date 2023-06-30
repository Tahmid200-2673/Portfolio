import React from 'react';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/resume.pdf';

const Resume = () => {

    const handleResumeDownload = () => {
        window.open(resume);
      };
  return (
   <div className='bg-zinc-900 '>
     <div className='bg-zinc-900 mx-96 resume-line m-10'>
      <div className='flex justify-content-around mt-5'>
      <div className="content-container">
      <div><h1 className='text-3xl'><b>Tahmid Ahmad Khan</b></h1>
      <p className='text-2xl'><b>MERN Stack Developer</b></p>
      <p className='text-xl'><b>Address: Dhaka, Bangladesh</b></p></div>
    <div className='ml-[44rem] mt-[-4rem]'>  <p><b><pre>             Mobile: +8801533472575 </pre></b></p>
      <p><b>Email: tahmidahmed2002673@gmail.com</b></p>
      </div>
      </div>
      </div>
         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linkedin | Github | Portfolio</p>
        <hr className='content-margin' />
      <div className="content-margin">
      <h2 className='text-xl '><b>Career Objective</b></h2>
      <p>
        As a fresher MERN stack developer, my objective is to secure a challenging position in a reputable organization where I can utilize my skills and knowledge to contribute to the development of innovative and high-quality software solutions.
      </p>

<br/><hr /><br/>
      <h2 className='text-xl'><b>Skill Highlights</b></h2>
      <ul>
        <li>Expertise: HTML5, CSS3, Bootstrap-5, Tailwind CSS, DaisyUi, JavaScript, ES6, MERN Stack</li>
        <li>Comfortable: React Query, React Hook Form, Firebase, Rest API, Express.js, MongoDB, Stripe</li>
        <li>Familiar: Node.js</li>
        <li>Tools: VS Code, GitHub, Chrome Dev Tools, Figma, Vercel, Netlify, Firebase Host</li>
        <li>Interpersonal: Leadership, Team Work, Communication, Negotiation, Flexibility</li>
      </ul>
      <br/><hr /><br/>
      <h2 className='text-xl'><b>Projects</b></h2>

      <h3><b>1. Teamwork Sports</b></h3>
      <p>
        This website is a Full Stack sports academics platform.
      </p>
      <h4><b>Features</b></h4>
      <ul>
        <li>• Instructors can add classes and see enrolled students in their approved classes</li>
        <li>• Admins can update user roles and manage classes</li>
        <li>• Students can select a class, enroll in a class after payment, and view their payment history</li>
      </ul>
      <p><b>Technology:</b> React, React Router, React Bootstrap, Firebase Authentication, Express, MongoDB, Axios, Framer-motion, Tanstack Query, SweetAlert2, React-hook-form, Stripe, Vercel</p>

      <h3><b>2. Toys Paradise</b></h3>
      <p>
        This website is a comprehensive Full Stack platform focused solely on toy sales.
      </p>
      <h4><b>Features</b></h4>
      <ul>
        <li>• On this website, you can add any toy when you log in to the site.</li>
        <li>• You can also update and delete toys.</li>
        <li>• Clients can see toys based on their category.</li>
      </ul>
      <p><b>Technology:</b> React, React Router, React Bootstrap, React Tabs, Firebase Authentication, Express, MongoDB, AOS package, Vercel</p>

      <h3><b>3. Bengal Food</b></h3>
      <p>
        This website is about a restaurant management system.
      </p>
      <h4><b>Features</b></h4>
      <ul>
        <li>• The website shows details about chefs.</li>
        <li>• On this website, customers can see particular chef's recipes and their ratings.</li>
        <li>• Customers can add their favorite recipes.</li>
      </ul>
      <p><b>Technology:</b> React, React Router, Firebase Authentication, Express, Vercel</p>
<br/><hr /><br/>
      <h2 className='text-xl'><b>Professional Training</b></h2>
      <p>Complete Web Development Course with Jhankar Mahbub</p>
      <p>Duration: January 2023 to June 2023</p>
<br/><hr /><br/>
      <h2 className='text-xl'><b>Education</b></h2>
      <p>
        Bachelor of Science (B.Sc) in Computer Science and Engineering<br/>
        Daffodil International University<br/>
        Duration: 2017-2022<br/>
        CGPA: 3.59/4.0
      </p>
<br/><hr /><br/>
      <h2 className='text-xl'><b>Language</b></h2>
      <p>Bangla (Native), English (Fluent)</p>
      </div>
    </div>

    <button
              onClick={handleResumeDownload}
              className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary ml-[850px] my-12"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Resume
            </button>
   </div>
  );
};

export default Resume;
