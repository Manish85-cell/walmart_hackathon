import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const mockData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Predicted Demand',
      data: [30, 50, 45, 60, 80, 70],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.3,
    },
  ],
};

export default function ForecastChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <Line data={mockData} />
    </div>
  );
}
