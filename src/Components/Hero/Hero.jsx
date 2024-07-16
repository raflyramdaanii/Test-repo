import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>General Trading For Industrial and Transportation</h1>
      <p>Kami merupakan perusahaan yang bergerak di bidang perdagangan umum,
        penyedia jasa transportasi dan logistik serta supplier dan distributor bahan kimia industri.</p>
      <Link to='about' className='btn' smooth={true} offset={-330} duration={500}>Explore more <img src={dark_arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
