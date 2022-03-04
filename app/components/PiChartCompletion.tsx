import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend, Title);
import { Doughnut } from "react-chartjs-2";

interface IChartProps {
	amountCompleted: number;
	amountIncomplete: number;

	label: string;
}

const PiChartCompletion = (props: IChartProps) => {
	const data = {
		labels: ["Completed", "Incomplete"],
		datasets: [
			{
				data: [props.amountCompleted, props.amountIncomplete],
				backgroundColor: ["#00bcd4", "#ffc107"],
				hoverBackgroundColor: ["#00bcd4", "#ffc107"],
			},
		],
	};
	return <Doughnut data={data} />;
};

export default PiChartCompletion;
