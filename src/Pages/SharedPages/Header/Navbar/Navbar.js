import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const menuItems = (
		<>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/appointment">Appointment</NavLink></li>
			<li><NavLink to="/reviews">Reviews</NavLink></li>
			<li><NavLink to="/contactus">Contact Us</NavLink></li>
			<li><NavLink to="/login">Login</NavLink></li>
		</>
	);
	return (
		<div className="navbar justify-between bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabindex="0" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
				<Link to="/" className="normal-case text-xl">Doctors Portal</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{menuItems}</ul>
			</div>
		</div>
	);
};

export default Navbar;
