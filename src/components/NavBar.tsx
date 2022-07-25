import React from "react";
import logo from "../assests/logo/logo.png";

export const NavBar = () => {
	return (
		<div className="flex justify-between bg-slate-200		px-16 items-center	fixed top-0 left-0 right-0">
			<div className="logo">
				<img className="p-2 w-20 cursor-pointer" src={logo} alt="LOGO" />
			</div>
			<div className="navLink">
				<ul className="flex bold text-lg	">
					<li className="px-6 border-r-4 border-slate-900	 cursor-pointer">
						Topic
					</li>
					<li className="px-6 border-r-4 border-slate-900	 cursor-pointer">
						Missions
					</li>
					<li className="px-6 border-r-4 border-slate-900	 cursor-pointer">
						Galleries
					</li>
					<li className="px-6 border-r-4 border-slate-900	 cursor-pointer">
						FLIGHTS TV
					</li>
					<li className="px-6 cursor-pointer">About</li>
				</ul>
			</div>
			<div className="searchBox">
				<form>
					<input
						className="p-2 mt-2"
						type="text"
						placeholder="Search.."
						name="search"
					/>
					<button
						className="p-2 mt-2 text-center bg-gray-100 hover:bg-gray-400"
						type="submit"
					>
						<i className="fa fa-search"></i>
					</button>
					<select
						className="p-2 ml-4"
						id="cars"
						name="carlist"
						form="carform"
					>
						<option value="volvo">Filter by</option>
						<option value="saab">Last Week</option>
						<option value="opel">Last Month</option>
						<option value="audi">Last Year</option>
					</select>
				</form>
			</div>
		</div>
	);
};
