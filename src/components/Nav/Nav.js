import React, { useState, useRef } from 'react';
import './Nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

function Nav() {

  const [activeNav, setActiveNav] = useState("");

  const navRef = useRef(".nav-div")

  return (
    <nav ref={navRef} className='nav-div'>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><AiOutlineUser /></a>
      <a href='#skill' onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><BiBook/></a>
      <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact  ' ? 'active' : ''}><MdOutlineMessage /></a>
    </nav>
  )
}

export default Nav;