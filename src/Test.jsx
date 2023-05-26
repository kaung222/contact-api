import {
  ArcElement,
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import React from "react";
import { Doughnut, Line, Pie } from "react-chartjs-2";

Chart.register(
  LinearScale,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement
);

const chartData = {
  // labels: [
  //   "January",
  //   "Febaury",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "Novenber",
  //   "December",
  // ],
  labels: [
    
    "Feb14",
    "Feb15",
    "Feb16",
    "Feb17",
    "Feb18",
    "Feb19",
    "Feb120",
   
  ],
  datasets: [
    {
      label: "Sales",
      data: [4500, 4900, 5000, 4300, 5400, 3300, 6500],
      // fill: true,
      borderWidth: 1,
      // backgroundColor: [
      //   "green", // Color for January
      //   "red", // Color for February
      //   "orange", // Color for March
      //   "pink", // Color for April
      //   "purple", // Color for May
      //   "blue", // Color for June
      // ],
      borderColor: "green",
      tension: 0.1,
    },
    {
      label: "Income",
      data: [6000, 6900, 7000, 8300, 6600, 9300, 8800],

      // fill: true,

      // backgroundColor: [
      //   "green", // Color for January
      //   "red", // Color for February
      //   "orange", // Color for March
      //   "pink", // Color for April
      //   "purple", // Color for May
      //   "blue", // Color for June
      // ],
      borderColor: "blue",
      tension: 0.1,
      borderWidth: 1,
    },
    {
      label: "Income",
      data: [5800, 6200, 3200, 7100, 6900, 5200, 7400],

      // fill: true,

      // backgroundColor: [
      //   "green", // Color for January
      //   "red", // Color for February
      //   "orange", // Color for March
      //   "pink", // Color for April
      //   "purple", // Color for May
      //   "blue", // Color for June
      // ],
      borderColor: "red",
      tension: 0.1,
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

const Test = () => {
  return (
    <div className=" w-full h-full p-5">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Test;
