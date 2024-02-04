import React from 'react'
import '../project/Project.css'
import img1 from '../../assets/image2.jpg'
import img2 from '../../assets/image1.jpg'
import img3 from '../../assets/portfolio3.jpg';
import img5 from '../../assets/portfolio2.jpg';
import img6 from '../../assets/portfolio6.jpg';

function Project() {
  return (
    <section id='project'>
      <h5 >My Recent Works</h5>
      <h2 className='head'>Projects</h2>
      <div className='container project__container'>
        <article className='project_item'>
          <div className='project__item-image'>
            <img src={img3} alt='img1'></img>
          </div>
          <h3>Blogg Application</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/Nikhil085/UpdateProject.git' className='btn'>Github</a>
          <a href='http://github.com' className='btn'>Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project__item-image'>
            <img src={img1} alt='img2'></img>
          </div>
          <h3>Animax Studio</h3>
          <div className='project_item-cta'>
          <a href='http://github.com' className='btn'>Github</a>
          <a href='http://github.com' className='btn'>Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project__item-image'>
            <img src={img2} alt='img3'></img>
          </div>
          <h3>GemCyber</h3>
          <div className='project_item-cta'>
          <a href='http://github.com' className='btn'>Github</a>
          <a href='http://github.com' className='btn'>Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project__item-image'>
            <img src={img2} alt='img4'></img>
          </div>
          <h3>Portfolio</h3>
          <div className='project_item-cta'>
          <a href='http://github.com' className='btn'>Github</a>
          <a href='http://github.com' className='btn'>Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project__item-image'>
            <img src={img5} alt='img5'></img>
          </div>
          <h3>Frontend Animated Elements</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/Nikhil085/Animated-features-designs.git' className='btn'>Github</a>
          <a href='http://github.com' className='btn'>Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project__item-image'>
            <img src={img6} alt='img6'></img>
          </div>
          <h3>React Minor</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/Nikhil085/Minor1-React.git' className='btn'>Github</a>
          <a href='http://github.com' className='btn'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project;