import React from "react";

const Review = ({ review }) => {
	const { content, avatar, name, location } = review;
	return (
		<div class="card w-96 bg-base-100 shadow-md">
			<div class="card-body">
				<p>{content}</p>
				<div class="flex items-center mt-5">
					<div class="avatar">
						<div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={avatar} alt="" />
						</div>
					</div>
					<div className="ml-5">
						<h4>{name}</h4>
						<p>{location}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;