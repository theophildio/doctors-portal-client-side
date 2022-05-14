import React from "react";

const Service = ({ service, setBookNow }) => {
	const { name, slots } = service;
	return (
		<div className="card bg-base-100 shadow-md">
			<div className="card-body">
				<h2 className="card-title justify-center text-primary">{name}</h2>
				<p className="text-center">
					{slots.length > 0 ? (
						<span>{slots[0]}</span>
					) : (
						<span className="text-red-500">Booked</span>
					)}
				</p>
				<p className="text-center uppercase text-xs">
					{slots.length} {slots.length > 1 ? "spaces" : "space"} available
				</p>
				<div className="card-actions justify-center">
          <label onClick={() => setBookNow(service)} disabled={slots.length === 0} htmlFor="booking-modal-6" className="btn btn-primary text-base-100 modal-button">book appointment</label>
				</div>
			</div>
		</div>
	);
};

export default Service;
