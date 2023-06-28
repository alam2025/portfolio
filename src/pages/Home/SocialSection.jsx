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
                  <Fade top duration={5000} delay={1000}>
                        <button
                              className="flex  items-center justify-center text-white rounded-lg  border-0 "
                              onMouseEnter={() => handleMouseEnter('facebook')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <span
                                    className={`${hoveredButton === 'facebook' ? 'ml-24' : '-ml-32'
                                          } px-4 py-6 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-1000 gap-4`}
                              >
                                    <span className="mr-3 text-xl">Facebook</span> <BsFacebook size={35} />
                              </span>
                        </button>
                  </Fade>

                  <Fade left duration={5000} delay={1000}>
                        <button
                              className="flex items-center justify-center text-white rounded-lg "
                              onMouseEnter={() => handleMouseEnter('mail')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <span
                                    className={`${hoveredButton === 'mail' ? ' ml-20' : '-ml-20'
                                          } shadow-lg px-4 py-6 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-1000 gap-4`}
                              >
                                    <span className="mr-3 text-xl">Mail</span> <AiOutlineMail size={35} />
                              </span>
                        </button>
                  </Fade>

                  <Fade right duration={5000} delay={1000}>
                        <button
                              className="flex items-center justify-center text-white rounded-lg "
                              onMouseEnter={() => handleMouseEnter('linkedin')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <span
                                    className={`${hoveredButton === 'linkedin' ? 'ml-24' : '-ml-28'
                                          } shadow-lg px-4 py-6 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-1000 gap-4`}
                              >
                                    <span className="mr-3 text-xl">Linkedin</span> <BsLinkedin size={35} />
                              </span>
                        </button>
                  </Fade>
                  <Fade bottom duration={5000} delay={1000}>
                        <button
                              className="flex items-center justify-center text-white rounded-lg "
                              onMouseEnter={() => handleMouseEnter('github')}
                              onMouseLeave={handleMouseLeave}
                        >
                              <span
                                    className={`${hoveredButton === 'github' ? 'ml-24' : '-ml-24'
                                          } shadow-lg px-4 py-6 rounded-md bg-btn overflow-x-visible h-[40px] flex items-center transition-all duration-1000 gap-3`}
                              >
                                    <span className="mr-3 text-xl">GitHub</span> <BsGithub size={35} />
                              </span>
                        </button>
                  </Fade>


            </div>

      );
};

export default SocialSection;
