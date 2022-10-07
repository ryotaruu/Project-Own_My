import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MINH ANH</a>
      <ul className='permalinks'>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="about">Về tôi</a></li>
        <li><a href="#experience">Kinh nghiệm</a></li>
        <li><a href="#services">Dịch vụ</a></li>
        <li><a href="#portfolio">Đầu tư</a></li>
        <li><a href="#testimonials">Đánh giá</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; DON'T NOT COPYRIGHT</small>
      </div>
    </footer>
  )
}

export default Footer