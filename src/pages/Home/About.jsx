import React from "react";

import TextOverlay from "../../componets/TextOverlay";
import resume from "../../assets/Alam Hossain-VueJS developer.pdf";
import { Fade } from "react-reveal";
const About = () => {
  const handleDownload = () => {
    window.open(resume, "_blank");
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Alam Hossain-VueJS developer.pdf";
    link.click();
  };
  return (
    <div id="about" className=" container  mt-24 mb-20">
      {/* <div >
                        <h1 className=' text-6xl opacity-20'>ABOUT ME</h1>
                        <h3 className=' font-extrabold'>Know Me About</h3>
                  </div> */}
      <TextOverlay
        overlayText={"Know Me More"}
        backgoundText={"About Me"}
      ></TextOverlay>

      <section className=" mt-20 flex w-full justify-center  gap-10 md:flex-row flex-col">
        <div className=" md:w-[60%]">
          <Fade left duration={2000}>
            <h1 className="text-3xl mb-4">
              I'm <span className=" text-green-400">Alam Hossain</span>, a Web
              Developer
            </h1>
            <div>
              <p>
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <br />
              <p>
                Delivering work within time and budget which meets client’s
                requirements is our moto.{" "}
              </p>
            </div>
          </Fade>
        </div>
        <Fade right duration={2000}>
          <div className=" divide-y-2 space-y-5 ">
            <h1>
              <span className="  font-semibold">Name </span>: Alam Hossain
            </h1>
            <h1>
              <span className=" font-semibold">Email :</span>{" "}
              <a href="mailto:dev.alam886@gmail.com">dev.alam886@gmail.com</a>
            </h1>
            <h1>
              <span className=" font-semibold">Age :</span> 24
            </h1>
            <h1>
              <span className=" font-semibold">From : </span> Jamalpur,
              Bangladesh
            </h1>

            <button
              onClick={handleDownload}
              className=" btn btn-info text-white rounded-full hover:bg-teal-700"
            >
              Download Resume
            </button>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default About;
