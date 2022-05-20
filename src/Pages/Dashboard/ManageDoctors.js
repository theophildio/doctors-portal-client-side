import React from "react";
import { useQuery } from "react-query";
import Spinner from "../SharedPages/Spinner";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
	const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
		fetch("http://localhost:5000/doctor", {
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<div className="overflow-x-auto mt-8">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Sl</th>
							<th>Avatar</th>
							<th>Name</th>
							<th>Email</th>
							<th>Specialty</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{doctors.map((doctor, index) => <DoctorRow
              key={doctor._id}
              index={index}
              doctor={doctor}
              refetch={refetch}
            ></DoctorRow>)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageDoctors;
