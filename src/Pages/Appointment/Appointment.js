import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import Footer from '../SharedPages/Footer/Footer';

const Appointment = () => {
  return (
    <div className="px-12">
      <AppointmentBanner></AppointmentBanner>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;