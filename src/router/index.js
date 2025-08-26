import { createRouter, createWebHistory } from 'vue-router'
import AreaChart from '../components/AreaChart.vue'
import BarChart from '../components/BarChart.vue'
import DoughnutChart from '../components/DoughnutChart.vue'
import LineChart from '../components/LineChart.vue'

const routes = [
  {
    path: '/',
    redirect: '/doughnut'
  },
  {
    path: '/doughnut',
    name: 'doughnut',
    component: DoughnutChart,
    meta: { title: '圓餅圖' }
  },
  {
    path: '/bar',
    name: 'bar',
    component: BarChart,
    meta: { title: '長條圖' }
  },
  {
    path: '/line',
    name: 'line',
    component: LineChart,
    meta: { title: '折線圖' }
  },
  {
    path: '/area',
    name: 'area',
    component: AreaChart,
    meta: { title: '區域圖' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router