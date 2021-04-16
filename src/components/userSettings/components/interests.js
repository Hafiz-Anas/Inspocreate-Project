import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSettingsThunk } from '../../../reducers';

const Interests = () => {
	const dispatch = useDispatch();
	const updateSettings = () => {
		dispatch(
			changeSettingsThunk({
				firstName: 'string',
				lastName: 'string',
				username: 'string',
				bio: 'string',
				website: 'string',
				password: 'string',
				rType: 'User',
			})
		);
	};
	return (
		<div className='wrapper interests-settings'>
			<div className='interests'>
				<div className='tags'>
					<div className='tag'>Business</div>
					<div className='tag'>Personal Development</div>
					<div className='tag'>Women Empowerment</div>
					<div className='tag'>Motivation/Inspiration</div>
					<div className='tag'>Health and Fitness</div>
					<div className='tag'>Workwear/Boss looks</div>
				</div>
				<button className='common-style-btn' onClick={updateSettings}>
					Save Interests
				</button>
			</div>
		</div>
	);
};

export default Interests;
