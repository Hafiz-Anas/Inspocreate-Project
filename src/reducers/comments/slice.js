import { createSlice } from '@reduxjs/toolkit';
import {
	createCommentThunk,
	getCommentThunk,
	replyCommentAction,
	likeCommentAction,
	dislikeCommentAction,
	deleteCommentAction,
} from './thunk';
const initialState = {
	data: [],
	loading: false,
	error: null,
};

export const createCommentSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createCommentThunk.pending, (state, { payload }) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(createCommentThunk.fulfilled, (state, { payload }) => {
			// state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(createCommentThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});

		builder.addCase(getCommentThunk.pending, (state, { payload }) => {
			state.data = [];
			state.loading = true;
			state.error = null;
		});
		builder.addCase(getCommentThunk.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		});
		builder.addCase(getCommentThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
			state.loading = false;
		});

		builder.addCase(replyCommentAction.fulfilled, (state, { payload }) => {
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

		builder.addCase(likeCommentAction.fulfilled, (state, { payload }) => {
			state.data = state.data.map((comment) => {
				if (comment.id === payload.id) {
					return payload;
				} else {
					return comment;
				}
			});
			state.loading = false;
			state.error = null;
		});

		builder.addCase(dislikeCommentAction.fulfilled, (state, { payload }) => {
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

		builder.addCase(deleteCommentAction.fulfilled, (state, { payload }) => {
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
