import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import BookingsDetails from "./BookingsDetails";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);
  const handelDelete = (id) => {
    const proceed = confirm("Are sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete Successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Service Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Date</th>
            <th>Confirm</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingsDetails
              booking={booking}
              key={booking._id}
              handelDelete={handelDelete}
            ></BookingsDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
