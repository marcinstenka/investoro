import React, { useEffect, useState } from 'react';
type Advertisement = {
	id: number;
	title: string;
	description: string;
	price: number;
	photo: string;
};
export default function Home() {
	const [data, setData] = useState<Advertisement[] | null>();
	useEffect(() => {
		fetch('../data/data.json')
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((e: Error) => console.log(e.message));
	}, []);
	if (!data) return;
	return (
		<main>
			{data.map((item) => (
				<div key={item.id}>
					<p>{item.title}</p>
					<img src={item.photo} alt={item.description} />
				</div>
			))}
		</main>
	);
}
