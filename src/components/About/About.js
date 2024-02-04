import React from 'react'
import {useEffect} from 'react'
import '../About/About.css';
import meabout from '../../assets/me3.jpg';
import {FaAward} from 'react-icons/fa';
import { FaGraduationCap } from "react-icons/fa6";
import { GoProject } from "react-icons/go";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import dot from '../../assets/dot.png';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';


const About = () => {
  

  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   const card = document.querySelector('.myCard','.dotimg');

  //   gsap.from(card, {
  //     y: 150, 
  //     x:-40,
  //     opacity:1,
  //     scrollTrigger: {
  //       trigger: card,
  //       opacity:0,
  //       start: 'bottom bottom',
  //       end: 'top 40%',
  //       duration: 20,
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  // }, { scope: 'body' });
   
 

  // useEffect(() => {
    

  // }, []);

  useEffect(() => {
    const magneticBtn = document.querySelector('.magnetic-btn');
    const talkElement = document.querySelector('.talk');

    const activeAnimation = (e) => {
      const boundBox = magneticBtn.getBoundingClientRect();
      const magneticBtnStrength = 40;
      const newX = ((e.clientX - boundBox.left) / magneticBtn.offsetWidth).toFixed(2) - 0.5;
      const newY = ((e.clientY - boundBox.top) / magneticBtn.offsetHeight).toFixed(2) - 0.5;

      gsap.to(magneticBtn, {
        x: newX * magneticBtnStrength,
        y: newY * magneticBtnStrength,
        duration: 1,
        ease: 'Power4.easeOut',
      });

      gsap.to(talkElement, {
        x: newX * magneticBtnStrength, 
        y: newY * magneticBtnStrength,
        duration: 1,
        ease: 'Power4.easeOut',
      });
    };

    const removeAnimation = () => {
      gsap.to([magneticBtn, talkElement], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    const handleMouseMove = (e) => {
      activeAnimation(e);
      clearTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
      timeoutId = setTimeout(removeAnimation, 500);
    };

    let timeoutId;

    magneticBtn.addEventListener('mousemove', handleMouseMove);
    magneticBtn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      magneticBtn.removeEventListener('mousemove', handleMouseMove);
      magneticBtn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);




  return (
    <section id='about'>
      <img className='dotimg' src={dot} alt='dot-image'></img>
      <h5>Get To Know</h5>
      <h2 className='abt'>About Me</h2>
      <div className='container about__container'>
      <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
            <p class="title">Nikhil Mahajan</p>
                <p className='age'>Age - 24</p>
            </div>
            <div class="backSide">
                <div className='idimage'>
                  <img src={meabout}></img>
                </div>
                <div className='info'>
                  <p>Nikhil Mahajan</p>
                  <div className="connect">
                    <a><FaInstagramSquare/></a>
                    <a><FaFacebookSquare/></a>
                    <a><FaSquareXTwitter/></a>
                    <a><FaLinkedin/></a>
                  </div>
                  <button className="knowmore">Know More</button>
                </div>
            </div>
        </div>
    </div>
           <div className='about__content'>
             <div className='about__cards'>
              <article className='about__card'>
              <div class="blob"></div>
              <div class="blob"></div>
              <div class="blob"></div>
                <FaGraduationCap className='about__icon'/>
                <h5>Becholer's Degree</h5>
                <small>4 Years</small>
              </article>
              <article className='about__card'>
              <div class="blob"></div>
              <div class="blob"></div>
              <div class="blob"></div>
                <FaAward className='about__icon'/>
                <h5>C-DAC</h5>
                <small>From Hyderabad</small>
              </article>
              <article className='about__card'>
              <div class="blob"></div>
              <div class="blob"></div>
              <div class="blob"></div>
                <GoProject className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
             </div>
             <p className='para'>
             As a web designer, my objective is to make a positive impact
              on clients, co-workers, and the Internet using my skills and
               experience to design compelling and attractive websites.
             </p>
             <a href='#contact'  className='magnetic-btn'>
              <span className='talk'>Lets Talk</span>
             </a>
           </div>
      </div>
    </section>
  )
}

export default About