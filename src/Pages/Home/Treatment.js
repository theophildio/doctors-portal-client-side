import React from "react";
import TreatmentImg from "../../assets/images/treatment.png";
import Button from "../SharedPages/Button";

const Feature = () => {
	return (
		<div className="hero lg:min-h-[576px] my-8 lg:my-0">
			<div className="hero-content flex-col lg:justify-evenly gap-10 lg:gap-24 lg:flex-row">
				<div>
					<img src={TreatmentImg} className="lg:max-w-sm rounded-lg shadow-2xl" alt="" />
				</div>
				<div className="max-w-lg">
					<h1 className="text-4xl lg:text-5xl font-bold">
						Exceptional Dental Care, on Your Terms
					</h1>
					<p className="py-6">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
					</p>
					<Button>get started</Button>
				</div>
			</div>
		</div>
	);
};

export default Feature;
