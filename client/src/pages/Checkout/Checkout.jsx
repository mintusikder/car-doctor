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
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert("Order Confirm")
        }
      });
  };
  return (
    <>
      <h2 className="text-center text-3xl">Service Name: {title}</h2>
      <form onSubmit={handelBooking} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              name="name"
              defaultValue={title}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered"
              defaultValue={"$" + price}
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Add Submit" />
        </div>
      </form>
    </>
  );
};

export default Checkout;
