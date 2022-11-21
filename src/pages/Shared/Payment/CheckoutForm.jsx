import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const CheckoutForm = ({ totalPrice }) => {
  const [paymentErrors, setPaymentErrors] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, SetLoading] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("https://genius-car-server-eta.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice, user]);

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
      type: "card",
      card,
    });

    if (error) {
      setPaymentErrors(error.message);
    } else {
      setPaymentErrors("");
    }

    setSucceeded("");
    SetLoading(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setPaymentErrors(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        name: user?.displayName,
        email: user?.email,
        price: totalPrice,
        transectionId: paymentIntent.id,
      };
      fetch("https://genius-car-server-eta.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setSucceeded("Congrats! Complete your payment");
            setTransectionId(paymentIntent.id);
            SetLoading(false);
          }
        });
    }
  };

  return (
    <div>
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
        <div className="flex justify-end">
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block mt-3 px-6 py-3 bg-purple-800 text-white font-medium text-sm leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
            disabled={!stripe || !clientSecret || loading}
          >
            Payment
          </button>
        </div>
      </form>
      {paymentErrors && (
        <p className="text-red-500 font-semibold">{paymentErrors}</p>
      )}
      {succeeded && (
        <>
          <p className="text-semibold text-purple-600">{succeeded}</p>
          <p className="text-semibold text-purple-600">
            TransectionID: {transectionId}
          </p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
