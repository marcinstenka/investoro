import React, { useEffect, useState } from 'react';
import { Country } from '../types/types';
export default function useCountryList() {
	const [list, setList] = useState<Country[] | null>(null);
	const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((res) => {
				const countries = res.map((country: any) => ({
					value: country.name.common.toString(),
					flagUrl: country.flags.png,
				}));
				setList(countries);
			});
	}, []);
	let countryList: Country[] | null = null;
	if (list) {
		countryList = list.map((country) => ({
			...country,
			label: (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<img
						src={country.flagUrl}
						alt={`Flag of ${country.value}`}
						style={{ marginRight: '10px', width: '20px', height: 'auto' }}
					/>
					{country.value}
				</div>
			),
		}));
	}
	return { countryList, selectedCountry, setSelectedCountry };
}
