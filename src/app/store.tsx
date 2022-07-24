import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flights/flightSlice";

const store = configureStore({
	reducer: {
		flights: flightReducer,
	},
});

export default store;
