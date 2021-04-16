import { createSlice } from '@reduxjs/toolkit';
import { userToCampanyThunk } from './thunk';

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const convertAccountSlice = createSlice({
	name: 'convertAccount',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(userToCampanyThunk.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(userToCampanyThunk.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(userToCampanyThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});
	},
});
