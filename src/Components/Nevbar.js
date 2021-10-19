import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nevbar = () => {
  const [toggle, setToggle] = useState(false);

  const hember = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container-fluid p">
        <nev className="row nev">
          <div className=" col-4 nev-brand">
            <Link to="/">
              <h2>Nayem</h2>
            </Link>
          </div>
          <div className={toggle ? ' col-8 items open-closed' : 'col-8 items'}>
            <ul>
              <li>
                <Link smooth exact activeClassName="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="#service">
                  Survice
                </Link>
              </li>
              <li>
                <Link smooth to="#about">
                  About
                </Link>
              </li>
              <li>
                <Link smooth to="#contact">
                  Contact
                </Link>
              </li>
              <Link smooth to="#contact">
                <button
                  type="submit"
                  className="simillar-btn"
                  id="first-button"
                >
                  Sign Up
                </button>
                <button type="submit" className="simillar-btn" id="button">
                  Logh In
                </button>
              </Link>
            </ul>
          </div>
          <div id="hember">
            <i
              onClick={hember}
              className={toggle ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </nev>
      </div>
    </>
  );
};

export default Nevbar;
