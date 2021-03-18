import { createSlice } from "@reduxjs/toolkit";
import axios from '../axios'


const postsReducer = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        loadActivities: ((state, action) => {
            const token = localStorage.getItem('token');
            axios.post('/posts/activities', {}, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
                .then((response) => {
                    state = response.data.posts
                }, (error) => {
                    console.log("error.response");
                });
        }),
    }  
})

export const { loadActivities } = postsReducer.actions;
export default postsReducer.reducer;