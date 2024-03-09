import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Advertisement } from '../types/types';
import 'swiper/css';
import 'swiper/css/navigation';

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
				breakpoints={{
					320: {
						slidesPerView: 2,
					},
					600: {
						slidesPerView: 3,
					},
				}}
			>
				{data &&
					data.map((item) => (
						<SwiperSlide>
							<div className='item' key={item.id}>
								<Link className='item_photo' to={`/advertisement/${item.id}`}>
									<img src={item.photo} alt={item.description} />
								</Link>
								<div className='item_info'>
									<h1 className='item_title'>{item.title}</h1>
									<div className='item_stats'>
										<p className='item_price'>{item.price} zł</p>
										<p className='item_price'>{item.area} m²</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}
