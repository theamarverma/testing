import Image from 'next/image';

export default function Home() {
	const pages = [
		{
			name: 'Highcharts',
			path: '/highcharts',
		},
		{
			name: 'Recharts',
			path: '/recharts',
		},
		{
			name: 'Victory',
			path: '/victory',
		},
		{
			name: 'Swiper',
			path: '/swiper',
		},
	];
	return (
		<>
			<h1>Welcome to Testing Components</h1>
			<div>
				{pages.map((component) => (
					<a
						key={component.name}
						href={component.path}>
						{component.name}
					</a>
				))}
			</div>
		</>
	);
}
