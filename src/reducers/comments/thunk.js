import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const createCommentThunk = createAsyncThunk(
	`comments/createComment`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post('/comments/create', data, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			console.log(response);
			return response.data;
		} catch (e) {
			console.log(e.response);
			return thunkApi.rejectWithValue(e.response);
		}
	}
);

export const getCommentThunk = createAsyncThunk(
	`comments/postId/`,
	// Declare the type your function argument here:
	async (postId, thunkApi) => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios({
				method: 'post',
				url: '/comments/byPostId',
				data: {
					postId: postId,
				},
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			console.log(response);
			return response.data;
		} catch (e) {
			console.log(e.response);
			return thunkApi.rejectWithValue(e.response);
		}
	}
);

export const replyCommentAction = createAsyncThunk(
	`comments/replyComment`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post('/comments/reply', data, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			console.log(response);
			return response.data;
		} catch (e) {
			console.log(e.response);
			return thunkApi.rejectWithValue(e.response);
		}
	}
);

export const likeCommentAction = createAsyncThunk(
	`comments/likeComment/`,
	// Declare the type your function argument here:
	async (postId, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post(
				'/comments/like',
				{
					commentId: postId,
				},
				{
					headers: {
						Authorization: 'Bearer ' + token,
					},
				}
			);
			console.log(response);
			return response.data;
		} catch (e) {
			console.log(e.response);
			return thunkApi.rejectWithValue(e.response);
		}
	}
);

export const dislikeCommentAction = createAsyncThunk(
	`comments/dislikeComment/`,
	// Declare the type your function argument here:
	async (postId, thunkApi) => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios({
				method: 'delete',
				url: '/comments/dislike',
				data: {
					commentId: postId,
				},
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			console.log(response);
			return response.data;
		} catch (e) {
			console.log(e.response);
			return thunkApi.rejectWithValue(e.response);
		}
	}
);

export const deleteCommentAction = createAsyncThunk(
	`comments/deleteComment/`,
	// Declare the type your function argument here:
	async (postId, thunkApi) => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios({
				method: 'delete',
				url: '/comments',
				data: {
					postId: postId,
				},
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			console.log(response);
			return response.data;
		} catch (e) {
			console.log(e.response);
			return thunkApi.rejectWithValue(e.response);
		}
	}
);
