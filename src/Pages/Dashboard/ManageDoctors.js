import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../SharedPages/Spinner";
import DeleteModal from "./DeleteModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
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
						{
            doctors.map((doctor, index) => <DoctorRow
              key={doctor._id}
              index={index}
              doctor={doctor}
              refetch={refetch}
              setDeleteDoctor={setDeleteDoctor}
            ></DoctorRow>)
            }
					</tbody>
				</table>
			</div>
      {
        deleteDoctor && <DeleteModal 
          deleteDoctor={deleteDoctor}
          setDeleteDoctor={setDeleteDoctor}
          refetch={refetch}
        ></DeleteModal>
      }
		</div>
	);
};

export default ManageDoctors;
