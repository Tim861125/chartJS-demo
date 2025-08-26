<template>
  <div class="chart-container">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import { color } from "chart.js/helpers";
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
  backgroundColor: "#",
  responsive: true, // 隨著容器放大縮小
  maintainAspectRatio: true, // 維持長寬高度比例, 不會因為容器為長方形而被拉成橢圓形
  aspectRatio: 1, // 保持 1:1 比例（正方形）
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
  hoverOffset: 4,
  cutout: 50,
};
</script>

<style scoped>
.chart-container {
  max-width: 300px;
  max-height: 300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
