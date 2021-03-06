import React from "react";
import Chair from "../../assets/images/chair.png";
import BackgroundImg from "../../assets/images/bg.png";
import Button from "../SharedPages/Button";

const Banner = () => {
	return (
		<div
			className="hero lg:min-h-screen mt-8 lg:mt-12 px-4 lg:px-0"
			style={{
				backgroundImage: `url(${BackgroundImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat"
			}}
		>
			<div className="hero-content p-0 flex-col lg:flex-row-reverse">
				<img
					src={Chair}
					className="lg:max-w-xl rounded-lg"
					alt="Doctors Portal"
				/>
				<div className="lg:pr-20">
					<h1 className="text-4xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
					<p className="py-6">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the
					</p>
					<Button>get started</Button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
