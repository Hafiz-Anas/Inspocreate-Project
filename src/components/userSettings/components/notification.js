import React from 'react';

const Notification = () => {
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
				<button className='common-style-btn'>Save Settings</button>
			</div>
		</div>
	);
};

export default Notification;
