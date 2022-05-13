import React from "react";

const ServiceCard = ({service}) => {
	const {icon, title, details} = service;
	return (
		<div className="card w-lg bg-base-100 shadow-md">
			<figure className="px-10 pt-10">
				<img src={icon} alt="" className="rounded" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{title}</h2>
				<p>{details}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
