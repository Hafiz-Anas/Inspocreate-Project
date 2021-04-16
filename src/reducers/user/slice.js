import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './thunk';

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const userDataSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserData.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(getUserData.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(getUserData.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});
	},
});
