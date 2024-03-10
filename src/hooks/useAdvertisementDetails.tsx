import { useEffect, useState } from 'react';
import { Advertisement } from '../types/types.ts';

export default function useAdvertisementDetails(id: string | undefined) {
	let parsedInt: number;
	if (id) parsedInt = parseInt(id);
	const [data, setData] = useState<Advertisement | null>(null);
	useEffect(() => {
		fetch('/data/data.json')
			.then((res) => res.json())
			.then((res) => {
				const selectedAd = res.find((ad: Advertisement) => ad.id === parsedInt);
				setData(selectedAd);
			})
			.catch((e: Error) => console.log(e.message));
	}, []);
	return data;
}
