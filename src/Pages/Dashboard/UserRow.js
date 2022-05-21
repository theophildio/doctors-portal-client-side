import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, refetch}) => {
  const {email, role} = user;

  const makeAdmin = () => {
    fetch(`https://ancient-escarpment-91645.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if (res.status === 403) {
        toast.error('Faild to update.')
      }
      return res.json()})
    .then(data => {
      if (data.modifiedCount > 0) {
        refetch();
        toast.success('Successfully made an Admin');
      }
    })
  }

	return (
		<tr>
			<td>{email}</td>
			<td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm border-0">Make Admin</button>}</td>
			<td>{role !== 'admin' && <button className="btn btn-sm bg-red-500 border-0">Remove</button>}</td>
		</tr>
	);
};

export default UserRow;
