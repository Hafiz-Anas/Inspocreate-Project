import React from 'react';
import { changeSettingsThunk } from '../../../reducers';
import { useDispatch } from 'react-redux';

const Notification = () => {
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
		<div className='wrapper notification-settings'>
			<div className='notification'>
				<ul>
					<li>
						<div className='text'>User Follows You</div>
						<div className='toggle'>
							<label className='switch'>
								<input type='checkbox' checked />
								<span className='slider round'></span>
							</label>
						</div>
					</li>
					<li>
						<div className='text'>
							User saves your image to their image collection
						</div>
						<div className='toggle'>
							<label className='switch'>
								<input type='checkbox' checked />
								<span className='slider round'></span>
							</label>
						</div>
					</li>
					<li>
						<div className='text'>User likes one of your image</div>
						<div className='toggle'>
							<label className='switch'>
								<input type='checkbox' checked />
								<span className='slider round'></span>
							</label>
						</div>
					</li>
				</ul>
				<button className='common-style-btn' onClick={updateSettings}>
					Save Settings
				</button>
			</div>
		</div>
	);
};

export default Notification;
