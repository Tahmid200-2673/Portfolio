import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = 'Tahmid Ahmad Khan';

  return (
    <div className='bg-gray-700'>
      <footer className="footer p-10  text-[#a6adba]">
        <div className="text-center">
          <p className="text-center ml-auto sm:ml-0 md:ml-[12rem] lg:ml-[48rem] ">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
