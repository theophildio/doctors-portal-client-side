import React from "react";
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../../firebase.init";

const Navbar = () => {
	const [user] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
		localStorage.removeItem('accessToken');
	};
	const menuItems = (
		<>
			<li className="mr-1"><NavLink to="/">Home</NavLink></li>
			<li className="mr-1"><NavLink to="/about">About</NavLink></li>
			<li className="mr-1"><NavLink to="/appointment">Appointment</NavLink></li>
			<li className="mr-1"><NavLink to="/reviews">Reviews</NavLink></li>
			<li className="mr-1"><NavLink to="/contactus">Contact Us</NavLink></li>
			{
				user && <li className="mr-1"><NavLink to="/dashboard">Dashboard</NavLink></li>
			}
			<li>
				{
					user ? 
					<button onClick={logout} className="btn btn-error text-base-100 normal-case">Logout</button>
					:
					<NavLink to="/login">Login</NavLink>
				}
			</li>
		</>
	);
	return (
		<div className="navbar justify-between bg-base-100">
			<div className="lg:w-full">
				<Link to="/" className="normal-case text-xl">Doctors Portal</Link>
			</div>
			<div className="navbar-end">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact right-0 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{menuItems}</ul>
			</div>
		</div>
	);
};

export default Navbar;
