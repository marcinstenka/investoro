import data from '../data/data.json';

export default function Home() {
	return (
		<main>
			{data.map((item) => (
				<div key={item.id}>
					{console.log(item)}
					<p>{item.title}</p>
					<img src={item.photo} alt={item.description} />
				</div>
			))}
		</main>
	);
}
