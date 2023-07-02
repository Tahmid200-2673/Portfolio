

import { Link } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();
  // Check if the current page location is the home page
  const isHomePage = location.pathname === '/';
  return (
    <>
    <div className="navbar-container bg-slate-950">
      <div className="navbar  mt-5 lg:ml-[12rem]">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-[#a6adba]">Home</Link>
        <Link to="/resume" className="btn btn-ghost normal-case text-xl text-[#a6adba]">Resume</Link>
        <Link to="/projects" className="btn btn-ghost normal-case text-xl text-[#a6adba]">Projects</Link>
        <Link to="/about" className="btn btn-ghost normal-case text-xl text-[#a6adba]">About Me</Link>
        <div className="lg:ml-36 md:ml-36">
 
 {/* <a href="#contact" className="btn btn-outline btn-accent w-36">Contact Me</a> */}
 {isHomePage && (
          <a href="#contact" className="btn btn-outline btn-accent w-36">Contact Me</a>
        )}
 
</div>
      </div>

    </div>
    </>
    
  );
};

export default Navbar;
