import React from 'react';
import { redirect, useParams } from 'react-router-dom';
import useAdvertisementDetails from '../hooks/useAdvertisementDetails.tsx';
import { FaMoneyBill } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

export default function AdvertisementDetails() {
	let { id } = useParams();
	if (!id) redirect('/not-found');
	const ad = useAdvertisementDetails(id);
	return (
		<section>
			<h2>{ad?.title}</h2>
			<div>
				<img src={ad?.photo} alt={ad?.description} />
			</div>
			<p>{ad?.description}</p>
			<div>
				<FaMoneyBill />
				<p>{ad?.price} pln</p>
			</div>
			<div>
				<FaHouse />
				<p>{ad?.area} m^2</p>
			</div>
		</section>
	);
}
