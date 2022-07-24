import React from "react";
import logo from "../assests/logo/logo.png";

export const NavBar = () => {
	return (
		<div className="flex justify-between bg-slate-200		px-16 items-center	">
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
						className="p-2 mt-2 text-center bg-gray-100"
						type="submit"
					>
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
		</div>
	);
};
