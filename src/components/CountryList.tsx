import React from 'react';
import Select from 'react-select';
import Loading from './Loading.tsx';
import { Country } from '../types/types.tsx';

type CountryListProps = {
	countryList: Country[];
	selectedCountry: Country | null;
	setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
};

export default function CountryList({
	countryList,
	selectedCountry,
	setSelectedCountry,
}: CountryListProps) {
	if (!countryList) return <Loading />;
	return (
		<div className='countryList'>
			<Select
				options={countryList}
				onChange={(selectedOption) => setSelectedCountry(selectedOption)}
				value={selectedCountry}
				isSearchable
				noOptionsMessage={() => 'Brak dostępnych opcji'}
				isClearable
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
						cursor: 'pointer',
						color: '#000000',
					}),
					control: (provided) => ({
						...provided,
						width: '300px',
						cursor: 'text',
					}),
				}}
			/>
		</div>
	);
}
