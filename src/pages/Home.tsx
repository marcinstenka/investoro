import React from 'react';
import useFetchAdvertisement from '../hooks/useFetchAdvertisement.tsx';
import DesktopContent from '../components/DesktopContent.tsx';
import MobileContent from '../components/MobileContent.tsx';
import Loading from '../components/Loading.tsx';
import CountryList from '../components/CountryList.tsx';
import useCountryList from '../hooks/useCountryList.tsx';

export default function Home() {
	const { countryList, selectedCountry, setSelectedCountry } = useCountryList();
	const data = useFetchAdvertisement(selectedCountry);
	if (!data) return <Loading />;
	return (
		<main className='content'>
			<CountryList
				countryList={countryList}
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
			/>
			<DesktopContent data={data} />
			<MobileContent data={data} />
		</main>
	);
}
