import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faDatabase, faBug } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building scalable and responsive web applications using the MERN stack.',
      icon: faCode,
    },
    {
      title: 'Responsive Design',
      description: 'Creating mobile-friendly and adaptable user interfaces for seamless user experiences.',
      icon: faMobileAlt,
    },
    {
      title: 'Database Design',
      description: 'Creating efficient and optimized database schemas for data storage and retrieval.',
      icon: faDatabase,
    },
    {
      title: 'Bug Fixing',
      description: 'Identifying and resolving issues and bugs in web applications to ensure smooth functionality.',
      icon: faBug,
    },
  ];

  return (
    <section className="bg-zinc-900 services py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-white gradient-text">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 text-[#a6adba] p-6 rounded shadow flex flex-col items-center"
            >
              <FontAwesomeIcon icon={service.icon} size="3x" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

