import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAdvertisementDetails from '../hooks/useAdvertisementDetails.tsx';
import { FaMoneyBill } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import BackButton from '../components/BackButton.tsx';
import Loading from '../components/Loading.tsx';
export default function AdvertisementDetails() {
	let { id } = useParams();
	const ad = useAdvertisementDetails(id);
	const navigate = useNavigate();
	if (ad == null) {
		navigate('/');
	}
	if (!ad) return <Loading />;
	return (
		<section className='ad'>
			<h2 className='ad_title'>{ad?.title}</h2>
			<div className='ad_photo'>
				<img src={ad?.photo} alt={ad?.description} />
			</div>
			<p className='ad_description'>{ad?.description}</p>
			<div className='ad_stats'>
				<div className='ad_price'>
					<FaMoneyBill />
					<p>{ad?.price} zł</p>
				</div>
				<div className='ad_area'>
					<FaHouse />
					<p>{ad?.area} m²</p>
				</div>
			</div>
			<BackButton />
		</section>
	);
}
