
import {  NavLink, Outlet, useLocation } from 'react-router-dom';
import profile from '../assets/Profile.png'
import { Link } from 'react-scroll';

const Main = () => {
   
      return (
            <div className="drawer lg:drawer-open">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content ">
                        {/* Page content here */}

                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>

                  </div>
                  <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className={`menu p-4 w-80 h-full  flex flex-col gap-4  bg-zinc-700 text-white`}>
                              {/* Sidebar content here */}
                              <img src={profile} className=' border-8 w-2/3 mx-auto rounded-full ' alt="" />
                              <li><NavLink  
                              
                                 to='/' 
                                

                              >Home</NavLink></li>

                              <li> <NavLink to="/about" 
                             >About Me</NavLink></li>

                              <li> <NavLink to="/do" 
                             >What I DO</NavLink></li>
                        </ul>

                  </div>
            </div>
      );
};

export default Main;


