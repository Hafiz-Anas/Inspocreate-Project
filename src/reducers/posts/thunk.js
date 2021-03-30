import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const getPostList = createAsyncThunk(
	`posts/getPostList/`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post('/posts/activities', '', {
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

export const likePostAction = createAsyncThunk(
	`posts/likePost/`,
	// Declare the type your function argument here:
	async (postId, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post(
				'/posts/like',
				{
					postId: postId,
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

export const dislikePostAction = createAsyncThunk(
	`posts/dislikePost/`,
	// Declare the type your function argument here:
	async (postId, thunkApi) => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios({
				method: 'delete',
				url: '/posts/dislike',
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

export const addToCollectionAction = createAsyncThunk(
	`posts/addtocollection/`,
	// Declare the type your function argument here:
	async (postId, thunkApi) => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios({
				method: 'post',
				url: '/posts/addToCollection',
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
