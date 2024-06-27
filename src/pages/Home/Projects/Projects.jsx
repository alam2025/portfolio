import React, { useState } from "react";
import TextOverlay from "../../../componets/TextOverlay";

import Project from "./Project";

const Projects = () => {
  const infos = [
    {
      id: 1,
      name: "NSRIC International School (Nuxt.js saas website)",
      img: "https://i.ibb.co/PQVh2sJ/Fire-Shot-Capture-123-web-nistonline-ca.png",
      liveUrl: "https://web.nistonline.ca/",

      technology: "NuxtJS, Tailwind CSS , Pinia, Headless UI, Nuxt Image",
      features:
        "NSRIC International School is a saas website that serve campus to any school or institutions.You can easily maintains your school using this website. It’s dynamic roles and interfaces like student, parent, instructor,admin, partner etc .",
    },
    {
      id: 2,
      name: "CoinCompare (NUXT project)",
      img: "https://i.ibb.co/rvpxY1f/Fire-Shot-Capture-127-Coincompare-net-Compare-cryptos-save-on-fees-coincompare-net.png",
      liveUrl: "https://coincompare.net/",

      technology: "NuxtJS, Tailwind CSS, Pinia, Nuxt Image,NodeJS",
      features: "",
    },
    {
      id: 3,
      name: "NsricVisa (Vue.js visa consultant website)",
      img: "https://i.ibb.co/pKCFMqv/Fire-Shot-Capture-125-NSRIC-VISA-nsricvisa-ca.png",
      liveUrl: "https://nsricvisa.ca/",

      technology: "VueJS, VueX, Tailwind CSS, Vite, Vue router",
      features:
        "NsricVisa is a visa consultant website where users easily get visa using this website. It has more roles client ,gent and admin. Have different interface likes for user view, client dashboard, agent and admin dashboard.",
    },
    {
      id: 4,
      name: "Ya-sin (ReactJS masjid management website)",
      img: "https://i.ibb.co/GxpWPSK/Fire-Shot-Capture-129-YA-SIN-www-ya-sin-app.png",
      liveUrl: "https://www.ya-sin.app/",

      technology:
        "React.js, Mysql, Tailwind CSS, Daisy UI , AXIOS, React Query, Custom Hooks etc",
      features:
        "Ya-sin is a masjid management website. Here masjid authority can register their masjid in ya-sin then user can subscribe this masjid like a page in Facebook. Then all info that is provided from this masjid it’s subscriber notify via email, SMS or notification. Each masjid admin can select template to show in his masjid profile. It has a lots of feature like salat time info, calendar,event, announcement, member, services etc.",
    },

    {
      id: 6,
      name: "NextPage (a bookshop)",
      img: "https://i.ibb.co/YRRNfs9/Fire-Shot-Capture-130-next-Page-nimble-douhua-3eb7ad-netlify-app.png",
      liveUrl: "https://nimble-douhua-3eb7ad.netlify.app/",

      technology: " JavaScript,Tailwind Css, Html5, CSS3, netlify",
      features: "",
    },
  ];

  return (
    <div id="portfolio" className="mt-16 container">
      <TextOverlay backgoundText={"Portfolio"} overlayText={"Projects"} />

      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {infos.map((info) => (
          <Project key={info.id} info={info}></Project>
        ))}

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
                        </div> */}
        {/* <Project language={language}></Project> */}
      </section>
    </div>
  );
};

export default Projects;
