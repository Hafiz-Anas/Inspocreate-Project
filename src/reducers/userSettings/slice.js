import { createSlice } from '@reduxjs/toolkit';
import {
	userSettingsThunk,
	changeSettingsThunk,
	delAccountThunk,
} from './thunk';

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const userSettingsSlice = createSlice({
	name: 'userSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(userSettingsThunk.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(userSettingsThunk.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(userSettingsThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});

		builder.addCase(changeSettingsThunk.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(changeSettingsThunk.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(changeSettingsThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});

		builder.addCase(delAccountThunk.pending, (state, { payload }) => {
			state.data = null;
			state.loading = true;
			state.error = null;
		});
		builder.addCase(delAccountThunk.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(delAccountThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});
	},
});
