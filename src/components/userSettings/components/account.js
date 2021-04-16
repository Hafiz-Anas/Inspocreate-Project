import React, { useContext, useEffect, useState } from 'react';
import userIcon from '../icons/Shape.png';
import userIconMini from '../icons/Group 1203.png';
import { useDispatch } from 'react-redux';
import { changeSettingsThunk, delAccountThunk } from '../../../reducers';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/auth';

const Account = () => {
	const context = useContext(AuthContext);
	const history = useHistory();
	const dispatch = useDispatch();

	const delAccount = () => {
		dispatch(delAccountThunk());
		history.push('./home');
		context.actions.updateState(null);
	};

	//  FORM VALIDATION
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		bio: '',
		url: '',
		password: '',
		confirmPassword: '',
	});
	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		bio: '',
		url: '',
		password: '',
		confirmPassword: '',
	});

	useEffect(() => {
		setState({
			...context.state,
			password: '',
			confirmPassword: '',
		});
	}, []);

	const getErrors = (values) => {
		const err = { ...errors };
		for (let key in values) {
			if (key === 'firstName') {
				if (values[key].length < 1) {
					err.firstName = 'Invalid First Name';
				} else {
					err.firstName = '';
				}
			}

			if (key === 'lastName') {
				if (values[key].length < 1) {
					err.lastName = 'Invalid Last Name';
				} else {
					err.lastName = '';
				}
			}

			if (key === 'username') {
				if (values[key].length < 1) {
					err.username = 'Invalid Username';
				} else {
					err.username = '';
				}
			}

			if (key === 'email') {
				if (values[key].indexOf('@') === -1) {
					err.email = 'Invalid Email Address';
				} else {
					err.email = '';
				}
			}

			if (key === 'website') {
				if (values[key].indexOf('https://') === -1) {
					err.website = 'Please Enter URL Address';
				} else {
					err.website = '';
				}
			}

			if (key === 'password') {
				if (values[key].length < 8) {
					err.password = 'Please Enter Correct Password';
				} else {
					err.password = '';
				}
			}

			if (key === 'confirmPassword') {
				if (values[key].length < 8) {
					err.confirmPassword = 'Please Enter Correct Password';
				} else {
					err.confirmPassword = '';
				}
			}
		}

		return err;
	};

	const updateSettings = (event) => {
		event.preventDefault();
		const newErrors = getErrors({ ...state });
		if (Object.values(newErrors).every((item) => item === '')) {
			dispatch(
				changeSettingsThunk({
					...state,
					rType: context.state.rType[0],
				})
			);
		} else {
			setErrors(newErrors);
		}
	};

	const handleChange = (event) => {
		const newState = { ...state, [event.target.name]: event.target.value };
		setState(newState);
		setErrors(getErrors(newState));
	};

	return (
		<div className='wrapper account-setting'>
			<form className='account-form' onSubmit={updateSettings}>
				<div className='user-icon'>
					<img className='user-icon' src={userIcon} />
					<img src={userIconMini} />
				</div>
				<div className='row mt'>
					<div className='form-field col-4'>
						<label for='First Name'>First Name</label>
						<input
							type='text'
							name='firstName'
							placeholder='First Name'
							onChange={handleChange}
							value={state.firstName}
						/>
						{!!errors.firstName && (
							<small className='text-danger'>{errors.firstName}</small>
						)}
					</div>
					<div className='form-field col-4'>
						<label for='Last Name'>Last Name</label>
						<input
							type='text'
							name='lastName'
							placeholder='Last Name'
							onChange={handleChange}
							value={state.lastName}
						/>
						{!!errors.lastName && (
							<small className='text-danger'>{errors.lastName}</small>
						)}
					</div>
					<div className='form-field col-4'>
						<label for='Username'>Username</label>
						<input
							type='text'
							name='username'
							placeholder='Username'
							onChange={handleChange}
							value={state.username}
						/>
						{!!errors.username && (
							<small className='text-danger'>{errors.username}</small>
						)}
					</div>
				</div>
				<div className='row'>
					<div className='form-field 12-col'>
						<label for='bio'>Enter Bio</label>
						<textarea
							rows='7'
							type='text'
							name='bio'
							placeholder='Tell us About you'
							onChange={handleChange}
							value={state.bio}
						/>
						{/*{errors.bio && <small className='text-danger'>{errors.bio}</small>}*/}
					</div>
				</div>
				<div className='row'>
					<div className='form-field col-6'>
						<label for='Email'>Email Address</label>
						<input
							type='email'
							name='email'
							placeholder='Email'
							onChange={handleChange}
							value={state.email}
						/>
						{!!errors.email && (
							<small className='text-danger'>{errors.email}</small>
						)}
					</div>
					<div className='form-field col-6'>
						<label for='Website'>Website</label>
						<input
							type='url'
							name='website'
							placeholder='https://'
							onChange={handleChange}
							value={state.website}
						/>
						{!!errors.website && (
							<small className='text-danger'>{errors.website}</small>
						)}
					</div>
				</div>
				<div className='row'>
					<div className='form-field col-6'>
						<label for='Password'>Current Password</label>
						<input
							type='password'
							name='password'
							placeholder='*****'
							onChange={handleChange}
							value={state.password}
						/>
						{!!errors.password && (
							<small className='text-danger'>{errors.password}</small>
						)}
					</div>
					<div className='form-field col-6'>
						<label for='Password'>Confirm Password</label>
						<input
							type='password'
							name='confirmPassword'
							placeholder='*****'
							onChange={handleChange}
							value={state.confirmPassword}
						/>
						{!!errors.confirmPassword && (
							<small className='text-danger'>{errors.confirmPassword}</small>
						)}
					</div>
				</div>
				<div className='row submit-postion'>
					<div className='form-submit col-6'>
						<button className='common-style-btn' type='submit'>
							Save Settings
						</button>
					</div>
					<div className='del-account col-6'>
						<a onClick={delAccount}>
							<span className='material-icons'>delete</span> Delete account
						</a>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Account;
