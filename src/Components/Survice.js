import React from 'react';
import CommonSurvice from './CommonSurvice';

const Survice = () => {
  return (
    <>
      <div className="container survice" id="service">
        <div className="mein-box">
          <h2 className="common-h2">How does it work</h2>
          <div className="row">
            <CommonSurvice
              icon={<i className=" icon fas fa-download"></i>}
              heading="Download App"
              preg=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint eum
          neque repellendus, nulla perferendis impedit eos tempora reprehenderit
          ab."
            />
            <CommonSurvice
              icon={<i className=" icon fas fa-chalkboard-teacher"></i>}
              heading="Complate the Instruction"
              preg=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint eum
             neque repellendus, nulla perferendis impedit eos tempora reprehenderit
             ab."
            />
            <CommonSurvice
              icon={<i className=" icon fas fa-funnel-dollar"></i>}
              heading="Receve your funds"
              preg=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint eum
             neque repellendus, nulla perferendis impedit eos tempora reprehenderit
             ab."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Survice;
