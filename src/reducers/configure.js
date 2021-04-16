import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './posts';
import { userSuggestionsSlice } from './userSuggestions';
import { categoriesSlice } from './categories';
import { getSinglePostSlice } from './getSinglePost';
import { createCommentSlice } from './comments';
import { userDataSlice } from './user';
import { userSettingsSlice } from './userSettings';
import { convertAccountSlice } from './convertAccount';
import { followUnFollowSlice } from './followUnFollow';

export default configureStore({
	reducer: {
		posts: postSlice.reducer,
		userSuggestions: userSuggestionsSlice.reducer,
		categories: categoriesSlice.reducer,
		post: getSinglePostSlice.reducer,
		comments: createCommentSlice.reducer,
		userData: userDataSlice.reducer,
		userSettings: userSettingsSlice.reducer,
		convertAccount: convertAccountSlice.reducer,
		followUnFollow: followUnFollowSlice.reducer,
	},
});
