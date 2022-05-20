import React from "react";

const DoctorRow = ({ doctor, index, setDeleteDoctor }) => {
	const { name, specialty, img, email } = doctor;
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
				<td>
					<label onClick={() => setDeleteDoctor(doctor)} htmlFor="delete-modal" className="btn modal-button btn-xs border-0 bg-red-500">
						Delete
					</label>
				</td>
			</tr>
		</>
	);
};

export default DoctorRow;
