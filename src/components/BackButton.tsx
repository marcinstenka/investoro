import React from 'react';
import { IoReturnDownBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export default function BackButton() {
	return (
		<Link to='/' className='button'>
			<IoReturnDownBack />
		</Link>
	);
}
