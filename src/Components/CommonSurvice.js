import React from 'react';

const CommoBox = ({ icon, heading, preg }) => {
  return (
    <>
      <div className="col-4 culom">
        <div>{icon}</div>
        <h4>{heading}</h4>
        <p>{preg}</p>
      </div>
    </>
  );
};

export default CommoBox;
