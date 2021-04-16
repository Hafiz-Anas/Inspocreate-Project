import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const userToCampanyThunk = createAsyncThunk(
	`convertAccount/userToCampany`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post('/users/toCompany', data, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			return response.data;
		} catch (e) {
			return thunkApi.rejectWithValue(e.response);
		}
	}
);
