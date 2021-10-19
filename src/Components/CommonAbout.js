import React from 'react';
import { NavLink } from 'react-router-dom';

const CommonAbout = () => {
  return (
    <>
      <div className="container about" id="about">
        <p>--avalilable @ google and ios app store only</p>
        <h3>How to use the App</h3>
        <div className="row about-style">
          <div className="col-5 collam">
            <img
              src="image/hd.jpeg"
              alt="image"
              className="img-fluid img-sizing"
            />
          </div>

          <div className="col-7 collam">
            <div className="instruction">
              <div className="title">
                <span>1</span>
                <h5>Sing in</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quod dicta similique repellendus quis voluptatem nobis
                quibusdam? Quia fugit illum corrupti quaerat rerum cumque ab,
                quis eius quae, necessitatibus accusamus.
              </p>
              <div className="title">
                <span>2</span>
                <h5>Add your bank Account</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quod dicta similique repellendus quis voluptatem nobis
                quibusdam? Quia fugit illum corrupti quaerat rerum cumque ab,
                quis eius quae, necessitatibus accusamus.
              </p>
              <div className="title">
                <span>3</span>
                <h5>Send payment requst</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quod dicta similique repellendus quis voluptatem nobis
                quibusdam? Quia fugit illum corrupti quaerat rerum cumque ab,
                quis eius quae, necessitatibus accusamus.
              </p>
              <NavLink to="/moneysendingproccess">
                <button className="simillar-button">Learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const SecendBox = () => {
  return (
    <>
      <div className="container about">
        <p className="alingments">--support in any languages</p>
        <h3 className="alingments">
          World class support is
          <br /> avilable 24/7
        </h3>
        <div className="row reverse">
          <div className="col-5 collam">
            <img
              src="image/hd2.jpeg"
              alt="image"
              className="img-fluid img-sizing"
            />
          </div>

          <div className="col-7 collam">
            <div className="instruction">
              <div className="title">
                <span>1</span>
                <h5>Sing in</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quod dicta similique repellendus quis voluptatem nobis
                quibusdam? Quia fugit illum corrupti quaerat rerum cumque ab,
                quis eius quae, necessitatibus accusamus.
              </p>
              <div className="title">
                <span>2</span>
                <h5>Add your bank Account</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quod dicta similique repellendus quis voluptatem nobis
                quibusdam? Quia fugit illum corrupti quaerat rerum cumque ab,
                quis eius quae, necessitatibus accusamus.
              </p>
              <div className="title">
                <span>3</span>
                <h5>Send payment requst</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quod dicta similique repellendus quis voluptatem nobis
                quibusdam? Quia fugit illum corrupti quaerat rerum cumque ab,
                quis eius quae, necessitatibus accusamus.
              </p>
              <NavLink to="/moneysendingproccess">
                <button className="simillar-button">Learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommonAbout;
export { SecendBox };
