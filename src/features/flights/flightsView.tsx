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
	console.log(flights[7]);

	return (
		<>
			{isLoading && <h2>Loading...</h2>}
			{!isLoading && error ? <h6>Error: {error}</h6> : null}
			{!isLoading && flights.length ? (
				<div>
					{flights.slice(0, 10).map((flight, index) => (
						<FlightView key={index} flight={flight} />
					))}
				</div>
			) : null}
			<div>flightsView</div>
		</>
	);
};
