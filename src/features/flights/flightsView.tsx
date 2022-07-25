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
					<div className="filter">
						<button
							onClick={() => filterFlights(true)}
							className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
						>
							Success
						</button>
						<button
							onClick={() => filterFlights(false)}
							className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
						>
							Failure
						</button>
						<button
							onClick={() => upcomingFlights(true)}
							className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
						>
							Upcoming
						</button>
					</div>

					{flights
						.slice(0, 50)
						.filter((value: any) => {
							if (searchTxt === "") {
								return value;
							} else if (
								value.rocket.rocket_name
									.toLowerCase()
									.includes(searchTxt.toLowerCase())
							) {
								return value;
							}
						})
						.map((flight, index) => (
							<FlightView key={index} flight={flight} />
						))}
				</div>
			) : null}
		</>
	);
};
