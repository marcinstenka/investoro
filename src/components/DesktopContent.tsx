import React from 'react';
import { Link } from 'react-router-dom';
import { Advertisement } from '../types/types.tsx';
import NoResults from './NoResults.tsx';

type DesktopContentProps = {
	data: Advertisement[];
};
export default function DesktopContent({ data }: DesktopContentProps) {
	return (
		<div className='desktop_content'>
			{data.length > 0 ? (
				data.map((item) => (
					<Link to={`/advertisement/${item.id}`} className='item' key={item.id}>
						<div className='item_info'>
							<h1 className='item_title'>{item.title}</h1>
							<div>
								<p className='item_price'>
									{item.price} <span>zł</span>
								</p>
								<p className='item_area'>
									{item.area} <span>m²</span>
								</p>
							</div>
						</div>

						<div className='item_photo'>
							<img src={item.photo} alt={item.description} />
						</div>
					</Link>
				))
			) : (
				<NoResults />
			)}
		</div>
	);
}
