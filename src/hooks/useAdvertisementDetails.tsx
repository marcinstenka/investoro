import { useEffect, useState } from 'react';
import { Advertisement } from '../types/types';

export default function useAdvertisementDetails() {
	const [data, setData] = useState<Advertisement[] | null>();
	console.log(data);
	useEffect(() => {
		fetch('/data/data.json')
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((e: Error) => console.log(e.message));
	}, []);
	return data;
}
