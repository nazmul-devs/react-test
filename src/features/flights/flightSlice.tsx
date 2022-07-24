import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URL: string = "https://api.spacexdata.com/v3/launches";

export const fatchFlights = createAsyncThunk(
	"flights/fatchFlights",
	async () => {
		const res = await axios.get(URL);
		return res.data;
	}
);

type initialState = {
	isLoading: boolean;
	flights: string[];
	error: string;
};

const initialState: initialState = {
	isLoading: false,
	flights: [],
	error: "",
};

const flightSlice = createSlice({
	name: "flights",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(fatchFlights.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			fatchFlights.fulfilled,
			(state, action: PayloadAction<string[]>) => {
				state.isLoading = false;
				state.flights = action.payload;
				state.error = "";
			}
		);
		builder.addCase(
			fatchFlights.rejected,
			(state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.flights = [];
				state.error = action.payload.message;
			}
		);
	},
});

export default flightSlice.reducer;
