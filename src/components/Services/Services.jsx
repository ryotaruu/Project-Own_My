import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi';
const Services = () => {
  return (
    <section id='services'>
      <h5>Tôi cung cấp cái gì</h5>
      <h2>Dịch vụ</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Thiết kế UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Thực hiện nghiên cứu người dùng</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Xây dựng tính cách người dùng</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Xây dựng kiến trúc thông tin</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tạo luồng người dùng và khung dây</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tạo mẫu và thử nghiệm người dùng</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Thiết kế trực quan</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Phát triển Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Java</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>NodeJs</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Sáng tạo nội dung</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lập kế hoạch cho loại nội dung cần tạo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mục đích và các mục tiêu cụ thể</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Các phương pháp hay nhất để sáng tạo nội dung</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tập trung vào khả năng sáng tạo, đọc viết</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sáng tạo và tạo một kênh tiếp thị</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services