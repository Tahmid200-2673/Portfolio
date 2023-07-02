import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs
      .send('service_e7z8h0l', 'template_kfdfzac', templateParams, 'vtk766EQnN0yKGTnb')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        // Show success message using sweetalert
        Swal.fire({
            icon: 'success',
            title: 'Email Sent',
            text: 'Your email has been sent successfully!',
          });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Show error message using sweetalert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.',
          });
      });
  };

  return (
   
        <div className=' bg-zinc-900 pb-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 md:px-4 px-2 text-[#a6adba]'>
        <div className="max-w-md lg:ml-[470px] bg-slate-800 p-10 rounded-md shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
           Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    <div className="max-w-md lg:ml-[1rem] bg-slate-800 p-6 rounded-md shadow-md ">
      <h2 className="text-2xl font-bold mb-4 mt-2">Get in Touch</h2>
      <div className="mb-4 mt-12">
        <p className="flex items-center font-medium mb-2">  <FaUser className="mr-2" /> Name: Tahmid Ahmad Khan</p>
        <p className="flex items-center mb-2">
          <FaEnvelope className="mr-2" />
          Email: tahmidahmed2002673@gmail.com
        </p>
        <p className="flex items-center mb-2">
          <FaPhone className="mr-2" />
          Phone: +8801533472575
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          Location: Dhaka, Bangladesh
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/tahmid-ahmed-khan-87a519258/" className="text-gray-400 hover:text-blue-500">
          <FiLinkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com/Tahmid200-2673" className="text-gray-400 hover:text-blue-500">
          <FiGithub className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/tahmid.tahmid.165" className="text-gray-400 hover:text-blue-500">
          <FiFacebook className="w-6 h-6" />
        </a>
      </div>
    </div>
    </div>
   
  );
};

export default ContactForm;
