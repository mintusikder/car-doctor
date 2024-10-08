import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Checkout = () => {
  const data = useLoaderData();
  const { title, price, _id, img } = data;
  const { user } = useAuth();
  const handelBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const order = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    fetch(`http://localhost:5000/bookings`,{
      method: "POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <form onSubmit={handelBooking} className="card-body ">
      <h2 className="text-center text-3xl mb-6">Service Name: {title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <input
            type="name"
            name="name"
            placeholder="name"
            defaultValue={title}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="price"
            name="price"
            placeholder="price"
            defaultValue={"$" + price}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            name="date"
            type="date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email"
            placeholder="email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="form-control mt-2 ">
        <input
          className="btn btn-warning text-white"
          type="button"
          value="Order Confirm"
        />
      </div>
    </form>
  );
};

export default Checkout;
