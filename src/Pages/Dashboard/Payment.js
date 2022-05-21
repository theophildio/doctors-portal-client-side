import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../SharedPages/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51L1mRvI6m6QEwpf0HQt7Z878IwHIqLqTtmEvk8Aow9ehCgmC0soQ6friHXE18mNWnRglnqY3XWaPZrmNQwz5NKed00ohs4ZwBw"
);

const Payment = () => {
	const { appointmentId } = useParams();
	const url = `https://ancient-escarpment-91645.herokuapp.com/booking/${appointmentId}`;
	const { data: appointment, isLoading } = useQuery(
		["booking", appointmentId],
		() =>
			fetch(url, {
				method: "GET",
				headers: {
					authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}).then((res) => res.json())
	);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content w-full flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-4xl font-semibold my-8">
							Hello,{" "}
							<span className="text-orange-400">{appointment.patientName}</span>
						</h1>
						<h2 className="text-3xl">
							Please make payment for{" "}
							<span className="text-secondary">{appointment.treatment}</span>
						</h2>
						<p className="py-6 text-xl">
							Your Appointment Date is on{" "}
							<span className="text-purple-500">{appointment.date}</span> at{" "}
							<span className="text-purple-500">{appointment.slot}.</span>
						</p>
						<p className="text-xl">Fee: ${appointment.fee}</p>
					</div>
					<div className="card mr-12 w-1/2 shadow-lg bg-base-100">
						<div className="card-body">
							<Elements stripe={stripePromise}>
								<CheckoutForm  appointment={appointment}/>
							</Elements>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
