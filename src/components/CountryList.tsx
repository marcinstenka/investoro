import React from 'react';
import Select from 'react-select';
import Loading from './Loading.tsx';
import useCountryList from '../hooks/useCountryList.tsx';

export default function CountryList() {
	const { countryList, selectedCountry, setSelectedCountry } = useCountryList();

	if (!countryList) return <Loading />;

	return (
		<div className='countryList'>
			<Select
				options={countryList}
				onChange={(selectedOption) => setSelectedCountry(selectedOption)}
				value={selectedCountry}
				isSearchable
				placeholder='Wybierz kraj...'
				styles={{
					menu: (provided, state) => ({
						...provided,
						zIndex: '100',
					}),
					option: (provided, state) => ({
						...provided,
						borderBottom: '1px solid #ccc',
						backgroundColor: '#ffffff',
						color: '#000000',
					}),
					control: (provided) => ({
						...provided,
						width: '300px',
					}),
				}}
			/>
		</div>
	);
}
