import React from 'react'
import CV from '../../assets/MyCV.pdf';
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Tải xuống CV</a>
        <a href="#contact" className='btn btn-primary'>Hãy nói chuyện!</a>
    </div>
  )
}

export default CTA