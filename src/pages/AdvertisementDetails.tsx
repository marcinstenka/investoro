import React from 'react';
import { useParams } from 'react-router-dom';
import useAdvertisementDetails from '../hooks/useAdvertisementDetails.tsx';

export default function AdvertisementDetails() {
	let { id } = useParams();
	const ad = useAdvertisementDetails(id);
	return (
		<section>
			<h2>{ad?.title}</h2>
			<div>
				<img src={ad?.photo} alt={ad?.description} />
			</div>
			<p>{ad?.description}</p>
			<p>{ad?.price} pln</p>
			<p>{ad?.area} m^2</p>
		</section>
	);
}
