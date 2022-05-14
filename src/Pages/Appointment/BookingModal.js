import { format } from "date-fns";
import React from "react";

const BookingModal = ({bookNow, setBookNow, date}) => {
  const {_id, name, slots} = bookNow;

  const handleBookink = e => {
    e.preventDefault();
    const slot = e.target.slot.value;
    setBookNow(null)
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
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input name="fullName" type="text" placeholder="Full Name" required className="mb-5 input input-bordered w-full" />
            <input name="phone" type="tel" placeholder="Phone Number" required className="mb-5 input input-bordered w-full" />
            <input name="email" type="email" placeholder="Email" required className="mb-5 input input-bordered w-full" />
            <input type="submit" value="Submit" className="input bg-neutral text-base-100 uppercase cursor-pointer w-full input-bordered" />
          </form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;