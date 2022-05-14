import React from 'react';
import Footer from '../SharedPages/Footer/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Information from './Information';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
  return (
    <div>
      <Banner />
      <Information></Information>
      <Services></Services>
      <Treatment></Treatment>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;