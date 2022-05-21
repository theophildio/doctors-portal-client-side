import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Myappointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/appointment?patient=${user.email}`, {
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
						<th>Fee</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
          {
            appointments.map((a, index) => <tr key={a._id}> 
              <th>{index + 1}</th>
              <td>{a.patientName}</td>
              <td>{a.date}</td>
              <td>{a.slot}</td>
              <td>{a.treatment}</td>
              <td>{a.fee && !a.paid ? `$${a.fee}` : '$0'}</td>
              <td>{a.fee && !a.paid ? <Link to={`/dashboard/payment/${a._id}`}><button className="btn btn-xs border-0 bg-red-500">Pay</button></Link> : <span className="btn btn-xs border-0 bg-green-500">Paid</span>}</td>
            </tr>)
          }
				</tbody>
			</table>
		</div>
	);
};

export default Myappointments;
