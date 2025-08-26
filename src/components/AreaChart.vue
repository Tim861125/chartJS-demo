<template>
  <div class="chart-container">
    <h3>區域圖範例</h3>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";

// 註冊元件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const chartData = {
  labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
  datasets: [
    {
      label: "收入",
      data: [65, 59, 80, 81, 56, 55],
      borderColor: "#10b981",
      backgroundColor: "rgba(16, 185, 129, 0.3)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "支出",
      data: [28, 48, 40, 19, 86, 27],
      borderColor: "#f59e0b",
      backgroundColor: "rgba(245, 158, 11, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "財務數據區域圖",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      stacked: false,
    },
  },
  elements: {
    line: {
      fill: true,
    },
  },
};
</script>

<style scoped>
.chart-container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

h3 {
  text-align: center;
  color: #303133;
  margin-bottom: 20px;
}
</style>
