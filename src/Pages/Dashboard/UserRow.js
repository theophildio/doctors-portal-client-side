import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, refetch}) => {
  const {email, role} = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      refetch();
      toast.success('Successfully made an Admin');
    })
  }

	return (
		<tr>
			<th>1</th>
			<td>{email}</td>
			<td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm border-0">Make Admin</button>}</td>
			<td>{role !== 'admin' && <button className="btn btn-sm bg-red-500 border-0">Remove</button>}</td>
		</tr>
	);
};

export default UserRow;
