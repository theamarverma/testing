'use client';
import React from 'react';
import {
	VictoryChart,
	VictoryLine,
	VictoryScatter,
	VictoryAxis,
	VictoryLabel,
} from 'victory';
import './style.css'; // Import the CSS file with the styles

const data = [
	{ x: 'Jan', y: 20 },
	{ x: 'Feb', y: 35 },
	{ x: 'Mar', y: 23 },
	{ x: 'Apr', y: 35 },
	{ x: 'May', y: 42 },
	{ x: 'June', y: 53 },
];

const CustomRect = (props: any) => {
	const { x, y, datum, size } = props;
	const isJune = datum.x === 'June';
	const rectSize = size || 8; // Default size

	return (
		<svg
			x={x - rectSize / 2}
			y={y - rectSize / 2}
			width={rectSize}
			height={rectSize}
		>
			<rect
				width={rectSize}
				height={rectSize}
				fill={isJune ? '#9772FF' : '#C1BFFE'}
				stroke={isJune ? '#9772FF' : '#C1BFFE'}
				strokeWidth={2}
				rx={4} // Rounded corners (border radius)
				ry={4} // Rounded corners (border radius)
			/>
		</svg>
	);
};

const CustomVictory = () => (
	<div className="chart-container">
		<VictoryChart
			domainPadding={20}
			height={300}
			padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
		>
			<VictoryAxis
				style={{
					axis: { stroke: 'transparent' }, // Hide X-axis line
					tickLabels: { fill: '#000' }, // X-axis labels color
				}}
				tickValues={[0, 15, 30, 45, 60, 75]} // X-axis values
				tickFormat={(x) => x} // Format tick labels
			/>
			<VictoryAxis
				dependentAxis
				style={{
					axis: { stroke: 'transparent' }, // Hide Y-axis line
					tickLabels: { fill: '#000' }, // Y-axis labels color
					grid: { stroke: 'rgba(0, 0, 0, 0.1)', strokeDasharray: '5, 5' }, // Grid line color and style
				}}
				tickValues={[0, 15, 30, 45, 60, 75]} // Y-axis values
				tickFormat={(t: any) => t} // Format tick labels
				domain={[0, 75]} // Set Y-axis domain
			/>
			<VictoryLine
				data={data}
				style={{
					data: { stroke: 'rgba(102, 102, 255, 0.5)' }, // Line color
				}}
			/>
			<VictoryScatter
				data={data}
				size={16} // Use the size for the custom component, but will be overridden by CustomRect
				style={{
					data: {
						fill: 'transparent', // Set fill to transparent to use CustomRect
						stroke: 'none', // No border from VictoryScatter
					},
				}}
				dataComponent={<CustomRect />} // Use the custom rectangle component
			/>
		</VictoryChart>
	</div>
);

export default CustomVictory;
