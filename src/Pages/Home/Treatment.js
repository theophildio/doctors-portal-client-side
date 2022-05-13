import React from "react";
import Treatment from "../../assets/images/treatment.png";
import Button from "../SharedPages/Button";

const Feature = () => {
	return (
		<div class="hero h-[576px]">
			<div class="hero-content flex-col justify-evenly gap-24 lg:flex-row">
				<div>
					<img src={Treatment} class="max-w-sm rounded-lg shadow-2xl" alt="" />
				</div>
				<div className="max-w-lg">
					<h1 class="text-5xl font-bold">
						Exceptional Dental Care, on Your Terms
					</h1>
					<p class="py-6">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsumis that it has a more-or-less normal
						distribution of letters,as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page
					</p>
					<Button>get started</Button>
				</div>
			</div>
		</div>
	);
};

export default Feature;
