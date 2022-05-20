import React from "react";
import { useQuery } from "react-query";
import Spinner from "../SharedPages/Spinner";
import UserRow from "./UserRow";

const Users = () => {
	const { data: users, isLoading, refetch } = useQuery("users", () =>
		fetch("http://localhost:5000/user", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json())
	);
	if (isLoading) {
		return <Spinner></Spinner>;
	}
	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				<thead>
					<tr>
						<th>User Email</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
            users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
          }
				</tbody>
			</table>
		</div>
	);
};

export default Users;
