import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<h2 className="text-4xl font-bold my-2">Dashboard</h2>
				<Outlet></Outlet>
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
					{/* <!-- Sidebar content here --> */}
					<li>
						<Link to="/dashboard">My Appointments</Link>
					</li>
					<li>
						<Link to="/dashboard/myreviews">My Reviews</Link>
						{admin && <Link to="/dashboard/users">All Users</Link>}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
