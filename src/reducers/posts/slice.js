import { createSlice } from '@reduxjs/toolkit';
import {
	getPostList,
	dislikePostAction,
	likePostAction,
	addToCollectionAction,
} from './thunk';

const initialState = {
	data: [],
	selected: [],
	loading: false,
	error: null,
};

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPostList.pending, (state, { payload }) => {
			state.data = [];
			state.loading = true;
			state.error = null;
		});
		builder.addCase(getPostList.fulfilled, (state, { payload }) => {
			state.data = payload.posts;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(getPostList.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});

		builder.addCase(likePostAction.fulfilled, (state, { payload }) => {
			state.data = state.data.map((post) => {
				if (post.id === payload.id) {
					return payload;
				} else {
					return post;
				}
			});
			state.loading = false;
			state.error = null;
		});

		builder.addCase(dislikePostAction.fulfilled, (state, { payload }) => {
			state.data = state.data.map((post) => {
				if (post.id === payload.id) {
					return payload;
				} else {
					return post;
				}
			});
			state.loading = false;
			state.error = null;
		});
		builder.addCase(addToCollectionAction.fulfilled, (state, { payload }) => {
			state.data = state.data.map((post) => {
				if (post.id === payload.id) {
					return payload;
				} else {
					return post;
				}
			});
			state.loading = false;
			state.error = null;
		});
	},
});
