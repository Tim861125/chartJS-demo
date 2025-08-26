<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import { Doughnut } from "vue-chartjs";

// 註冊元件，不然圖表不會顯示
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// 這裡可以做 reactive，之後要搭配 Element Plus 的 UI
const chartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ["#f87171", "#60a5fa", "#facc15"],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
</script>
