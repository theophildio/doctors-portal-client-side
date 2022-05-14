import React from "react";

const InfoCard = ({img, cardTitle, description, bgColor}) => {
	return (
		<div className={`card flex-col lg:flex-row card-side shadow-xl p-4 lg:p-8 ${bgColor}`}>
			<figure>
				<img className="w-20"
					src={img}
					alt="Movie"
				/>
			</figure>
			<div className="card-body p-4 lg:p-6 text-white">
				<h2 className="card-title">{cardTitle}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
