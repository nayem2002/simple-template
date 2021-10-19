import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MeinHeader = () => {
  const [showIcon, setShowIcon] = useState(false);

  const toggleIcon = () => {
    if (window.pageYOffset > 300) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleIcon);
    return () => {
      window.removeEventListener('scroll', toggleIcon);
    };
  }, []);
  return (
    <>
      <section className="header ">
        <div className="container">
          <div className="row row-style header-row ">
            <div className="col-5 content">
              <h1>
                Online Payment Made <b />
                Easy For You
              </h1>
              <p className="common-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque vitae doloribus quam laboriosam ipsum optio provident
                cum iure fugiat voluptatem!
              </p>
              <div className="input">
                <h3>Get early access you</h3>
                <input type="text" placeholder="Enter Your Email" />
                <Link to="/contact">
                  <button type="submit" className="header-btn">
                    Got it Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-7 images">
              <img
                src="image/1.jpg"
                alt="image"
                className="img-fluid position-relative mein-image"
              />

              <img
                src="image/4.jpg"
                alt="image"
                className="img-fluid image-responsive"
              />
            </div>
          </div>
        </div>
        <div
          onClick={scrollToTop}
          className={showIcon ? 'back-to-top show' : 'back-to-top'}
        >
          <i className="fas fa-angle-left"></i>
        </div>
      </section>
    </>
  );
};

export default MeinHeader;
