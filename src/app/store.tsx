import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flights/flightSlice";

const store = configureStore({
	reducer: {
		flights: flightReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
