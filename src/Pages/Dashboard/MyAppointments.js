import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Myappointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://ancient-escarpment-91645.herokuapp.com/appointment?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
        if(res.status === 401 || res.status === 403) {
          signOut(auth);
		      localStorage.removeItem('accessToken');
          navigate('/home');
        }
        return res.json()
      })
      .then(data => {
        setAppointments(data)
      });
    }
  }, [user]);

 	return (
		<div className="overflow-x-auto mt-8">
			<table className="table w-full">
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
            appointments.map((appointment, index) => <tr key={appointment._id}> 
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
