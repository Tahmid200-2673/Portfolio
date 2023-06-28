

import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar bg-base-100 mt-5 ">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to="/resume" className="btn btn-ghost normal-case text-xl">Resume</Link>
        <Link to="/projects" className="btn btn-ghost normal-case text-xl">Projects</Link>
        <Link to="/about" className="btn btn-ghost normal-case text-xl">About Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
