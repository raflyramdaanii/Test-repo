import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo} alt="Anugrah Jaya International" className='logo'/></Link>
      <ul className={mobileMenu?'':'mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-330} duration={500}>About us</Link></li>
        <li><Link to='layanan-section' smooth={true} offset={-350} duration={500}>Layanan</Link></li>
        <li><Link to='partner-section' smooth={true} offset={-350} duration={500}>Distributor</Link></li>
        <li><Link className='btn-nav'to='contact' smooth={true} offset={0} duration={500}>Contact us</Link></li>
      </ul>
      <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
