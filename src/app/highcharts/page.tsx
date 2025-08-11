import { HightChartDemo } from './_components/HighChartDemo';
import Variwide from './_components/Variwide';

export default function HighChartPage() {
	return (
		<>
			<div className="h-[500px]">
				<HightChartDemo />
				{/* <Variwide /> */}
			</div>

			<div className="bg-red-800 text-3xl">Hello</div>
		</>
	);
}
