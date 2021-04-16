import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const followThunk = createAsyncThunk(
	`follow`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post(
				'/users/follow',
				{
					userId: data,
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

export const unFollowThunk = createAsyncThunk(
	`unfollow`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.delete(
				'/users/unfollow',
				{
					userId: data,
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
