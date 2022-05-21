import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({appointment}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardErr, setCardErr] = useState('');
	const [success, setSuccess] = useState('');
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const {_id, patientName, patientEmail, fee} = appointment;

  useEffect(() => {
    fetch('https://ancient-escarpment-91645.herokuapp.com/create-payment-intent', {
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
    });
  }, [fee]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card
		});
		setCardErr(error?.message || "");
    setSuccess('');
    setProcessing(true);
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
      setCardErr(intentError?.message);
      setProcessing(false);
    }
    else{
      setCardErr('');
      setTransactionId(paymentIntent.id);
      setSuccess('Thank you! Your payment is completed.');
      // Store payment in DB
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id
      }
      fetch(`https://ancient-escarpment-91645.herokuapp.com/booking/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      }).then(res => res.json())
      .then(data => {
        setProcessing(false);
      })
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
					disabled={!stripe || !clientSecret || success}
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
          <p className="text-green-700 font-semibold mt-5">Your transaction Id: {transactionId}</p>
          </div>
      }
		</>
	);
};

export default CheckoutForm;
