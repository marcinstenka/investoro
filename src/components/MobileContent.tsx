import React from 'react';
import { Link } from 'react-router-dom';
import { Advertisement } from '../types/types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
type MobileContentProps = {
	data: Advertisement[];
};
export default function MobileContent({ data }: MobileContentProps) {
	return (
		<div className='mobile_content'>
			<Swiper spaceBetween={50} slidesPerView={3}>
				{data &&
					data.map((item) => (
						<SwiperSlide>
							<Link
								to={`/advertisement/${item.id}`}
								className='item'
								key={item.id}
							>
								<h1 className='item_title'>{item.title}</h1>
								<div className='item_photo'>
									<img src={item.photo} alt={item.description} />
								</div>
								<p className='item_price'>{item.price}</p>
							</Link>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}
