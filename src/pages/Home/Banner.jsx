import React from 'react';
import banner_img from '../../assets/dev.jpg'
import ReactTypingEffect from 'react-typing-effect';

const Banner = () => {
      const handleHire = () => {
            const link = document.createElement('a');
            link.href = "mailto:alam13100852@gmail.com";
            link.click();
      }
      return (
            <div>
                  <div className="hero bg-fixed min-h-screen" style={{ backgroundImage: `url(${banner_img})` }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                              <div className="w-xl">
                                    <h1 className="mb-5 text-4xl font-bold">Welcome</h1>
                                    <ReactTypingEffect
                                          text={["I'm Alam Hossain.", "I'm a MERN STACK Web Developer!!!"]}
                                          cursorRenderer={cursor => <h1 className=' text-6xl'>{cursor}</h1>}
                                          displayTextRenderer={(text, i) => {
                                                return (
                                                      <h1>
                                                            {text.split('').map((char, i) => {
                                                                  const key = `${i}`;
                                                                  return (
                                                                        <span
                                                                              className=' text-6xl font-bold text-white'
                                                                              key={key}
                                                                              style={i % 2 === 0 ? { color: 'magenta' } : {}}
                                                                        >{char}</span>
                                                                  );
                                                            })}
                                                      </h1>
                                                );
                                          }}
                                    />
                                    <br />
                                    {/* <h2 className=' text-6xl mb-5 font-bold'>I'm Alam Hossain</h2> */}
                                    <button onClick={handleHire} className="mt-5 btn rounded-full px-10 text-emerald-400 font-bold text-xl border-4 hover:btn-info btn-outline ">Hire Me</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;