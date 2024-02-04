import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me1.png';
import HeaderSocial from './HeaderSocial';


function Header() {

  return (
    <header>
      <div className='motion-demo'></div>
      <div className='motion-demo2'></div>
      <div className='motion-demo3'></div>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1 className='header-text'>Nikhil Mahajan</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className='scroller'>
         <div className='scroller-in-1'>
          <h4>Programmer</h4>
         <h4>Developer</h4>
          <h4>UI/UX Designer</h4>
         </div>
         <div className='scroller-in-1'>
         <h4>Developer</h4>
          <h4>Programmer</h4>
          <h4>UI/UX Designer</h4>
         </div>
        </div>
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;