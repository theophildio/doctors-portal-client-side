import React from "react";
import Chair from "../../assets/images/chair.png";
import BackgroundImg from "../../assets/images/bg.png";
import Button from "../SharedPages/Button";

const Banner = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url(${BackgroundImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src={Chair}
					className="max-w-xl rounded-lg shadow-2xl"
					alt="Doctors Portal"
				/>
				<div className="pr-10">
					<h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
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
