import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../../../axios';
import { AuthContext } from '../../../../context/auth';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';

const LoginModal = (props) => {
	const handleCloseLogin = () => props.setShowLogin(false);

	const authContext = useContext(AuthContext);
	const history = useHistory();

	//  FORM VALIDATION
	const [state, setState] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});
	const [loginState, setLoginState] = useState({
		email: '',
		password: '',
	});
	const handleChange = (event) => {
		const newState = { ...loginState };
		newState[event.target.name] = event.target.value;
		setLoginState({
			...newState,
		});

		setState({
			...state,
			[event.target.name]: event.target.value,
		});

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
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('/auth/login', { ...loginState })
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
				size='md'
				className='login-modal'
				centered
				show={props.showLogin}
				onHide={handleCloseLogin}
				animation={true}
			>
				<div className='modal-container'>
					<span className='remove-modal' onClick={handleCloseLogin}>
						&times;
					</span>
					<div className='modal-header'>
						<div className='modal-heading'>
							<h1>Login</h1>
						</div>
						<div className='login-btns'>
							<button className='fb-login'>
								<Image src='/public/Images/Fill 1.svg' width={30} height={30} />
								Sign Up With Facebook
							</button>
							<button className='g-login'>
								<Image src='/public/Images/Grou.svg' width={30} height={30} />
								Sign Up With Google
							</button>
						</div>
					</div>
					<div className='modal-body'>
						<form onSubmit={handleSubmit}>
							<h1>Login With Email</h1>
							<div className='form-field'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									onChange={handleChange}
									placeholder='Email'
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
									onChange={handleChange}
									placeholder='******'
								/>
								{!!errors.password && (
									<small className='text-danger'>{errors.password}</small>
								)}
							</div>
							<div className='login-btns'>
								<Image src='/public/Images/Bitmap.svg' width={30} height={30} />
								<button
									type='submit'
									onClick={() => {
										// cookie.set("token", "ABCD", { expires: 1 / 24 });
										fetch('/api/login', {
											method: 'post',
											headers: {
												'Content-Type': 'application/json',
											},
											body: JSON.stringify({ token: 'token' }),
										});
									}}
								>
									Continue
								</button>
							</div>
						</form>
					</div>
					<div className='modal-footer m-footer'>
						<p>
							Forget Password? <span>Reset</span>{' '}
						</p>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default LoginModal;

// useEffect(() => {
//     if (authContext.state) {
//         props.setShowLogin(false)
//     }
// }, [authContext])
