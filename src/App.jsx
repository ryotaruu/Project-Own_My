import React from 'react'
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/about/About.jsx';
import Exprience from './components/experience/Experience.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Testimonial from './components/Testimonials/Testimonial.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Exprience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App