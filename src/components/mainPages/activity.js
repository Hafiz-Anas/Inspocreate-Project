import React from 'react';
import ActivityPosts from './components/activityPosts';
import ActivityUserSuggestions from './components/activityUserSuggestions';

const Activity = () => {
	return (
		<div className='wrapper'>
			<div className='activity'>
				<ActivityPosts />
				<ActivityUserSuggestions />
			</div>
		</div>
	);
};

export default Activity;
