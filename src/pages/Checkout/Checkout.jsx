import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { _id, name, price, image } = useLoaderData();
  const handleCheckoutForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const customerName = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "Unregistered";
    const message = form.message.value;

    const order = {
      serviceId: _id,
      serviceName: name,
      price,
      customerName,
      email,
      phone,
      message,
      image: image,
    };

    if (phone.length < 11) {
      toast.error("Phone number at least 11 character");
      return;
    }

    fetch("https://genius-car-server-eta.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your orders successfully");
          e.target.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  const checkoutStyles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "darken, luminosity",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "7px",
  };
  return (
    <div className="flex flex-col items-center">
      <div
        style={checkoutStyles}
        className="w-full h-60 flex flex-col justify-center items-center space-y-4"
      >
        <h3 className="text-white text-2xl lg:text-4xl font-bold">Checkout</h3>

        <h3 className="text-amber-400 text-2xl font-bold">{name}</h3>
      </div>
      <div className="p-10 rounded-lg shadow-lg bg-white w-full lg:w-3/5 my-3 lg:my-10">
        <form onSubmit={handleCheckoutForm}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Last name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Email"
              />
            </div>
          </div>
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5 mb-4
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
            name="message"
          ></textarea>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-purple-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-purple-700 hover:shadow-lg
      focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-purple-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
