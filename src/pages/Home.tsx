import React from 'react';
import useFetchAdvertisement from '../hooks/useFetchAdvertisement.tsx';
import DesktopContent from '../components/DesktopContent.tsx';
import MobileContent from '../components/MobileContent.tsx';

export default function Home() {
	const data = useFetchAdvertisement();
	if (!data) return;
	return (
		<main className='content'>
			<DesktopContent data={data} />
			<MobileContent data={data} />
		</main>
	);
}
