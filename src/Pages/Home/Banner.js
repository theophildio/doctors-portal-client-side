import React from "react";
import Chair from "../../assets/images/chair.png";
import BackgroundImg from "../../assets/images/bg.png";

const Banner = () => {
	return (
		<div
			class="hero min-h-screen"
			style={{
				backgroundImage: `url(${BackgroundImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div class="hero-content flex-col lg:flex-row-reverse">
				<img
					src={Chair}
					class="max-w-xl rounded-lg shadow-2xl"
					alt="Doctors Portal"
				/>
				<div class="pr-10">
					<h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
					<p class="py-6">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the
					</p>
					<button class="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
