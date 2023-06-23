import React from "react";
// import { AuthContext } from "../../contex/AuthProvider";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";

function MyAppointment() {
  // const { user } = useContext(AuthContext);

  // const url = `http://localhost:5000/bookings?email=${user?.email}`;

  // const { data: bookings = [] } = useQuery({
  //   queryKey: ["bookings", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(url, {
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     });
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  return (
    <div>
      <h3 className="text-3xl mb-5">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Room Number</th>
              <th>Payment</th>
            </tr>
          </thead>
          {/* <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>{booking.room}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
