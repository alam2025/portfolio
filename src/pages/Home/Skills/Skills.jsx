import React from 'react';
import TextOverlay from '../../../componets/TextOverlay';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/Si'
import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoNodejs } from 'react-icons/bi';

const Skills = () => {
     
      return (
            <div id='skills' className='w-[80%] mx-auto'>
                 <TextOverlay backgoundText={'MY Skills'} overlayText={'Skills'}/>

                 <section className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <FaHtml5 size={150} className='  '></FaHtml5>
                              <h3 className=' text-center'>HTML5</h3>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <FaCss3Alt size={150} className=' text-cyan-500 '/>
                              <h2>CSS3</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <FaBootstrap size={150} className=' text-orange-400 '/>
                              <h2>Bootstrap</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <SiTailwindcss size={150} className=' text-green-400 '/>
                              <h2>Tailwind CSS</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <SiDaisyui size={150} className=' text-orange-400 '/>
                              <h2>DaisyUI</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <RiJavascriptFill size={150} className=' text-orange-300 '/>
                              <h2>JavaScript</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <BiLogoNodejs size={150} className=' text-sky-600 '/>
                              <h2>Node JS</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <FaReact size={150} className=' text-teal-500 '/>
                              <h2>React.js</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <SiExpress size={150} className=' text-slate-300 '/>
                              <h2>Express JS</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <SiMongodb size={150} className=' text-green-600'/>
                              <h2>MongoDB</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <SiFirebase size={150} className=' text-amber-400 '/>
                              <h2>Firebase</h2>
                        </div>
                        <div className=' p-8 shadow-2xl flex flex-col items-center'>
                              <SiMysql size={150} className=' text-emerald-400 '/>
                              <h2>MySql</h2>
                        </div>
                     
                       
                 </section>
                 
            </div>
      );
};

export default Skills;