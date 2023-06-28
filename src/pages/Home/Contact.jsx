import React from 'react';
import TextOverlay from '../../componets/TextOverlay';
import { useForm } from 'react-hook-form';
import {
      FaCloudShowersHeavy,
      FaFacebook,
      FaGithub,
      FaLinkedin,
      FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
      const { register, handleSubmit } = useForm();

      const onSubmit = (data) => {
            console.log(data);
      };

      return (
            <div className=" mb-20 py-20 w-[80%] mx-auto " id='contact'>
                  <TextOverlay backgoundText={'Contact'} overlayText={'Get In Touch'}></TextOverlay>

                  <section className="flex flex-col-reverse md:flex-row gap-12">
                        <div>
                              <h1 className="text-3xl font-bold mb-6">Address</h1>
                              <h3>Jamalpur, Bangladesh</h3>
                              <div className="my-6">
                                    <p>+880 1925375672</p>
                                    <p>
                                          <a href="mailto:alam13100852@gmail.com">alam13100852@gmail.com</a>
                                    </p>
                              </div>
                              <h1 className="text-xl font-semibold uppercase">Follow Me</h1>
                              <div className="flex gap-6 my-5">
                                    <div className="relative group">
                                          <a href="#">
                                                <FaFacebook size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                Facebook
                                          </div>
                                    </div>
                                    <div className="relative group">
                                          <a href="#">
                                                <FaGithub size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                GitHub
                                          </div>
                                    </div>
                                    <div className="relative group">
                                          <a href="#">
                                                <FaLinkedin size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                LinkedIn
                                          </div>
                                    </div>
                                    <div className="relative group">
                                          <a href="#">
                                                <FaTwitter size={20} />
                                          </a>
                                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded mt-2">
                                                Twitter
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
                              <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mx-auto">
                                    <div className="grid grid-cols-2 gap-4">
                                          <div>
                                                <label className="block mb-2">Name</label>
                                                <input
                                                      type="text"
                                                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                                      {...register('name')}
                                                      placeholder='Name'
                                                />
                                          </div>
                                          <div>
                                                <label className="block mb-2">Email</label>
                                                <input
                                                      type="email"
                                                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                                      {...register('email')}
                                                      placeholder='Email'
                                                />
                                          </div>
                                    </div>

                                    <div className="mt-4">
                                          <label className="block mb-2">Message</label>
                                          <textarea
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                                rows="4"
                                                {...register('message')}
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
