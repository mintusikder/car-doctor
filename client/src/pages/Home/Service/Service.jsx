import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="text-center space-y-4">
        <p className="font-bold text-orange-500">Service</p>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {services.map((service) => (
          <ServiceDetails key={service._id} service={service}></ServiceDetails>
        ))}
      </div>
    </>
  );
};

export default Service;
