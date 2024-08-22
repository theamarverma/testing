'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function SwiperCard() {
	return (
		<>
			<div className="h-40">
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					// autoplay={{ delay: 5000, disableOnInteraction: false }}
					modules={[Pagination, Autoplay]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div>
							<h1 className="w-full lg:text-4xl xl:7xl">
								Live Programs Led by Global Workplace Development Experts{' '}
							</h1>
							<h3>
								Programs by Josei allow you to reforge the performance,
								resilience and wellbeing of your at scale
							</h3>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<h1 className="w-full lg:text-4xl xl:7xl">
								Live Programs Led by Global Workplace Development Experts{' '}
							</h1>
							<h3>
								Programs by Josei allow you to reforge the performance,
								resilience and wellbeing of your at scale
							</h3>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<h1 className="w-full lg:text-4xl xl:7xl">
								Live Programs Led by Global Workplace Development Experts{' '}
							</h1>
							<h3>
								Programs by Josei allow you to reforge the performance,
								resilience and wellbeing of your at scale
							</h3>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
