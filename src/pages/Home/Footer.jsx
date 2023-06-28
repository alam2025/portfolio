import React from 'react';

const Footer = () => {
      return (
            <footer className=' py-16 px-10'>
                  <p>&copy; {new Date().getFullYear()} <span className=' text-info'>Alam</span> All rights reserved.</p>
            </footer>
      );
};

export default Footer;