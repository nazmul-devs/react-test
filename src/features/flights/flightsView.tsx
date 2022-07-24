import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FlightView } from "../../components/FlightView";
import { fatchFlights } from "./flightSlice";

export const FlightsView = () => {
	const { error, flights, isLoading } = useAppSelector(
		(state) => state.flights
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fatchFlights());
	}, []);
	console.log(flights);

	return (
		<>
			{isLoading && <h2>Loading...</h2>}
			{!isLoading && error ? <h6>Error: {error}</h6> : null}
			{!isLoading && flights.length ? (
				<div>
					{flights.map((flight, index) => (
						<FlightView key={index} />
					))}
				</div>
			) : null}
			<div>flightsView</div>
		</>
	);
};
