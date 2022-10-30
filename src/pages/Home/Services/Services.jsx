import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "../ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="mb-10">
      <div className="text-center">
        <h3 className="text-xl lg:text-3xl font-bold text-orange-500">
          Service
        </h3>
        <h3 className="text-3xl lg:text-5xl font-bold">Our Service Area</h3>
        <p className="my-4 text-slate-500 font-semibold">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
