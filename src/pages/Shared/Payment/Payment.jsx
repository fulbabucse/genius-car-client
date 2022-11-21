import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Spinner from "../Spinner/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders", "email", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/orders?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("genius-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const price = [];
  orders.map((order) => {
    price.push(parseInt(order.price));
  });

  const subTotalPrice = price.reduce((total, value) => {
    return total + value;
  });

  const shipping = 10;

  const tax = subTotalPrice * 0.04;

  const totalPrice = subTotalPrice + shipping + Math.ceil(tax);

  return (
    <div className="h-screen lg:w-2/5 mx-auto">
      <h1 className="text-xl lg:text-2xl font-semibold text-gray-700 text-center my-4">
        Please Payment your total Price <strong>${totalPrice}</strong> with
        Shipping & Tax
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
