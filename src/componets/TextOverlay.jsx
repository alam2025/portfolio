import React from 'react';

const TextOverlay = ({backgoundText, overlayText}) => {
  return (
    <div className="relative text-center  mb-12">
      <div className="text-4xl text-black font-bold md:text-8xl opacity-10 tracking-widest  p-4">{backgoundText}</div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold">
        {overlayText}
      </div>
    </div>
  );
};

export default TextOverlay;
