<script setup lang="ts">
import { ref } from "vue";
import MyChart from "./components/my-chart.vue";
</script>

<template>
  <div class=".app-container">
    <el-card>
      <h2>Chart.js + Element Plus</h2>
      <my-chart />
    </el-card>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}
</style>
