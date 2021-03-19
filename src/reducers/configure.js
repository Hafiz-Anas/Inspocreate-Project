import { configureStore } from "@reduxjs/toolkit";
import {postSlice} from "./posts";
import {userSuggestionsSlice} from './userSuggestions'
import {categoriesSlice} from './categories'

export default configureStore({
    reducer: {
        posts: postSlice.reducer,
        userSuggestions: userSuggestionsSlice.reducer,
        categories: categoriesSlice.reducer
    }
})
