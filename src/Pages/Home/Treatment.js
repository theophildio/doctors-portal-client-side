import React from "react";
import TreatmentImg from "../../assets/images/treatment.png";
import Button from "../SharedPages/Button";

const Feature = () => {
	return (
		<div className="hero h-[576px]">
			<div className="hero-content flex-col justify-evenly gap-24 lg:flex-row">
				<div>
					<img src={TreatmentImg} className="max-w-sm rounded-lg shadow-2xl" alt="" />
				</div>
				<div className="max-w-lg">
					<h1 className="text-5xl font-bold">
						Exceptional Dental Care, on Your Terms
					</h1>
					<p className="py-6">
					It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content here, content <br /> here', making it look like readable English. Many desktop <br /> publishing packages and web page
					</p>
					<Button>get started</Button>
				</div>
			</div>
		</div>
	);
};

export default Feature;
