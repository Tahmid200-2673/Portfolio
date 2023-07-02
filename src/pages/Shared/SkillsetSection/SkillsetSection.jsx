 import { faServer } from "@fortawesome/free-solid-svg-icons";
 import './SkillsetSection.css'
 import '../../../assets/devicon.css';
 import html5 from '../../../assets/icons8-html5-48.png'
 import css3 from '../../../assets/icons8-css3-48.png'
 import es6 from '../../../assets/icons8-javascript-48.png'
 import tailwindcss from '../../../assets/icons8-tailwind-css-48.png'
 import boootstrapcss from '../../../assets/icons8-bootstrap-48.png'
 import mongodb from '../../../assets/icons8-mongodb-48.png'
 import express from '../../../assets/icons8-express-js-48.png'
 import react from '../../../assets/icons8-react-native-48.png'
 import nodejs from '../../../assets/icons8-nodejs-48.png'
 import nextjs from '../../../assets/pngwing.com.png'
 import typescript from '../../../assets/icons8-typescript-48.png'
 import firebase from '../../../assets/icons8-firebase-48.png'
 const SkillsetSection = () => {
     const skills = [
         {
             name: 'HTML5',
            //  icon: 'devicon-html5-plain',
              icon: html5,
           },
        {
              name: 'CSS3',
              icon: css3,
           },
            {
              name: 'JavaScript (ES6)',
           //  icon: 'javascript-plain',
             icon: es6,
           },
            {
             name: 'Tailwind CSS',
            // icon: 'tailwindcss-plain',
             icon: tailwindcss,
         },
            {
             name: 'Bootstrap',
        //      icon: 'bootstrap-plain',
              icon: boootstrapcss,
          },
        
          {
              name: 'MongoDB',
             // icon: 'mongodb-plain',
              icon: mongodb,
          },
          {
              name: 'Express.js',
             // icon: 'express-original',
              icon: express,
           
          },
          {
              name: 'React',
        //      icon: 'react-plain',
              icon: react,
           },
          {
              name: 'Node.js',
             icon: nodejs,
         },
          {
              name: 'Next.js',
             icon: nextjs,
          },
          {
              name: 'TypeScript',
              icon: typescript,
          },
          {
             name: 'Firebase Authentication',
              icon: firebase,
          },
        //   //Add more skills as needed
     ];

     return (
         <section className="bg-zinc-900 py-16">
             <div className="container mx-auto">
                 <h2 className="text-4xl font-bold mb-4 text-center gradient-text mb-11">My Skills</h2>
                 <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8">
                     {skills.map((skill) => (
                         <div key={skill.name} className="flex flex-col items-center">
                             <div className="text-4xl text-primary mb-2">
                               {/* <i className={`devicon-${skill.icon} colored`}></i>    */}
                               <img src={skill.icon} alt={skill.name} className={skill.name === 'Next.js' ? 'nextjs-icon' : ''}/>
                             </div>
                             <p className="text-lg text-[#a6adba] font-medium">{skill.name}</p>
                         </div>
                     ))}
                 </div>
             </div>
         </section>
     );
 };

 export default SkillsetSection;

