import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

export const getUserSuggestions = createAsyncThunk(
    `userSuggestions/getUserSuggestions/`,
    // Declare the type your function argument here:
    async (data,thunkApi) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response)
        }

    }
)
