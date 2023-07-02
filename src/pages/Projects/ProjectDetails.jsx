import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { id } = useParams();
  const projectData = useLoaderData();

  const project = projectData.find((project) => project.id === parseInt(id));

  return (
    <div className="bg-zinc-900 p-4">
     <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Project Details</h2>
      <div className="bg-slate-800 text-[#a6adba] rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <h4 className="font-bold">Features:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
<div className="flex flex-wrap justify-center lg:place-content-start lg:gap-2 gap-4">
  <p>
    <button className="btn btn-primary">
      <a href={project.liveSite} className="text-white" target="_blank" rel="noopener noreferrer">
        Visit Live Site
      </a>
    </button>
  </p>
  <p>
    <button className="btn bg-gray-600">
      <a href={project.githubClient} className="text-white " target="_blank" rel="noopener noreferrer">
        GitHub Client
      </a>
    </button>
  </p>
  <p>
    <button className="btn  bg-gray-600">
      <a href={project.githubServer} className="text-white" target="_blank" rel="noopener noreferrer">
        GitHub Server
      </a>
    </button>
  </p>
</div>

      </div>
      <div className="mt-4 text-center">
        <h4 className="font-bold gradient-text ">Project Images:</h4>
        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-2 " style={{width:"50rem",marginLeft:"32rem"}}> */}
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-2 lg:w-[50rem] lg:ml-[32rem]" > 
          <img src={project.image1} alt="Project Image 1" className="rounded-lg" />
          <img src={project.image2} alt="Project Image 2" className="rounded-lg" />
          <img src={project.image3} alt="Project Image 3" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
