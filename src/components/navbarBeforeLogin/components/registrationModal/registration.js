import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../../../axios';
import { AuthContext } from '../../../../context/auth';
import { Modal, Button } from 'react-bootstrap';
import clsx from 'clsx';
import Image from 'next/image';

const RegistrationModal = (props) => {
	const handleCloseJoin = () => props.setShowJoin(false);
	const authContext = useContext(AuthContext);
	const history = useHistory();
	const [userType, setUserType] = useState('User');

	//  FORM VALIDATION
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		cname: '',
		bType: '',
		rType: '',
	});
	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		cname: '',
		bType: '',
		rType: '',
	});

	const [signupState, setSignupState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		cname: '',
		bType: '',
		rType: '',
	});
	const handleChangej = (event) => {
		const newState = { ...signupState };
		newState[event.target.name] = event.target.value;
		setSignupState({
			...newState,
		});

		setState({
			...state,
			[event.target.name]: event.target.value,
		});

		if (event.target.name === 'firstName') {
			if (event.target.value.length < 1) {
				setErrors({
					...errors,
					firstName: 'Invalid First Name',
				});
			} else {
				setErrors({
					...errors,
					firstName: '',
				});
			}
		}

		if (event.target.name === 'lastName') {
			if (event.target.value.length < 1) {
				setErrors({
					...errors,
					lastName: 'Invalid Last Name',
				});
			} else {
				setErrors({
					...errors,
					lastName: '',
				});
			}
		}

		if (event.target.name === 'cname') {
			if (event.target.value.length < 1) {
				setErrors({
					...errors,
					cname: 'Invalid Company Name',
				});
			} else {
				setErrors({
					...errors,
					cname: '',
				});
			}
		}

		if (event.target.name === 'email') {
			if (event.target.value.indexOf('@') === -1) {
				setErrors({
					...errors,
					email: 'Invalid Email Address',
				});
			} else {
				setErrors({
					...errors,
					email: '',
				});
			}
		}
		if (event.target.name === 'password') {
			if (event.target.value.length < 8) {
				setErrors({
					...errors,
					password: 'Please Enter Correct Password',
				});
			} else {
				setErrors({
					...errors,
					password: '',
				});
			}
		}
	};
	const handleSubmitj = (e) => {
		e.preventDefault();
		axios
			.post('/auth/register', {
				...signupState,
				username: signupState.email,
				rType: userType,
			})
			.then((response) => {
				authContext.actions.updateState(response.data);
				if (response.data.pendingOperations.includes('createProfile')) {
					history.push('/create-profile');
				}
				console.log(response);
			})
			.catch((error) => {
				console.error(error.response);
			});
	};
	return (
		<div>
			<Modal
				size='lg'
				className='modal join-modal'
				centered
				show={props.showJoin}
				onHide={handleCloseJoin}
				animation={true}
			>
				<div className='modal-container'>
					<span className='remove-modal' onClick={handleCloseJoin}>
						&times;
					</span>
					<div className='modal-header'>
						<div className='modal-heading'>
							<h1>Join Our Community</h1>
						</div>
						<div className='user-type'>
							<button
								onClick={() => setUserType('User')}
								className={clsx({ selected: userType === 'User' })}
							>
								<span className='material-icons'>person_pin</span>
								Individual
							</button>
							<button
								className='company'
								onClick={() => setUserType('Mentor')}
								className={clsx({ selected: userType === 'Mentor' })}
							>
								<span className='material-icons'>file_copy</span>
								Company
							</button>
						</div>
						{userType === 'User' && (
							<>
								<div className='social-login-btns'>
									<button className='fb-login'>
										<Image
											src='/public/Images/Fill 1.svg'
											width={30}
											height={30}
										/>
										Sign Up With Facebook
									</button>
									<button className='g-login'>
										<Image
											src='/public/Images/Grou.svg'
											width={30}
											height={30}
										/>
										Sign Up With Google
									</button>
								</div>
								<div className='modal-body'>
									<form onSubmit={handleSubmitj}>
										<h1>Sign Up with Email</h1>
										<div className='name-inputs'>
											<div className='form-field'>
												<label htmlFor='name'>First Name</label>
												<input
													type='name'
													className='mr'
													name='firstName'
													placeholder='First Name'
													onChange={handleChangej}
												/>
												{!!errors.firstName && (
													<small className='text-danger'>
														{errors.firstName}
													</small>
												)}
											</div>
											<div className='form-field'>
												<label htmlFor='name'>Last Name</label>
												<input
													type='name'
													name='lastName'
													placeholder='Last Name'
													onChange={handleChangej}
												/>
												{!!errors.lastName && (
													<small className='text-danger'>
														{errors.lastName}
													</small>
												)}
											</div>
										</div>
										<div className='form-field'>
											<label htmlFor='email'>Email</label>
											<input
												type='email'
												name='email'
												placeholder='Email'
												onChange={handleChangej}
											/>
											{!!errors.email && (
												<small className='text-danger'>{errors.email}</small>
											)}
										</div>
										<div className='form-field'>
											<label htmlFor='password'>password</label>
											<input
												type='password'
												name='password'
												placeholder='******'
												onChange={handleChangej}
											/>
											{!!errors.password && (
												<small className='text-danger'>{errors.password}</small>
											)}
										</div>
										<div className='login-btns'>
											<Image
												src='/public/Images/Bitmap.svg'
												width={30}
												height={30}
											/>
											<button type='submit'>Continue</button>
										</div>
									</form>
								</div>
								<div className='modal-footer m-footer'>
									<p>
										<input type='checkbox' /> I agree to{' '}
										<span>Terms and Conditions</span>{' '}
									</p>
								</div>
							</>
						)}
						{userType === 'Mentor' && (
							<>
								<div className='social-login-btns'>
									<button className='fb-login'>
										<Image
											src='/public/Images/Fill 1.svg'
											width={30}
											height={30}
										/>
										Sign Up With Facebook
									</button>
									<button className='g-login'>
										<Image
											src='/public/Images/Grou.svg'
											width={30}
											height={30}
										/>
										Sign Up With Google
									</button>
								</div>
								<div className='modal-body'>
									<form onSubmit={handleSubmitj}>
										<h1>Sign Up with Email</h1>
										<div className='mentor-inputs'>
											<div className='form-field'>
												<label htmlFor='company'>Company Name</label>
												<input
													type='name'
													name='cname'
													placeholder='Enter Your Company Name'
													onChange={handleChangej}
												/>
												{!!errors.cname && (
													<small className='text-danger'>{errors.cname}</small>
												)}
											</div>
											<div className='form-field'>
												<label>Business Type</label>
												<select name='Bussiness-Type' className='select-type'>
													<option value=''>Business Coach/Consultant</option>
													<option value=''>
														Personal Development Coach/ Consultant
													</option>
													<option value=''>
														Empowerment/Motivational Business
													</option>
													<option value=''>Marketing Business</option>
													<option value=''>Other (Please specify)</option>
												</select>
											</div>
										</div>
										<div className='form-field'>
											<label htmlFor='email'>Email</label>
											<input
												type='email'
												name='email'
												placeholder='Email'
												onChange={handleChangej}
											/>
											{!!errors.email && (
												<small className='text-danger'>{errors.email}</small>
											)}
										</div>
										<div className='form-field'>
											<label htmlFor='password'>Password</label>
											<input
												type='password'
												name='password'
												placeholder='******'
												onChange={handleChangej}
											/>
											{!!errors.password && (
												<small className='text-danger'>{errors.password}</small>
											)}
										</div>
										<div className='login-btns'>
											<Image
												src='/public/Images/Bitmap.svg'
												width={30}
												height={30}
											/>
											<button type='submit'>Continue</button>
										</div>
									</form>
								</div>
								<div className='modal-footer m-footer'>
									<p>
										<input type='checkbox' /> I agree to{' '}
										<span>Terms and Conditions</span>{' '}
									</p>
								</div>
							</>
						)}
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default RegistrationModal;
