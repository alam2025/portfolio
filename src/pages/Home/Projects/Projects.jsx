import React, { useState } from 'react';
import TextOverlay from '../../../componets/TextOverlay';
import language from '../../../assets/projects/language.png'
import toy from '../../../assets/projects/toy.png'
import dragon from '../../../assets/projects/dragon_delights.png'
import food_hub from '../../../assets/projects/food-hub.png'
import job_seeker from '../../../assets/projects/job_seeker.png'
import nextPage from '../../../assets/projects/nextPage.png'
import fidelity from '../../../assets/projects/fidelity tradding.png'

import Project from './Project';


const Projects = () => {
      const infos = [
            {
                  id: 1,
                  name: 'Online Language Learning School',
                  img: language,
                  liveUrl: 'https://language-learning-school-83352.web.app/',
                  git_client: 'https://github.com/alam2025/Language-learning-school-client',
                  git_server: 'https://github.com/alam2025/language-learning-school-server',
                  technology: 'React.js, JavaScript, Express js, Node js, Tailwind css, Firebase , MongoDB, Vercel',
                  features: [
                        '1. Firebase Authentication for login and logout system.',
                        '2. Payment system used as Stripe',
                        '3.  Admin Can Add user role as instructor or admin.',
                        '4. Instructor can add a class and update class',
                        '5. Student Select a class and also erroll after paid payment.'
                  ]
            },
            {
                  id: 2,
                  name: 'Online Toy Marketplace',
                  img: toy,
                  liveUrl: 'https://toy-car-land.web.app/',
                  git_client: 'https://github.com/alam2025/toy-car-lan-client',
                  git_server: 'https://github.com/alam2025/toy-car-land-server',
                  technology: 'React.js, Express js, Node js, Tailwind css, Firebase , MongoDB, Vercel,Html5',
                  features: [
                        '1. Firebase Authentication for login and logout system.',
                        '2. User can view details about toy after click on view details button.',
                        '3. Shows toys on the home page based on Category.',


                  ]
            },
            {
                  id: 3,
                  name: 'Dragon Delights online food Restaurant',
                  img: dragon,
                  liveUrl: 'https://dragon-delights.web.app/',
                  git_client: 'https://github.com/alam2025/Dragon_Delights_Client',
                  git_server: 'https://github.com/alam2025/dragons-delights-server',
                  technology: 'React.js, JavaScript, Express js, Node js, Tailwind css, Firebase , MongoDB, Vercel',
                  features: [
                        '1. Firebase Authentication for login and logout system.',
                        '2. Popular user and chef are displayed on Home page',
                        '3. Favourite page and Details page are private.',
                        '4. User can added Recipe in his Favouite page',
                       
                  ]
            },
            {
                  id: 4,
                  name: 'Food Hub BD online Food Market',
                  img: food_hub,
                  liveUrl: 'https://food-hub-bd.web.app/',
                  git_client: 'https://github.com/alam2025/food-hub-bd-client',
                  git_server: 'https://github.com/alam2025/food-hub-bd-server',
                  technology: 'React.js, JavaScript, Express js, Node js, Bootstrap, React Bootstrap, Firebase , MongoDB, Vercel',
                  features: [
                        '1. Firebase Authentication for login and logout system.',
                        '2. Popular user and chef are displayed on Home page',
                        '3. Favourite page and Details page are private.',
                        '4. User can added Recipe in his Favouite page',
                       
                  ]
            },
            {
                  id: 5,
                  name: 'Job Seeker (Online Job Market)',
                  img: job_seeker,
                  liveUrl: 'https://food-hub-bd.web.app/',
                  git_client: 'https://github.com/alam2025/job-seeker',
                  
                  technology: ' JavaScript,Tailwind Css, Html5, CSS3, firebase',
                  features: [
                        '1. User can apply jobs.',
                        '2. Sweet alert used for notification',
                        '3. Smooth Scroll used .',
                        '4. Recharts used to show assignment mark',
                       
                  ]
            },
            {
                  id: 6,
                  name: 'NextPage (a bookshop)',
                  img: nextPage,
                  liveUrl: 'https://nimble-douhua-3eb7ad.netlify.app/',
                  git_client: 'https://github.com/alam2025/nextPage',
                  
                  technology: ' JavaScript,Tailwind Css, Html5, CSS3, netlify',
                  features: [
                        '1. In Home page Show a banner with Animation.',
                        '2. Book page display all books',
                        '3. When click on buy now redirect to the main site.',
                        
                       
                  ]
            },
            {
                  id: 7,
                  name: 'Fidelity Trading (a trading Website)',
                  img: fidelity,
                  liveUrl: 'https://www.luxwire-investment.online/',
                  git_client: 'https://github.com/alam2025/fidelity-trading/tree/main',
                  
                  technology: 'HTML, Vanilla CSS, PHP, JavaScript, Smarty Templete,Jquery',
                  features: [
                        '1. In Home page Show a banner , plans and features',
                        '2. Responsive Navbar',
                        '3. User Dashboard',
                        '4. Authentication system more Secure'
                        
                       
                  ]
            }
      ]



      return (
            <div id='portfolio' className='mt-16 w-[80%] mx-auto'>
                  <TextOverlay backgoundText={'Portfolio'} overlayText={'Projects'} />

                  <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                             infos.map(info=><Project key={info.id} info={info}  >

                              </Project>)
                        }
                        
                        {/* <div>
                              <div className={' p-6 shadow-2xl hover:bg-gray-900 rounded-md '}>
                                    <div className=' h-[300px] overflow-y-auto '>
                                          <img className=' rounded-md' src={dragon} alt="" />
                                    </div>
                                    <div className=' mt-6'>
                                          <h2 className='text-xl'>fdasfasf</h2>
                                          <div className=' flex justify-between mt-4'>
                                                <div className='flex gap-3'>
                                                      <p><a >Live</a></p>
                                                      <p><a >Client</a></p>
                                                      <p><a >Server</a></p>
                                                </div>
                                                <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button>
                                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                      <form method="dialog" className="modal-box">
                                                            <h3 className="font-bold text-lg">Hello!</h3>
                                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                                            <div className="modal-action">
                                                                  {/* if there is a button in form, it will close the modal */}
                                                                  {/* <button className="btn">Close</button>
                                                            </div>
                                                      </form>
                                                </dialog>

                                          </div>
                                    </div>
                                    
                              </div>
                        </div> */ }
                        {/* <Project language={language}></Project> */}




                  </section>








            </div>
      );
};

export default Projects;