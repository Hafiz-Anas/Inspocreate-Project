import { createSlice } from '@reduxjs/toolkit';
import { getUserSuggestions } from './thunk';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

export const userSuggestionsSlice = createSlice({
	name: 'userSuggestions',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserSuggestions.pending, (state, { payload }) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(getUserSuggestions.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(getUserSuggestions.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});
	},
});
