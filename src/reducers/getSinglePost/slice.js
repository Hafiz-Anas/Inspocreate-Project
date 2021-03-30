import { createSlice } from '@reduxjs/toolkit';
import { getSinglePost } from './thunk';

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const getSinglePostSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getSinglePost.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(getSinglePost.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(getSinglePost.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});
	},
});
