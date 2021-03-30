import React, { Component, createContext } from 'react';

export const AuthContext = createContext({
	state: null,
	actions: {
		updateState: () => {},
	},
});

export class AuthContextProvider extends Component {
	constructor(props) {
		super(props);
		const user = localStorage.getItem('currentUser');
		if (user) {
			try {
				const userObject = JSON.parse(user);
				this.state = userObject;
			} catch (e) {
				console.log(e);
			}
		}
	}

	updateState = (state) => {
		if (state) {
			const user = JSON.stringify(state);
			localStorage.setItem('currentUser', user);
			if (state.token) {
				localStorage.setItem('token', state.token);
			}
		} else {
			localStorage.clear();
		}
		this.setState(state);
	};
	render() {
		const context = {
			state: this.state,
			actions: {
				updateState: this.updateState,
			},
		};
		return (
			<AuthContext.Provider value={context}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}
