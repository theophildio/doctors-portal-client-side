import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardErr, setCardErr] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}
		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});
		setCardErr(error?.message || "");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					className="mt-10 btn btn-sm bg-success border-0"
					type="submit"
					disabled={!stripe}
				>
					Pay now
				</button>
			</form>
      {
        cardErr && <p className="text-red-500">{cardErr}</p>
      }
		</>
	);
};

export default CheckoutForm;
