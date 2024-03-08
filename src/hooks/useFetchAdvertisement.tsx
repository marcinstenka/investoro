import { useEffect, useState } from 'react';
type Advertisement = {
	id: number;
	title: string;
	description: string;
	price: number;
	photo: string;
};
export default function useFetchAdvertisement() {
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
