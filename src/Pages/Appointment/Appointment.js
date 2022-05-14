import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import Footer from '../SharedPages/Footer/Footer';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="px-4 lg:px-12">
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments date={date}></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;