import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/minhanh.jpg';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Yo! Tên tôi là</h5>
        <h1>Nguyễn Minh Anh</h1>
        <h5 className='text-light'>Đồ án được thực hiện bởi Minh Anh</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img style={{borderRadius: '49px'}} src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Kéo xuống</a>
      </div>
    </header>
  )
}

export default Header