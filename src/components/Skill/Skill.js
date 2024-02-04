import React from 'react';
import './Skill.css';
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNodejs } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { MdOutlineAnimation } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { SiAdobexd } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";




function Skill() {
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2 className='msk'>My Skills</h2>
      <div className='container skill__container'>
        <div className='skill__frontend'>
              <h3>Frontend development</h3>
              <div className='skill__content'>
              <article className='skill__details'>
                  <IoLogoHtml5  style={{color:"orange"}} />
                  <h4>HTML</h4>
              </article>
              <article className='skill__details'>
                  <FaCss3Alt style={{color:"blue"}}/>
                  <h4>CSS</h4>
              </article>
              <article className='skill__details'>
                  <BsBootstrapFill style={{color:"#8A11F4"}}/>
                  <h4>Bootstrap</h4>
              </article>
              <article className='skill__details'>
                  <MdAnimation style={{color:"grey"}}/>
                  <h4>GSAP</h4>
              </article>
              <article className='skill__details'>
                  <MdOutlineAnimation style={{color:"grey"}}/>
                  <h4>Locomotive</h4>
              </article>
              <article className='skill__details'>
                  <SiAdobexd style={{color:"#450135"}}/>
                  <h4>Adobe XD</h4>
              </article>
              <article className='skill__details'>
                  <SiMui style={{color:"#0288D1"}} />
                  <h4>Material UI</h4>
              </article>
              <article className='skill__details'>
                   <FaReact style={{color:"#5ED9FB"}}/>
                  <h4>React.js</h4>
              </article>
            </div>
        </div>
        <div className='skill__backend'>
            <div className='skill__backend'>
              <h3>Backend development</h3>
              <div className='skill__content'>
              <article className='skill__details'>
                  <TbBrandNodejs  style={{color:"#73AA60"}}/>
                  <h4>Node.js</h4>
              </article>
              <article className='skill__details'>
                  <SiExpress style={{color:"Black"}}/>
                  <h4>Express.js</h4>
              </article>
              <article className='skill__details'>
                  <SiMongodb style={{color:"#55AD45"}}/>
                  <h4>MongoDB</h4>
              </article>
              <article className='skill__details'>
                  <IoLogoJavascript style={{color:"#EFD81D"}}/>
                  <h4>JavaScript</h4>
              </article>
              <article className='skill__details'>
                  <FaJava style={{color:"red"}}/>
                  <h4>Java</h4>
              </article>
              
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skill;