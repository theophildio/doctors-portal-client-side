import React, { useState } from "react";
import Chair from "../../assets/images/chair.png";
import AppBannerBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());

	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url(${AppBannerBg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={Chair} className="max-w-lg rounded-lg" alt="" />
				<div className="pr-32">
					<DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;
