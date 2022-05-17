import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Myappointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/appointment?patient=${user.email}`)
      .then(res => res.json())
      .then(data => setAppointments(data));
    }
  }, [user]);

 	return (
		<div class="overflow-x-auto mt-8">
			<table class="table w-full">
				<thead>
					<tr>
						<th>Sl</th>
						<th>Name</th>
						<th>Appointment Date</th>
						<th>Appointment Time</th>
						<th>Service</th>
					</tr>
				</thead>
				<tbody>
          {
            appointments.map((appointment, index) => <tr>
              <th>{index + 1}</th>
              <td>{appointment.patientName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.slot}</td>
              <td>{appointment.treatment}</td>
            </tr>)
          }
				</tbody>
			</table>
		</div>
	);
};

export default Myappointments;
