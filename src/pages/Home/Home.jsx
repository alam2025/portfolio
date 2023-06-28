import React from 'react';
import Banner from './Banner';
import About from './About';
import Do from './Do';
import TextOverlay from '../../componets/TextOverlay';
import MyWork from './MyWork';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import SocialSection from './SocialSection';


const Home = () => {
      return (
            <div  className=' bg-gradient-to-b from-[#000328] to-[#00458e]   text-white'>
                  
                  <Banner></Banner>
                  <SocialSection></SocialSection>

                  <About></About>


                  <Do></Do>

                  

                  <div className=' w-[80%] mx-auto'>
                        <MyWork></MyWork>

                  </div>

                  <Contact></Contact>
                  <Footer></Footer>


            </div>
      );
};

export default Home;