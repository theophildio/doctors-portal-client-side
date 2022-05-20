import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({doctor, index, refetch}) => {
  const {name, specialty, img, email} = doctor;
  const handleDelete = email => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: 'DELETE',
      headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`
			}
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount) {
        toast.error('Deleted!!');
        refetch();
      }
    })
  }
	return (
		<>
			<tr key={doctor._id}>
				<th>{index + 1}</th>
				<td>
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={img} alt={name} />
						</div>
					</div>
				</td>
				<td>{name}</td>
				<td>{email}</td>
				<td>{specialty}</td>
				<td><button onClick={() => handleDelete(email)} className="btn btn-xs border-0 bg-red-500">Delete</button></td>
			</tr>
		</>
	);
};

export default DoctorRow;
