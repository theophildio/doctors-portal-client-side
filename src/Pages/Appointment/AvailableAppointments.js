import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
  const [services, setServices] = useState([]);
  const [bookNow, setBookNow] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setServices(data));
  }, []);

  return (
    <div className="lg:py-20 my-12 lg:my-14">
      <h2 className="text-xl text-primary text-center">Available Appointments on {format(date, 'PP')}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 lg:my-14">
        {
          services.map(service => <Service
            key={service._id}
            service={service}
            setBookNow={setBookNow}
          ></Service>)
        }
      </div>
      {bookNow && <BookingModal date={date} bookNow={bookNow} setBookNow={setBookNow}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;