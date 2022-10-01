import React, { useRef } from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3rw77du', 'template_vobyfxd', form.current, 'MQGb1wXkkLRLuEmKG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Liên lạc</h5>
      <h2>Liên hệ với tôi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Senkiysma@gmail.com</h5>
            <a href="mailto::Senkiysma@gmail.com" target='__blank'>Gửi tin nhắn qua Email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Senkiysma</h5>
            <a href="https://m.me/senkuro.sj/" target='__blank'>Gửi tin nhắn qua Messenger</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+0123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+0123456789" target='__blank'>Gửi tin nhắn qua Whatsapp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tên đầy đủ của bạn' required/>
          <input type="email" name='email' placeholder='Email của bạn' required/>
          <textarea name="message" rows="7" placeholder='Tin nhắn của bạn'></textarea>
          <button type='submit' className='btn btn-primary'>Gửi tin nhắn</button>
        </form>
      </div>
    </section>
  )
}

export default Contact