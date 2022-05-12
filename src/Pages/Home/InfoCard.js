import React from "react";

const InfoCard = ({img, cardTitle, description, bgColor}) => {
	return (
		<div class={`card card-side shadow-xl p-8 ${bgColor}`}>
			<figure>
				<img
					src={img}
					alt="Movie"
				/>
			</figure>
			<div class="card-body text-white">
				<h2 class="card-title">{cardTitle}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
