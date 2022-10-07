import React from 'react';
import './About.css';
import ME from '../../assets/minhanh.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Làm quen một chút nhỉ!</h5>
      <h2>Những điều về tôi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Kinh nghiệm</h5>
              <small>1+ năm làm việc</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Khách hàng</h5>
              <small>2+ trên cả nước</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Dự án</h5>
              <small>5+ đã hoàn thành</small>
            </article>
          </div>
          <p>
            Xin chào các bạn chúng tôi mang đến cho các bạn dịch vụ trải nghiệm tốt nhất của công ty chúng tôi các bạn chỉ cần tìm đến tôi và trò chuyện với một vài yểu cầu tôi sẽ xử lý nhanh nhất và tốt nhất nhắm hài lòng các bạn. Xin cảm ơn !
          </p>
          <a href="#contact" className='btn btn-primary'>Hãy trò chuyện với tôi</a>
        </div>
      </div>
    </section>
  )
}

export default About