import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

function Nav() {
  const [activeNav, setActiveNav] = useState("");
  const [showTips, setShowTips] = useState(false);

  const handleMouseEnter = (navId) => {
    setActiveNav(navId);
    setShowTips(true);
  };

  const handleMouseLeave = () => {
    setShowTips(false);
  };

  return (
    <nav className='nav-div'>
      <a 
        href='#' 
        onMouseEnter={() => handleMouseEnter('#')}
        onMouseLeave={handleMouseLeave}
        className={activeNav === '#' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#' ? 1 : 0 }} className="tips">Home</span>
        <AiOutlineHome />
      </a>
      <a 
        href='#about' 
        onMouseEnter={() => handleMouseEnter('#about')}
        onMouseLeave={handleMouseLeave}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#about' ? 1 : 0 }} className="tips">About</span>
        <AiOutlineUser />
      </a>
      <a 
        href='#skill' 
        onMouseEnter={() => handleMouseEnter('#skill')}
        onMouseLeave={handleMouseLeave}
        className={activeNav === '#skill' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#skill' ? 1 : 0 }} className="tips">Skill</span>
        <BiBook/>
      </a>
      <a 
        href='#project' 
        onMouseEnter={() => handleMouseEnter('#project')}
        onMouseLeave={handleMouseLeave}
        className={activeNav === '#project' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#project' ? 1 : 0 }} className="tips">Project</span>
        <RiServiceLine />
      </a>
      <a 
        href='#contact' 
        onMouseEnter={() => handleMouseEnter('#contact')}
        onMouseLeave={handleMouseLeave}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#contact' ? 1 : 0 }} className="tips">Contact</span>
        <MdOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
