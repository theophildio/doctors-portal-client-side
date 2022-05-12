import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';

const Information = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard cardTitle="Opening Hours" description="Lorem Ipsum is simply dummy text of the pri" img={Clock} bgColor="bg-gradient-to-r from-primary to-secondary"></InfoCard>
      <InfoCard cardTitle="Visit our location" description="Brooklyn, NY 10036, United States" img={Marker} bgColor="bg-accent"></InfoCard>
      <InfoCard cardTitle="Contact us now" description="+000 123 456789" img={Phone} bgColor="bg-gradient-to-r from-primary to-secondary"></InfoCard>
    </div>
  );
};

export default Information;