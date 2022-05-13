import React from "react";
import ServiceCard from "./ServiceCard";
import Fluoride from "../../assets/images/fluoride.png";
import Cavity from "../../assets/images/cavity.png";
import Whitening from "../../assets/images/whitening.png";

const Services = () => {
	const services = [
		{
			_id: 1,
			icon: Fluoride,
			title: "Fluoride Treatment",
			details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
		},
		{
			_id: 2,
			icon: Cavity,
			title: "Cavity Filling",
			details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
		},
		{
			_id: 3,
			icon: Whitening,
			title: "Teeth Whitening",
			details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
		},
	]
	return (
		<div className="my-24 px-12">
			<h3 className="uppercase text-xl font-bold text-primary text-center">
				our services
			</h3>
			<h2 className="capitalize text-4xl text-center">Services We Provide</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-9 pt-16">
				{
					services.map(service => <ServiceCard
						key={service._id}
						service={service}
					></ServiceCard>)
				}
			</div>
		</div>
	);
};

export default Services;
