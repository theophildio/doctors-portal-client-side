import { format } from "date-fns";
import { useAuthState } from 'react-firebase-hooks/auth';
import React from "react";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({bookNow, setBookNow, date, refetch}) => {
  const [user] = useAuthState(auth);
  const {_id, name, slots} = bookNow;
  const formateDate = format(date, 'PP');

  const handleBookink = e => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      patientId: _id,
      treatment: name,
      date: formateDate,
      slot,
      patientName: user.displayName,
      patientEmail: user.email,
      phone: e.target.phone.value
    }

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        toast(`You have booked appointment on ${formateDate} at ${slot}`)
      }
      else {
        toast.error(`You have existing appointment on ${data.booking?.date} at ${data.booking?.slot}`)
      }
      // Close modal
      setBookNow(null)
      refetch();
    })

    
  }


	return (
		<div>
			<input type="checkbox" id="booking-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box relative">
          <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<h3 className="font-bold text-lg mb-5 lg:mb-10">
						{name}
					</h3>
					<form onSubmit={handleBookink}>
            <input name="bookingkDate" type="text" value={format(date, 'PP')} disabled className="mb-5 input input-bordered w-full" />
            <select name="slot" className="select select-bordered w-full mb-5">
              {
                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
              }
            </select>
            <input name="fullName" type="text" disabled value={user.displayName || ' '} required className="mb-5 input input-bordered w-full" />
            <input name="phone" type="tel" placeholder="Phone Number" required className="mb-5 input input-bordered w-full" />
            <input name="email" type="email" disabled value={user.email} required className="mb-5 input input-bordered w-full" />
            <input type="submit" value="Submit" className="input bg-neutral text-base-100 uppercase cursor-pointer w-full input-bordered" />
          </form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
