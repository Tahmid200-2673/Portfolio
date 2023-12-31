

import React, { useState } from 'react';
import project1 from '../../../src/assets/pr1.png';
import project2 from '../../../src/assets/pr2.png';
import project3 from '../../../src/assets/pr3.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Teamwork Sports',
            description: 'This website is a sports academics platform with an Admin dashboard for managing admins, instructors, and approving classes. Instructors can add classes and view enrolled students in approved classes. Students can select and pay for classes, view their enrolled classes, and access their payment history.',
            image: project1,
            liveSite: 'https://sports-academies-badb8.web.app/',
            githubServer: 'https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Tahmid200-2673',
            githubClient: 'https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Tahmid200-2673',
        },
        {
            id: 2,
            title: 'Toys Paradise',
            description: 'This website is an Ecommerce platform specializing in the sale of toys. Users can log in to add, update, or delete toys from their inventory. Additionally, clients have the ability to browse and filter toys based on specific categories of interest.',
            image: project2,
            liveSite: 'https://toy-marketplace-4b1ae.web.app/',
            githubServer: 'https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Tahmid200-2673',
            githubClient: 'https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Tahmid200-2673',
        },
        {
            id: 3,
            title: 'Bengal Food',
            description: 'This website is a comprehensive restaurant management system. It showcases detailed profiles of talented chefs. Customers can explore individual chef profiles, browse their exclusive recipes, and rate their culinary creations. Customers have the ability to add their favorite recipes to personalize their dining experience.',
            image: project3,
            liveSite: 'https://b7a10-chef-recipe-hunter-a7cc1.web.app/',
            githubServer: 'https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-Tahmid200-2673',
            githubClient: 'https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Tahmid200-2673',
        },
        // Add more projects as needed
    ];

    

    return (
        <section className="bg-zinc-900 py-48 ">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center gradient-text">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-slate-800 rounded-lg shadow-md h-full text-[#a6adba]">
                            <img src={project.image} alt={project.title} className="rounded-t-lg h-48 w-full object-cover" />
                            <div className="p-4  flex flex-col justify-between lg:h-64 md:h-96 h-96">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                     <p className="text-base font-semibold mt-2">{project.description}</p> 
                                </div>
                                <div className="flex justify-center">
                                   
                                       <Link to={`/projects/${project.id}`}><button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

           
        </section>
    );
};

export default Projects;
