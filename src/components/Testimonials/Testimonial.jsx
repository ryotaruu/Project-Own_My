import React from 'react';
import './Testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const data = [
  {
    avatar: AVTR1,
    name: 'Nguyễn Thị Liễu',
    review: 'Tôi muốn đầu tư danh mục crypto tôi đoán nó sẽ giúp tôi phát triển tài chính'
  },
  {
    avatar: AVTR2,
    name: 'Trần Tiến Đạt',
    review: 'Các dự án đầu tư chỗ bạn tôi đã thu được rất nhiều lợi nhuận từ nó'
  },
  {
    avatar: AVTR3,
    name: 'Phương Thế Kha',
    review: 'Xời anh ta nói chuyện với tôi khiến tôi hiểu ra thêm rất nhiều',
  },
  {
    avatar: AVTR4,
    name: 'Hoàng Khả Vi',
    review: 'Cảm ơn rất nhiều <3',
  }
]
const Testimonial = () => {
  return (
    <section style={{marginTop: "890px"}} className='fix__contaier' id='testimonial'>
      <h5>Đánh giá từ khách hàng</h5>
      <h2>Bình luận</h2>
      <Swiper className="container testimonials__container" modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial