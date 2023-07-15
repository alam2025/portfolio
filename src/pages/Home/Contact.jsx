import React, { useRef } from 'react';
import TextOverlay from '../../componets/TextOverlay';


import {
      FaCloudShowersHeavy,
      FaFacebook,
      FaGithub,
      FaLinkedin,
      FaTwitter,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';



const Contact = () => {
      const form = useRef();


      const handleSubmit = (e) => {
            e.preventDefault()
            emailjs.sendForm('service_rmva3f4', 'template_y899v7h', form.current, 'x4r9ikATeq1OlKFMv')
                  .then((result) => {
                        
                        
                        e.target.reset()
                        toast.success("Your Message successfully sent.")
                  }, (error) => {
                        toast.error(error.text)
                       
                  });

      };

      return (
            <div className="  py-20 w-[80%] mx-auto " id='contact'>
                  <TextOverlay backgoundText={'Contact'} overlayText={'Get In Touch'}></TextOverlay>

                  <Toaster></Toaster>

                  <section className="flex flex-col-reverse md:flex-row gap-12">
                        <div>
                              <h1 className="text-3xl font-bold mb-6">Address</h1>
                              <h3>Jamalpur, Bangladesh</h3>
                              <div className="my-6">
                                    <p>+880 1925375672</p>
                                    <p>
                                          <a href="mailto:dev.alam886@gmail.com">dev.alam886@gmail.com</a>
                                    </p>
                              </div>
                              <h1 className="text-xl font-semibold uppercase">Follow Me</h1>
                              <div className="flex gap-6 my-5">
                                    <div className="relative group">
                                          <a href="https://web.facebook.com/alam2025.bd/">
                                                <FaFacebook size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                Facebook
                                          </div>
                                    </div>
                                    <div  className="relative group">
                                          <a href="https://web.facebook.com/alam2025.bd/">
                                                <FaGithub size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                GitHub
                                          </div>
                                    </div>
                                    <div className="relative group">
                                          <a href="https://www.linkedin.com/in/alam-hossain-195b11200/">
                                                <FaLinkedin size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                LinkedIn
                                          </div>
                                    </div>
                                    
                                    <div className="relative group">
                                          <a href="#">
                                                <FaCloudShowersHeavy size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                Weather
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className=" w-full ">
                              <h1 className="text-3xl font-bold mb-6">Send Us a Note</h1>
                              <form ref={form} onSubmit={handleSubmit} className="max-w-full mx-auto">
                                    <div className="grid grid-cols-2 gap-4">
                                          <div>
                                                <label className="block mb-2">Name</label>
                                                <input
                                                      type="text"
                                                      className="w-full px-4 py-2 border border-gray-300 text-black rounded-md"
                                                      name='user_name'
                                                      placeholder='Name'
                                                />
                                          </div>
                                          <div>
                                                <label className="block mb-2">Email</label>
                                                <input
                                                      type="email"
                                                      className="w-full text-black px-4 py-2 border border-gray-300 rounded-md"
                                                      name='user_email'
                                                      placeholder='Email'
                                                />
                                          </div>
                                    </div>

                                    <div className="mt-4">
                                          <label className="block mb-2">Message</label>
                                          <textarea
                                                className="w-full text-black px-4 py-2 border border-gray-300 rounded-md"
                                                rows="4"
                                                name='message'
                                                placeholder='Tell me , How can I help you?'
                                          ></textarea>
                                    </div>

                                    <button
                                          type="submit"
                                          className="mt-4 px-12 btn-info py-4 rounded-full hover:bg-teal-700 text-white"
                                    >
                                          Send Message
                                    </button>
                              </form>
                        </div>
                  </section>
            </div>
      );
};

export default Contact;
