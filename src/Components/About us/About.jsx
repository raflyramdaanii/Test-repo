import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
       <div className="about-right">
        <h3>ABOUT OUR COMPANY</h3>
        <h2> Innovating Trade, Powering Progress</h2>
        <p>established in 2015 and based in Bandung,
            is a dynamic and forward-thinking company specializing in the general trading 
            of goods and services. With a steadfast commitment to excellence and innovation,
            we serve a broad range of industries through our diverse departments, each dedicated
            to providing top-tier solutions and expertise.</p>
        <p>At PT. Anugrah Jaya International, we are driven by a commitment to quality, 
           customer satisfaction, and continuous improvement. Our goal is to forge long-lasting
           partnerships with our clients by delivering reliable, efficient, and innovative
           solutions that meet their evolving needs.</p>
        <p>We pride ourselves on our ability to adapt to market changes and
           embrace new technologies, ensuring that we remain at the forefront 
           of our industry. Our team of dedicated professionals is always ready to provide
           expert guidance and support, helping our clients achieve their goals and succeed 
           in a competitive marketplace.</p>
        <p>With a strong foundation built on trust, integrity, and excellence,
           PT. Anugrah Jaya International is your partner of choice for general 
           trading solutions in the industrial and transportation sectors. 
            We look forward to continuing our journey of growth and success, 
            contributing to the advancement of the industries we serve.</p>
       </div>
    </div>
  )
}

export default About
