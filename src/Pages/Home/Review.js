import React from "react";

const Review = ({ review }) => {
	const { content, avatar, name, location } = review;
	return (
		<div className="card w-96 bg-base-100 shadow-md">
			<div className="card-body">
				<p>{content}</p>
				<div className="flex items-center mt-5">
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={avatar} alt="" />
						</div>
					</div>
					<div className="ml-5">
						<h4 className="font-semibold">{name}</h4>
						<p>{location}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;