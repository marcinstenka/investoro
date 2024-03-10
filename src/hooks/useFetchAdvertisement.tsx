import { useEffect, useState } from 'react';
import { Advertisement, Country } from '../types/types.tsx';

export default function useFetchAdvertisement(selectedCountry: Country | null) {
	const [data, setData] = useState<Advertisement[] | null>();
	useEffect(() => {
		fetch('/investoro/data/data.json')
			.then((res) => res.json())
			.then((res) => {
				if (selectedCountry) {
					const filteredData = res.filter(
						(item: Advertisement) => item.country === selectedCountry.value
					);
					setData(filteredData);
				} else {
					setData(res);
				}
			})
			.catch((e: Error) => console.log(e.message));
	}, [selectedCountry]);

	return data;
}
