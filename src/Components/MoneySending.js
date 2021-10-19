import React, { useState } from 'react';
import MoneySendingStore from './MoneySendingStore';

const MoneySending = () => {
  const [getingData, setGetingData] = useState(MoneySendingStore);
  return (
    <>
      <div className="container others">
        <h3>How to send money</h3>
        <div className="row">
          {getingData.map((carent) => {
            const { id, icon, title, dis } = carent;
            return (
              <>
                <div key={id} className="col-4 collam-style">
                  {icon}
                  <h4>{title}</h4>
                  <p>{dis}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoneySending;
