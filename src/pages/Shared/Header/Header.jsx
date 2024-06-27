import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { BiCodeAlt } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
  const navList = (
    <>
      <li>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          delay={200}
        >
          Home
        </Link>{" "}
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          delay={200}
        >
          About
        </Link>{" "}
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          delay={200}
        >
          Skills
        </Link>{" "}
      </li>

      <li>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          delay={200}
        >
          Portfolio
        </Link>{" "}
      </li>

      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          delay={200}
        >
          Contact
        </Link>{" "}
      </li>
    </>
  );

  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex  flex-col">
          {/* Navbar */}
          <div className="bg-gradient-to-b fixed z-10 w-full   bg-[#09449E]">
            <div className="  navbar  text-white py-6 shadow-xl  container">
              <div className="flex-1 px-2 text-2xl font-semibold mx-2">
                Alam Hossain
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <div className="flex-none hidden lg:block">
                <ul className="menu  menu-horizontal">
                  {/* Navbar menu content here */}
                  {navList}
                </ul>
              </div>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mt-16 z-10">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            {navList}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
