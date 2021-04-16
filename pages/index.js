import Head from 'next/head';
import Cookies from 'cookies';

import NavbarBeforeLogin from '../src/components/navbarBeforeLogin';
import NavbarAfterLogin from '../src/components/navbarAfterLogin';
import MainContent from '../src/components/mainContent';
import Footer from '../src/components/footer';
import { AuthContextProvider, AuthContext } from '../src/context/auth';
import React, { useEffect } from 'react';

export default function Home(props) {
	useEffect(() => {
		console.log('Home => ', props);
	}, []);
	return (
		<>
			<Head>
				<title>Inspocreate</title>
				<meta name='keywords' content='Users' />
			</Head>
			<NavbarBeforeLogin />
			<MainContent />
			<Footer />
		</>
	);
}
export const getServerSideProps = async ({ req, res }) => {
	const cookies = new Cookies(req, res);
	console.log(
		'Index => getServerSideProps => cookies => ',
		cookies.get('name')
	);
	return { props: { name: cookies.get('name') || null } };
};
