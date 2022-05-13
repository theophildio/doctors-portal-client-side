import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Information from './Information';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
  return (
    <div className='container'>
      <Banner />
      <Information></Information>
      <Services></Services>
      <Treatment></Treatment>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;