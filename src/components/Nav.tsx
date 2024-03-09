import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
export default function Nav() {
	return (
		<nav className='nav'>
			<Link to='/' preventScrollReset={true}>
				<img src={logo} />
			</Link>
		</nav>
	);
}
