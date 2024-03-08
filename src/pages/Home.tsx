import React from 'react';
import useFetchAdvertisement from '../hooks/useFetchAdvertisement.tsx';

export default function Home() {
	const data = useFetchAdvertisement();
	if (!data) return;
	return (
		<main className='content'>
			{data.map((item) => (
				<div className='item' key={item.id}>
					<p>{item.title}</p>
					<div className='img_container'>
						<img src={item.photo} alt={item.description} />
					</div>
					<p>{item.price}</p>
				</div>
			))}
		</main>
	);
}
