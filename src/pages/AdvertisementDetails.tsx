import React from 'react';
import { useParams } from 'react-router-dom';
import useAdvertisementDetails from '../hooks/useAdvertisementDetails.tsx';
import { FaMoneyBill } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import Nav from '../components/Nav.tsx';

export default function AdvertisementDetails() {
	let { id } = useParams();
	const ad = useAdvertisementDetails(id);
	return (
		<>
			<Nav />
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
		</>
	);
}
