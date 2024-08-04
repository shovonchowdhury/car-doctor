import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Bookings from "./Bookings";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <p className="text-3xl text-center mb-5">
        Number of Bookings:{bookings.length}
      </p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Service</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <Bookings
                booking={booking}
                setBookings={setBookings}
                bookings={bookings}
                key={booking._id}
              ></Bookings>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
