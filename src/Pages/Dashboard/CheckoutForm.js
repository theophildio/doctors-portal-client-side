import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({appointment}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardErr, setCardErr] = useState('');
	const [success, setSuccess] = useState('');
	const [paymentID, setPaymentID] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const {patientName, patientEmail, fee} = appointment;

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({fee})
    })
    .then(res => res.json())
    .then(data => {
      if(data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    })
  }, []);

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
    setSuccess('');

    // Confirm payment 
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail
          },
        },
      },
    );
    if(intentError) {
      setCardErr(intentError?.message)
    }
    else{
      setCardErr('');
      setPaymentID(paymentIntent.id);
      setSuccess('Thank you! Your payment is completed.');
    }
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
					disabled={!stripe || !clientSecret}
				>
					Pay now
				</button>
			</form>
      {
        cardErr && <p className="text-red-500">{cardErr}</p>
      }
      {
        success && <div>  
          <p className="text-green-500">{success}</p>
          <p className="text-green-700 font-semibold mt-5">Your transaction Id: {paymentID}</p>
          </div>
      }
		</>
	);
};

export default CheckoutForm;
