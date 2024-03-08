import React from 'react';
import useFetchAdvertisement from '../hooks/useFetchAdvertisement.tsx';

export default function Home() {
	const data = useFetchAdvertisement();
	if (!data) return;
	return (
		<main>
			{data.map((item) => (
				<div key={item.id}>
					<p>{item.title}</p>
					<img src={item.photo} alt={item.description} />
				</div>
			))}
		</main>
	);
}
