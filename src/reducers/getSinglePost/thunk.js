import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const getSinglePost = createAsyncThunk(
	`post/getSinglePost/`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post(
				'/posts/getPost',
				{
					postId: data,
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
