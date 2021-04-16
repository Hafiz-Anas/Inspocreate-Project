import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const getUserData = createAsyncThunk(
	`userData`,
	// Declare the type your function argument here:
	async (username, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios({
				url: `/users/${username}`,
				method: 'get',
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
