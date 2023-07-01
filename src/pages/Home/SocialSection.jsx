import React, { useState } from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsMessenger } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { Fade } from 'react-reveal';
const SocialSection = () => {
      const [hoveredButton, setHoveredButton] = useState(null);

      const handleMouseEnter = (button) => {
            setHoveredButton(button);
      };

      const handleMouseLeave = () => {
            setHoveredButton(null);
      };

      return (

            <div className="fixed flex flex-col   z-10 top-[40%] w-[60px] ">
                  <Fade top duration={1000} delay={1000}>
                        <button 
                              className="flex  items-center justify-center text-white rounded-lg  border-0 "
                              onMouseEnter={() => handleMouseEnter('facebook')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <a href='https://web.facebook.com/alam2025.bd/' target='_blank'
                                    className={`${hoveredButton === 'facebook' ? 'ml-24' : '-ml-32'
                                          } px-4 py-4 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-500 gap-4`}
                              >
                                    <span className="mr-3 text-xl">Facebook</span> <BsFacebook size={25} />
                              </a>
                        </button>
                  </Fade>

                  <Fade left duration={1000} delay={1000}>
                        <button 
                              className="flex items-center justify-center text-white rounded-lg "
                              onMouseEnter={() => handleMouseEnter('mail')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <a
                              href='mailto:alam13100852@gmail.com' target='_blank'
                                    className={`${hoveredButton === 'mail' ? ' ml-20' : '-ml-20'
                                          } shadow-lg px-4 py-4 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-500 gap-4`}
                              >
                                    <span className="mr-3 text-xl">Mail</span> <AiOutlineMail size={25} />
                              </a>
                        </button>
                  </Fade>

                  <Fade right duration={1000} delay={1000}>
                        <button
                              className="flex items-center justify-center text-white rounded-lg "
                              onMouseEnter={() => handleMouseEnter('linkedin')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <a
                              href='https://www.linkedin.com/in/alam-hossain-195b11200/' target='_blank'
                                    className={`${hoveredButton === 'linkedin' ? 'ml-24' : '-ml-28'
                                          } shadow-lg px-4 py-4 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-500 gap-4`}
                              >
                                    <span className="mr-3 text-xl">Linkedin</span> <BsLinkedin size={25} />
                              </a>
                        </button>
                  </Fade>
                  <Fade bottom duration={1000} delay={1000}>
                        <button
                              className="flex items-center justify-center text-white rounded-lg "
                              onMouseEnter={() => handleMouseEnter('github')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <a href='https://github.com/alam2025' target='_blank'
                                    className={`${hoveredButton === 'github' ? 'ml-24' : '-ml-24'
                                          } shadow-lg px-4 py-4 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-500 gap-3`}
                              >
                                    <span className="mr-3 text-xl">GitHub</span> <BsGithub size={25} />
                              </a>
                        </button>
                  </Fade>


            </div>

      );
};

export default SocialSection;
