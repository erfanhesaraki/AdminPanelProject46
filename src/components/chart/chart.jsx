"use client";
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
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  elements: {
    line: {
      tension: 0.4, // تغییر در شکل خط
      borderWidth: 3, // ضخامت خط
      borderJoinStyle: "round", // شکل اتصال خطوط
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(30 58 138)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(162 28 175)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function CustomChart() {
  return <Line options={options2} data={data} />;
}
