import React from "react";
import AppointmentBg from '../../assets/images/appointment.png'

const Contact = () => {
	return (
		<div className="py-16 px-4 lg:px-0" style={{
      backgroundImage: `url(${AppointmentBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
			<h3 className="uppercase text-xl font-bold text-primary text-center">
				Contact Us
			</h3>
			<h2 className="capitalize text-4xl text-center text-base-100">
				Stay connected with us
			</h2>
			<div className="flex justify-center mt-10">
				<form className="w-96 text-center">
					<input
						type="email"
						placeholder="Email Address"
						className="input w-full mb-5"
            required
					/>
					<input
						type="text"
						placeholder="Subject"
						className="input w-full mb-5"
            required
					/>
          <textarea className="textarea w-full h-28" placeholder="Your message" required></textarea>
          <input type="submit" value="Submit" className="btn bg-gradient-to-r from-primary to-secondary text-base-100 normal-case mt-9" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
