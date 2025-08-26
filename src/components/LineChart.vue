<template>
  <div class="chart-container">
    <h3>折線圖範例</h3>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import {
  CategoryScale,
  Chart as ChartJS,
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
  Legend
);

const chartData = {
  labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
  datasets: [
    {
      label: "網站訪問量",
      data: [65, 59, 80, 81, 56, 55],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.4,
    },
    {
      label: "用戶註冊數",
      data: [28, 48, 40, 19, 86, 27],
      borderColor: "#ef4444",
      backgroundColor: "rgba(239, 68, 68, 0.1)",
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
      text: "網站數據趨勢",
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
