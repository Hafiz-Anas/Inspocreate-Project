import { createSlice } from '@reduxjs/toolkit';
import { followThunk, unFollowThunk } from './thunk';

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const followUnFollowSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(followThunk.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(followThunk.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(followThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});

		builder.addCase(unFollowThunk.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(unFollowThunk.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(unFollowThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});
	},
});
