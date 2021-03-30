import React, { Component } from 'react';
import userIcon from './icons/Shape.png';
import userIconMini from './icons/Group 1203.png';
import userPostImg from '../../assets/Imgs/bg.jpg';
import userIcon2 from '../../assets/Imgs/Oval Copy.svg';

class MasterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			email: '',
			username: '',
			password: '',
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { email, username, password } = this.state;
		alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`);
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		this.setState({
			currentStep: currentStep,
		});
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep,
		});
	};

	nextButton() {
		let currentStep = this.state.currentStep;
		if (currentStep < 3) {
			return (
				<div className='wrapper'>
					<p className='text-end' type='button' onClick={this._next}>
						Skip for now
					</p>
				</div>
			);
		}
		return null;
	}

	render() {
		return (
			<React.Fragment>
				<h1 className='text-center create-profile-heading'>
					Complet Your Profile
				</h1>
				<p className='text-center p-3'>Step {this.state.currentStep} </p>

				<form onSubmit={this.handleSubmit}>
					{/* 
          render the form steps and pass required props in
        */}
					<Step1
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						email={this.state.email}
					/>
					<Step2
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						username={this.state.username}
					/>
					<Step3
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						password={this.state.password}
					/>
					{this.nextButton()}
				</form>
			</React.Fragment>
		);
	}
}

function Step1(props) {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<div className='create-profile step-one'>
			<div className='user-icon'>
				<img src={userIcon} />
				<img src={userIconMini} />
				<p className='text-center'>Upload Profile Picture</p>
			</div>
			<div className='row form-field about-msg'>
				<div className='col-12'>
					<label htmlFor='about msg'>Tell Us About You</label>
					<textarea name='about' rows='7' placeholder='About You'></textarea>
				</div>
			</div>
			<div className='row form-field submit'>
				<div className='col-6'>
					<label htmlFor='blog'>Do You Have Any Website or Blog?</label>
					<input type='text' placeholder='http://' />
				</div>
				<div className='col-6'>
					<button className='common-style-btn'>
						I am Excited, Take me to Next Step
					</button>
				</div>
			</div>
			<div className='text-end skip' type='button'>
				skip for now
			</div>
		</div>
	);
}

function Step2(props) {
	if (props.currentStep !== 2) {
		return null;
	}
	return (
		<div className='step-two'>
			<h1>Tell Us What are Your Goals</h1>
			<div className='create-profile'>
				<div className='tags'>
					<div className='tag'>Business</div>
					<div className='tag'>Personal Development</div>
					<div className='tag'>Women Empowerment</div>
					<div className='tag'>Motivation/Inspiration</div>
					<div className='tag'>Health and Fitness</div>
					<div className='tag'>Workwear/Boss looks</div>
					<div className='tag'>Successful</div>
					<div className='tag'>Confident</div>
				</div>
				<div className='text-center'>
					<button className='common-style-btn' type='button'>
						Just One More Step, Yes Continue
					</button>
				</div>
				<div className='text-center skip' type='button'>
					skip for now
				</div>
			</div>
		</div>
	);
}

function Step3(props) {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<div className='wrapper step-three'>
			<h1>Based on Your Profile We Recommend You to Follow These People</h1>
			<div className='follow-suggestions'>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
				<div className='suggestion'>
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={userIcon2} />
							</div>
							<div className='user-name'>
								<h1>Motivation Company</h1>
								<p>motivationtoday</p>
							</div>
						</div>
						<div className='user-follow'>
							<button>Follow</button>
						</div>
					</div>
					<div className='user-post'>
						<img src={userPostImg} />
					</div>
				</div>
			</div>
			<div className='text-center'>
				<button className='common-style-btn profile-done'>You are Done</button>
			</div>
		</div>
	);
}

export default MasterForm;
