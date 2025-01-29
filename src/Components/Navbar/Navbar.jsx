import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.avif'
import hamburger_icon from '../../assets/hamburger_icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);
    
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    
  return (
    <nav className= {`container ${sticky ? 'dark-nav' : ''}`}>
       <img src={logo} alt="Talented Edu Academy" className='logo' />
       <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
         <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
         <li><Link to='program' smooth={true} offset={-300} duration={500}>Program</Link></li>
         <li><Link to='about' smooth={true} offset={-180} duration={500}>About Us</Link></li>
         <li><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
         <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
         <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn'>Contact us</Link></li>
       </ul>
       <img src={hamburger_icon} alt=""  className='menu-icon' onClick={toggleMenu}/> 
    </nav>
  )
}

export default Navbar