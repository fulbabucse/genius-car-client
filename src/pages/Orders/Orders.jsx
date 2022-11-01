import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const [orders, setOrders] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  return (
    <div className="h-screen">
      <h1>This is orders pages {orders.length}</h1>
    </div>
  );
};

export default Orders;
