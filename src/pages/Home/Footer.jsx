import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
      return (
            <footer className=' py-16 bg-slate-950 flex-col md:flex-row px-10 flex justify-between '>
                  <p>Copyright &copy; {new Date().getFullYear()} <span className=' text-info'>Alam</span> All rights reserved.</p>

                  <ul className=' flex gap-4 items-center'>
                        <li><Link className=' cursor-pointer' to="about" spy={true} smooth={true} offset={50} duration={1000} delay={200}>About</Link></li>

                        <li><Link className=' cursor-pointer'>Terms & Condition</Link></li>

                        <li><Link className=' cursor-pointer'>Privacy & Policy</Link></li>

                        <li><Link className=' cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={1000} delay={200}>Contact</Link></li>
                  </ul>
            </footer>
      );
};

export default Footer;