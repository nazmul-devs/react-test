import React from "react";
import { NavBar } from "../components/NavBar";
import { FlightsView } from "../features/flights/FlightsView";

export const Home = () => {
	return (
		<div>
			<NavBar />
			<FlightsView />
		</div>
	);
};
