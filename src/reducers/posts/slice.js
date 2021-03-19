import {createSlice} from "@reduxjs/toolkit";
import {getPostList} from "./thunk";

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(getPostList.pending, (state, { payload }) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getPostList.fulfilled, (state, { payload }) => {
            state.data = payload
            state.loading = false
            state.error = null
        })
        builder.addCase(getPostList.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload
            } else {
                state.error = action.error
            }
            state.loading = false
        })
    }
})

