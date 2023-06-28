 import { faServer } from "@fortawesome/free-solid-svg-icons";
 import './SkillsetSection.css'
 import '../../../assets/devicon.css';
 import html5 from '../../../assets/icons8-html5-48.png'
 import css3 from '../../../assets/icons8-css3-48.png'

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
        //    {
        //      name: 'JavaScript (ES6)',
        //      icon: 'javascript-plain',
        //    },
        //    {
        //      name: 'Tailwind CSS',
        //      icon: 'tailwindcss-plain',
        //  },
        //    {
        //      name: 'Bootstrap',
        //      icon: 'bootstrap-plain',
        //  },
        
        //  {
        //      name: 'MongoDB',
        //      icon: 'mongodb-plain',
        //  },
        //  {
        //      name: 'Express.js',
        //      icon: 'express-original',
           
        //  },
        //  {
        //      name: 'React',
        //      icon: 'react-plain',
        //  },
        //  {
        //      name: 'Node.js',
        //      icon: 'nodejs-plain',
        //  },
        //  {
        //      name: 'Next.js',
        //      icon: 'nextjs-original',
        //  },
        //  {
        //      name: 'TypeScript',
        //      icon: 'typescript-plain',
        //  },
        //  {
        //      name: 'Firebase Authentication',
        //      icon: 'firebase-plain',
        //  },
        //   //Add more skills as needed
     ];

     return (
         <section className="bg-zinc-900 py-16">
             <div className="container mx-auto">
                 <h2 className="text-4xl font-bold mb-4 text-center gradient-text mb-11">My Skills</h2>
                 <div className="grid grid-cols-4 gap-8">
                     {skills.map((skill) => (
                         <div key={skill.name} className="flex flex-col items-center">
                             <div className="text-4xl text-primary mb-2">
                               {/* <i className={`devicon-${skill.icon} colored`}></i>    */}
                               <img src={skill.icon} alt={skill.name} />
                             </div>
                             <p className="text-lg font-medium">{skill.name}</p>
                         </div>
                     ))}
                 </div>
             </div>
         </section>
     );
 };

 export default SkillsetSection;

