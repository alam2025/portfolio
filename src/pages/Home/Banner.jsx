import React, { useCallback } from "react";
import banner_img from "../../assets/dev.jpg";
import ReactTypingEffect from "react-typing-effect";
import resume from "../../assets/Alam Hossain-VueJS developer.pdf";
import { Fade } from "react-reveal";

const Banner = () => {
  const handleHire = () => {
    const link = document.createElement("a");
    link.href = "mailto:alam13100852@gmail.com";
    link.click();
  };
  const handleResume = () => {
    window.open(resume, "_blank");
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Alam Hossain-VueJS developer.pdf";
    link.click();
  };

  return (
    <div id="home">
      <div
        className="hero bg-[#09449E] bg-blend-luminosity bg-fixed bg-cover bg-center h-[100vh] relative overflow-hidden"
        style={{ backgroundImage: `url(${banner_img})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content py-40 text-center text-neutral-content">
          <div className="w-xl">
            <Fade top delay={500} duration={2000}>
              <h1 className="mb-5 text-2xl font-bold">Welcome</h1>
              <h1 className="mb-5 text-4xl font-bold">I'm Alam Hossain</h1>
              <ReactTypingEffect
                text={[
                  "Front-end Web Developer",
                  "VueJS || NuxtJS Developer.",
                  "React.js Developer",
                  "Specialized in MERN Stack !!!",
                ]}
                cursorRenderer={(cursor) => (
                  <h1 className=" text-3xl">{cursor}</h1>
                )}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1>
                      {text.split("").map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span
                            className=" text-4xl font-bold text-white underline"
                            key={key}
                            // style={i % 2 === 0 ? { color: 'magenta' } : {}}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </h1>
                  );
                }}
                speed={50}
                startDelay={50}
              />
              <br />
            </Fade>
          </div>
        </div>
        <Fade bottom delay={500} duration={2000}>
          <div className=" flex flex-col md:flex-row gap-4 mt-80">
            <button
              onClick={handleHire}
              className="btn  btn-secondary rounded-full px-10 text-emerald-400 font-bold text-xl border-4 hover:btn-info  "
            >
              Hire Me
            </button>

            <button
              onClick={handleResume}
              className=" btn rounded-full text-emerald-400 font-bold text-xl border-4 hover:btn-info btn-outline "
            >
              Download Resume
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
