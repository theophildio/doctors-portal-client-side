import React from "react";
import Button from "../SharedPages/Button";
import Doctor from '../../assets/images/doctor-small.png';
import AppointmentBg from '../../assets/images/appointment.png'

const Appointment = () => {
	return (
		<div className="hero lg:mt-52 h-[533px]" style={{
      backgroundImage: `url(${AppointmentBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
			<div className="hero-content flex-col gap-6 lg:flex-row lg:mt-[-123px]">
				<div>
					<img src={Doctor} className="max-w-2xl hidden lg:block" alt="" />
				</div>
				<div className="max-w-lg lg:pt-28">
          <h2 className="text-primary font-bold text-xl mb-5">Appointment</h2>
					<h1 className="text-4xl font-semibold text-base-100">
          Make an appointment Today
					</h1>
					<p className="py-6 text-base-100">
          It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content here, content <br /> here', making it look like readable English. Many desktop <br /> publishing packages and web page
					</p>
					<Button>get started</Button>
				</div>
			</div>
		</div>
	);
};

export default Appointment;
