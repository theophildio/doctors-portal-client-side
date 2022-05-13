import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Information from './Information';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
  return (
    <div className='container'>
      <Banner />
      <Information></Information>
      <Services></Services>
      <Treatment></Treatment>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;