import React, { useEffect, useState } from 'react';
import Account from './components/account';
import Interests from './components/interests';
import Notification from './components/notification';
import Privacy from './components/privacy';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { userSettingsThunk } from '../../reducers';

const UserSettings = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userSettingsThunk());
	}, []);
	const [settingFor, setSettingsFor] = useState(
		'account',
		'interests',
		'notification',
		'privacy'
	);
	return (
		<div className='user-settings-section'>
			<div className='user-settings-navbar wrapper'>
				<h1>Settings</h1>
				<ul className='display-flex'>
					<li>
						<button
							className={clsx({ active: settingFor === 'account' })}
							onClick={() => setSettingsFor('account')}
						>
							Account
						</button>
					</li>
					<li>
						<button
							className={clsx({ active: settingFor === 'interests' })}
							onClick={() => setSettingsFor('interests')}
						>
							Interests
						</button>
					</li>
					<li>
						<button
							className={clsx({ active: settingFor === 'notification' })}
							onClick={() => setSettingsFor('notification')}
						>
							Notification
						</button>
					</li>
					<li>
						<button
							className={clsx({ active: settingFor === 'privacy' })}
							onClick={() => setSettingsFor('privacy')}
						>
							Privacy
						</button>
					</li>
				</ul>
				{settingFor === 'account' && (
					<>
						<Account />
					</>
				)}
				{settingFor === 'interests' && (
					<>
						<Interests />
					</>
				)}
				{settingFor === 'notification' && (
					<>
						<Notification />
					</>
				)}
				{settingFor === 'privacy' && (
					<>
						<Privacy />
					</>
				)}
			</div>
		</div>
	);
};

export default UserSettings;
