import React from 'react';
import Banner from './Banner';
import Information from './Information';

const Home = () => {
  return (
    <div className='container'>
      <Banner />
      <Information></Information>
    </div>
  );
};

export default Home;