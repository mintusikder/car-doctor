import { FaArrowRight } from "react-icons/fa";
const ServiceDetails = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-6">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" items-center justify-between text-center flex p-6">
        <div className="space-y-3">
          <h2 className="card-title">{title}</h2>
          <p  className="flex items-start text-orange-500 font-bold">${price} </p>
        </div>
        <div className="card-actions">
        <FaArrowRight className="text-orange-500 mt-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
