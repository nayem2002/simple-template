import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className="error-containear">
        <div className="content">
          <h1>Flie Not Found</h1>
          <Link to="/">
            <button>Back to home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
