const BookingsDetails = ({ booking, handelDelete }) => {
  const { customerName, email, date, img, price, _id } = booking;

  return (
    <>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handelDelete(_id)}
              className="btn btn-circle btn-sm btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src={img} />
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>{customerName}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default BookingsDetails;
