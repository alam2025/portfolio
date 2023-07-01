import React from 'react';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import SocialSection from './SocialSection';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';


const Home = () => {
      return (
            <div  className=' bg-gradient-to-b from-[#000328] to-[#00458e]   text-white'>
                  
                  <Banner></Banner>
                  <SocialSection></SocialSection>

                  <About></About>
                  <Skills></Skills>

                  <Projects/>

                  <Contact></Contact>
                  <Footer></Footer>


            </div>
      );
};

export default Home;