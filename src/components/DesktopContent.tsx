import React from 'react';
import { Link } from 'react-router-dom';
import { Advertisement } from '../types/types';

type DesktopContentProps = {
	data: Advertisement[];
};
export default function DesktopContent({ data }: DesktopContentProps) {
	return (
		<div className='desktop_content'>
			{data &&
				data.map((item) => (
					<Link to={`/advertisement/${item.id}`} className='item' key={item.id}>
						<h1 className='item_title'>{item.title}</h1>
						<div className='item_photo'>
							<img src={item.photo} alt={item.description} />
						</div>
						<p className='item_price'>{item.price}</p>
					</Link>
				))}
		</div>
	);
}
