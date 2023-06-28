import React from 'react';
import Banner from './Banner';
import About from './About';
import Do from './Do';
import TextOverlay from '../../componets/TextOverlay';
import MyWork from './MyWork';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
      return (
            <div  >
                  
                  <Banner></Banner>

                  <About></About>


                  <Do></Do>

                  

                  <div className=' bg-slate-200'>
                        <MyWork></MyWork>

                  </div>

                  <Contact></Contact>
                  <Footer></Footer>


            </div>
      );
};

export default Home;