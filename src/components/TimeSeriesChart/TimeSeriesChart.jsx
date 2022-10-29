import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Time Series Chart",
    },
  },
};
function TimeSeriesChart() {
  const { bills } = useSelector((store) => store.bills);
  const newBills = [...bills];

  newBills.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  const labels = newBills.map((e) => e.date);
  const values = newBills.map((e) => e.amount);

  const data = {
    labels,
    datasets: [
      {
        label: "Amount",
        data: values,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (bills.length === 0) return <></>;

  return (
    <div style={{ maxWidth: "50%", margin: "0 auto" }}>
      <Line options={options} data={data} />
    </div>
  );
}

export default TimeSeriesChart;
