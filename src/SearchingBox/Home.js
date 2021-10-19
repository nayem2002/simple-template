import React, { useRef } from 'react';
import MeinHeader from '../Components/MeinHeader';
import Survice from '../Components/Survice';
import Abouts from '../Components/Abouts';
import MoneySending from '../Components/MoneySending';
import Contacts from '../Components/Contacts';
import Fotar from '../Components/Fotar';

const Home = () => {
  return (
    <>
      <MeinHeader />
      <Survice />
      <Abouts />
      <MoneySending />
      <Contacts />
      <Fotar />
    </>
  );
};

export default Home;
