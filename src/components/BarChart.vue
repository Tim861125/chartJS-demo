<template>
  <div class="chart-container">
    <h3>長條圖範例</h3>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "vue-chartjs";

// 註冊元件
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
  datasets: [
    {
      label: "銷售額",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        "#f87171",
        "#fb923c",
        "#facc15",
        "#a3e635",
        "#34d399",
        "#60a5fa",
      ],
      borderColor: [
        "#ef4444",
        "#f97316",
        "#eab308",
        "#84cc16",
        "#10b981",
        "#3b82f6",
      ],
      borderWidth: 1,
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
      text: "月份銷售統計",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
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
