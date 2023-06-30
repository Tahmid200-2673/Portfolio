import React from 'react';

const Resume = () => {
  return (
    <div className='container'>
      <div className='flex justyfy content-around'>
      <div><h1>Tahmid Ahmad Khan</h1>
      <p>MERN Stack Developer</p>
      <p>Address: Dhaka, Bangladesh</p></div>
    <div>  <p>Mobile: +8801533472575</p>
      <p>Email: tahmidahmed2002673@gmail.com</p>
      </div>
      </div>
      <p>Linkedin | Github | Portfolio</p>
<hr />
      <h2>Career Objective</h2>
      <p>
        As a fresher MERN stack developer, my objective is to secure a challenging position in a reputable organization where I can utilize my skills and knowledge to contribute to the development of innovative and high-quality software solutions.
      </p>

      <h2>Skill Highlights</h2>
      <ul>
        <li>Expertise: HTML5, CSS3, Bootstrap-5, Tailwind CSS, DaisyUi, JavaScript, ES6, MERN Stack</li>
        <li>Comfortable: React Query, React Hook Form, Firebase, Rest API, Express.js, MongoDB, Stripe</li>
        <li>Familiar: Node.js</li>
        <li>Tools: VS Code, GitHub, Chrome Dev Tools, Figma, Vercel, Netlify, Firebase Host</li>
        <li>Interpersonal: Leadership, Team Work, Communication, Negotiation, Flexibility</li>
      </ul>

      <h2>Projects</h2>

      <h3>Teamwork Sports</h3>
      <p>
        This website is a Full Stack sports academics platform.
      </p>
      <h4>Features</h4>
      <ul>
        <li>Instructors can add classes and see enrolled students in their approved classes</li>
        <li>Admins can update user roles and manage classes</li>
        <li>Students can select a class, enroll in a class after payment, and view their payment history</li>
      </ul>
      <p>Technology: React, React Router, React Bootstrap, Firebase Authentication, Express, MongoDB, Axios, Framer-motion, Tanstack Query, SweetAlert2, React-hook-form, Stripe, Vercel</p>

      <h3>Toys Paradise</h3>
      <p>
        This website is a comprehensive Full Stack platform focused solely on toy sales.
      </p>
      <h4>Features</h4>
      <ul>
        <li>On this website, you can add any toy when you log in to the site.</li>
        <li>You can also update and delete toys.</li>
        <li>Clients can see toys based on their category.</li>
      </ul>
      <p>Technology: React, React Router, React Bootstrap, React Tabs, Firebase Authentication, Express, MongoDB, AOS package, Vercel</p>

      <h3>Bengal Food</h3>
      <p>
        This website is about a restaurant management system.
      </p>
      <h4>Features</h4>
      <ul>
        <li>The website shows details about chefs.</li>
        <li>On this website, customers can see particular chef's recipes and their ratings.</li>
        <li>Customers can add their favorite recipes.</li>
      </ul>
      <p>Technology: React, React Router, Firebase Authentication, Express, Vercel</p>

      <h2>Professional Training</h2>
      <p>Complete Web Development Course with Jhankar Mahbub</p>
      <p>Duration: January 2023 to June 2023</p>

      <h2>Education</h2>
      <p>
        Bachelor of Science (B.Sc) in Computer Science and Engineering<br/>
        Daffodil International University<br/>
        Duration: 2017-2022<br/>
        CGPA: 3.59/4.0
      </p>

      <h2>Language</h2>
      <p>Bangla (Native), English (Fluent)</p>
    </div>
  );
};

export default Resume;
