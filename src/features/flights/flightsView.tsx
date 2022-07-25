import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FlightView } from "../../components/FlightView";
import { NavBar } from "../../components/NavBar";
import { fatchFlights } from "./flightSlice";

export const FlightsView = () => {
	const { error, flights, isLoading } = useAppSelector(
		(state) => state.flights
	);
	const [data, setData] = useState(flights);
	const [searchTxt, setSearchTxt] = useState("");
	const searchData = data.filter((value: any) => {
		if (searchTxt === "") {
			return value;
		} else if (
			value.rocket.rocket_name
				.toLowerCase()
				.includes(searchTxt.toLowerCase())
		) {
			return value;
		}
	});
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fatchFlights());
		setData(flights);
	}, []);

	console.log(data[9]);

	const filterFlights = (status: any) => {
		const updatedFlights = flights.filter((curElem: any) => {
			return curElem.launch_success === status;
		});
		setData(updatedFlights);
	};
	const upcomingFlights = (status: any) => {
		const updatedFlights = flights.filter((curElem: any) => {
			return curElem.upcoming === status;
		});
		setData(updatedFlights);
	};

	return (
		<>
			<NavBar setSearchTxt={setSearchTxt} />
			{isLoading && (
				<h2 className="font-bold	 text-center mt-24 text-xl  tracking-widest	">
					Loading...
				</h2>
			)}
			{!isLoading && error ? <h6>Error: {error}</h6> : null}
			{!isLoading && flights.length ? (
				<div className="p-16 pt-24 bg-slate-900	">
					<div className="filter flex align-items-center">
						<p className="text-white	font-bold">
							Filter By Launch Status:
						</p>
						<button
							onClick={() => filterFlights(true)}
							className="bg-sky-600	
							text-white	font-bold
							px-2 py-1 rounded mx-4
							 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300"
						>
							Success
						</button>
						<button
							onClick={() => filterFlights(false)}
							className="bg-sky-600	
							text-white	font-bold
							px-2 py-1 rounded mx-4
							 hover:bg-sky-700 active:shadow focus:outline-none focus:ring focus:ring-violet-300"
						>
							Failure
						</button>
						<button
							onClick={() => upcomingFlights(true)}
							className="bg-sky-600	
							text-white	font-bold
							px-2 py-1 rounded mx-4
							 hover:bg-sky-700 active:shadow focus:outline-none focus:ring focus:ring-violet-300"
						>
							Upcoming
						</button>
					</div>

					{searchData.map((flight, index) => (
						<FlightView key={index} flight={flight} />
					))}
				</div>
			) : null}
		</>
	);
};
