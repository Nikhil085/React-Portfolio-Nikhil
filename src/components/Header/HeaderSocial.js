import React from 'react';
import { FaLinkedin,  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";


function HeaderSocial() {
  return (
    <div className='header_social'>
        <a href='http://linkedin.com' target="_blank"><FaLinkedin/></a>
        <a href='http://github.com' target="_blank"><FaGithub/></a>
        <a href='http://instagram.com' target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocial;