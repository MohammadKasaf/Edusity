import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import './Navbar.css';

function  Navbar(){

    const [sticky,setSticky]=useState(false);

    useEffect(()=>{

          window.addEventListener('scroll',()=>{
                      window.scrollY >100 ? setSticky(true) : setSticky(false);

          })
    },[]);

    return (
        <nav className={`container ${sticky ? 'dark-nav':''}`}>
            <img className='logo' src={logo} />
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='about' smooth={true} offset={-260} duration={500}>Abous Us</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
        </nav>    
    )
}

export default Navbar
    