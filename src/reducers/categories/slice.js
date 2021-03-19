import {createSlice} from "@reduxjs/toolkit";
import {getCategories} from "./thunk";

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(getCategories.pending, (state, { payload }) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.data = payload
            state.loading = false
            state.error = null
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload
            } else {
                state.error = action.error
            }
            state.loading = false
        })
    }
})