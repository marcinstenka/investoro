import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Advertisement } from '../types/types';
import 'swiper/css';
import 'swiper/css/navigation';
import NoResults from './NoResults.tsx';

type MobileContentProps = {
	data: Advertisement[];
};
export default function MobileContent({ data }: MobileContentProps) {
	return (
		<div className='mobile_content'>
			<Swiper
				navigation
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={10}
			>
				{data.length > 0 ? (
					data.map((item) => (
						<SwiperSlide>
							<div className='item' key={item.id}>
								<Link className='item_photo' to={`/advertisement/${item.id}`}>
									<img src={item.photo} alt={item.description} />
								</Link>
								<div className='item_info'>
									<h1 className='item_title'>{item.title}</h1>
									<div className='item_stats'>
										<p className='item_price'>
											{item.price} <span>zł</span>
										</p>
										<p className='item_area'>
											{item.area} <span>m²</span>
										</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))
				) : (
					<NoResults />
				)}
			</Swiper>
		</div>
	);
}
