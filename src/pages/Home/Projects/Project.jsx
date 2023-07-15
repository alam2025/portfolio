import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'
import { TiWorld } from 'react-icons/ti'
import { RxCross2 } from 'react-icons/rx'

const Project = ({ info }) => {
      const { img, name, git_client, git_server, liveUrl,technology ,features} = info;
      const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => {
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setIsModalOpen(false);
      };

      return (
            <div>
                  <div className={'p-6 shadow-2xl hover:bg-gray-900 rounded-md'}>
                        <div className="h-[200px] overflow-y-auto">
                              <img className="rounded-md hover:overscroll-x-auto" src={img} alt="" />
                        </div>
                        <div className="mt-6">
                              <h2 className="text-xl">{name}</h2>
                              <div className="flex justify-between items-center mt-4">
                                    <div className="flex gap-4">
                                          <p>
                                                <a title='Live Link' href={liveUrl} target='_blank'><TiWorld size={30}/></a>
                                          </p>
                                          <p>
                                               {git_client &&  <a title='Client Repository' href={git_client} target='_blank'><FaGithub size={30}/></a>}
                                          </p>
                                          <p>
                                               {git_server &&  <a title='Server Repository' href={git_server} target='_blank'><AiOutlineLink size={30}/></a>}
                                          </p>
                                    </div>
                                    <button className=" btn btn-secondary btn-sm" onClick={openModal}>
                                          Details
                                    </button>
                                    {isModalOpen && (
                                          <div className="mx-10 fixed inset-0 z-50 flex items-center justify-center">
                                                <div className="modal-overlay"></div>
                                                <div className="modal-content bg-white text-black rounded-lg shadow-lg p-6">
                                                      <h3 className="font-bold text-xl">{name}</h3>

                                                      <h3 className=' text-lg font-semibold'>Technologies Used:</h3>
                                                      <p className='ml-4'>{technology}</p>
                                                      
                                                      <h2 className='text-lg font-semibold'>Features : </h2>

                                                      {
                                                            features.map((feature,index)=><ul className='pl-4' key={index}>
                                                                        <li> {feature}</li>
                                                            </ul>)
                                                      }
                                                      
                                                      <div className="modal-action">
                                                            <button className="btn btn-outline btn-warning" onClick={closeModal}>
                                                                 <RxCross2 size={30}/>
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    )}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Project;
