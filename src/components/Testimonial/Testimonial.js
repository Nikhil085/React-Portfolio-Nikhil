import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import first from '../../assets/firstq.png';
import second from '../../assets/secondq.png';

function Testimonial() {
  
  return (
    <>
    <section id='testimonial'>
      <h5>What I Offer</h5>
      <h2 className='service'>Services</h2>
      <div className='slider'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className='fristimg'>
         <img src={first}></img>
         </div>
          <div className='slider-content'>
          Focusing on the core principles of UI design and functionality implementation.<br/> I am experienced in working on projects of all
          </div>
          <div className='secondimg'>
         <img src={second}></img>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='fristimg'>
         <img src={first}></img>
         </div>
          <div className='slider-content'>
          deliver our best efforts to ingeniously convert your ideas and thoughts <br/>into a clear and fully functional design. 
          </div>
          <div className='secondimg'>
         <img src={second}></img>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='fristimg'>
         <img src={first}></img>
         </div>
          <div className='slider-content'>
          We design wireframes to provide you an outline of a mobile or web app<br/> by demonstrating content, structure and functionality that will exist on<br/> your app’s and software’s pages.
          </div>
          <div className='secondimg'>
         <img src={second}></img>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='fristimg'>
         <img src={first}></img>
         </div>
          <div className='slider-content'>
            Provide Client  with a professional and reliable service that<br/> meets their needs. I am experienced in working on projects of all
          </div>
          <div className='secondimg'>
         <img src={second}></img>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='fristimg'>
         <img src={first}></img>
         </div>
          <div className='slider-content'>
          We design wireframes to provide you an outline of a mobile or web app<br/> by demonstrating content, structure and functionality that will exist on<br/> your app’s and software’s pages.
          </div>
          <div className='secondimg'>
         <img src={second}></img>
         </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='infi-slider'>
         <div className='scroller-in-1'>
         <h4>Going </h4>
          <h4>With </h4>
          <h4>Trend </h4>
         </div>
         <div className='scroller-in-1'>
         <h4> Going </h4>
          <h4> With </h4>
          <h4> Trend </h4>
         </div>
        </div>
    </section>
    </>
  )
}

export default Testimonial