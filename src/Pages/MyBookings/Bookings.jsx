import React from "react";

const Bookings = ({ booking, setBookings, bookings }) => {
  const { title, name, price, date, email, img, _id } = booking;
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((item) => item._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleUpdateConfirm = (id) => {
    const proceed = confirm("Are you sure to confirm?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("Updated Successfully");
            const remaining = bookings.filter((item) => item._id !== id);
            const updated = bookings.find((item) => item._id === id);
            updated.status = "confirm";
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          }
        });
    }
  };
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline"
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
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-[150px] w-[150px]">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{title}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td className="text-xl">{name}</td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        {booking?.status ? (
          <h3 className="text-xl text-green-500">Confirmed</h3>
        ) : (
          <button
            onClick={() => handleUpdateConfirm(_id)}
            className="btn btn-ghost btn-xs text-xl"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default Bookings;
