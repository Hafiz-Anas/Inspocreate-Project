import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const userSettingsThunk = createAsyncThunk(
	`userSettings`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios({
				url: '/users/validateUsername',
				method: 'post',
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

export const changeSettingsThunk = createAsyncThunk(
	`userSettings/changeSettings`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios({
				url: '/users/profile',
				method: 'patch',
				data: data,
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

export const delAccountThunk = createAsyncThunk(
	`userSettings/delAccount`,
	// Declare the type your function argument here:
	async (data, thunkApi) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios({
				url: '/users/profile',
				method: 'delete',
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
