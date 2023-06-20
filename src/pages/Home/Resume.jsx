import React from 'react';
import TextOverlay from '../../componets/TextOverlay';

const Resume = () => {
      return (
            <div>
                  <TextOverlay backgoundText={'SUMMERY'} overlayText={'Resume'}></TextOverlay>

                  <section>
                        <h1 className=' text-2xl md:text-3xl font-bold'>My Education</h1>

                        <div>
                              <p className=' bg-cyan-400 badge'>DEC 2019 - Present</p>
                        </div>
                  </section>
            </div>
      );
};

export default Resume;