import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Spinner from "../Spinner/Spinner";

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

  const totalPrice = subTotalPrice + shipping;

  return (
    <div className="h-screen">
      <h1>Payment Price: {totalPrice}</h1>
    </div>
  );
};

export default Payment;
