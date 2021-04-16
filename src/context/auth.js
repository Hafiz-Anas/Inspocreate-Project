import React, { Component, createContext } from 'react';
import cookie from 'js-cookie';

export const AuthContext = createContext({
	state: null,
	actions: {
		updateState: () => {},
	},
});

export class AuthContextProvider extends Component {
	constructor(props) {
		super(props);
		const user = props.user;
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
			cookie.set('user', user, { expires: 7 });
			if (state.token) {
				cookie.set('user', state.token);
			}
		} else {
			cookie.remove('user');
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
export function getServerSideProps({ req, res }) {
	console.log('AuthContextProvider => getServerSideProps => ', req.cookies);
	return { props: { user: req.cookies.user || '' } };
}
