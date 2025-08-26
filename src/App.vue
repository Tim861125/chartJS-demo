<script setup lang="ts">
import { ref } from "vue";
import MyChart from "./components/my-chart.vue";

const value = ref(30);
</script>

<template>
  <div class="p-6">
    <el-card class="w-10">
      <h2>Chart.js + Element Plus</h2>
      <el-slider v-model="value" :min="0" :max="100" />

      <my-chart />
    </el-card>
  </div>
</template>

<style></style>
