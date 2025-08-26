<template>
  <el-config-provider :locale="locale">
    <el-container class="app-container">
      <!-- Header -->
      <el-header class="app-header">
        <div class="header-content">
          <div class="logo-section">
            <!-- 漢堡選單按鈕 (只在手機版顯示) -->
            <el-button class="menu-button" type="text" @click="toggleSidebar">
              <el-icon size="20"><Menu /></el-icon>
            </el-button>
            <img src="/vite.svg" alt="Logo" class="logo" />
            <span class="brand-name">Chart.js Demo</span>
          </div>
        </div>
      </el-header>

      <!-- Main Container with Sidebar -->
      <el-container class="main-container">
        <!-- Sidebar with overlay for mobile -->
        <div
          v-if="sidebarVisible"
          class="sidebar-overlay"
          @click="sidebarVisible = false"
        ></div>
        <el-aside
          class="sidebar"
          :class="{ 'sidebar-mobile-visible': sidebarVisible }"
          width="240px"
        >
          <el-menu
            :default-active="($route.name as string)"
            class="sidebar-menu"
            router
          >
            <el-menu-item index="doughnut" route="/doughnut">
              <el-icon><PieChart /></el-icon>
              <span>圓餅圖</span>
            </el-menu-item>
            <el-menu-item index="bar" route="/bar">
              <el-icon><Histogram /></el-icon>
              <span>長條圖</span>
            </el-menu-item>
            <el-menu-item index="line" route="/line">
              <el-icon><TrendCharts /></el-icon>
              <span>折線圖</span>
            </el-menu-item>
            <el-menu-item index="area" route="/area">
              <el-icon><DataAnalysis /></el-icon>
              <span>區域圖</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- Main Content -->
        <el-main class="main-content">
          <div class="content-wrapper">
            <router-view />
          </div>
        </el-main>
      </el-container>

      <!-- Footer -->
      <el-footer class="app-footer">
        <div class="footer-content">
          <span>Chart.js + Element Plus + Vue 3 圖表展示系統</span>
        </div>
      </el-footer>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts">
import {
  DataAnalysis,
  Histogram,
  Menu,
  PieChart,
  TrendCharts,
} from "@element-plus/icons-vue";
import {
  ElAside,
  ElButton,
  ElConfigProvider,
  ElContainer,
  ElFooter,
  ElHeader,
  ElIcon,
  ElMain,
  ElMenu,
  ElMenuItem,
} from "element-plus";
import zhTw from "element-plus/es/locale/lang/zh-tw";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

// 中文語系設定
const locale = zhTw;

// 獲取當前路由
const route = useRoute();

// 控制 sidebar 顯示狀態 (手機版)
const sidebarVisible = ref(false);

// 切換 sidebar 顯示狀態
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};

// 監聽路由變化，在手機版選擇選單後自動關閉 sidebar
watch(route, () => {
  if (window.innerWidth < 768) {
    sidebarVisible.value = false;
  }
});
</script>

<style scoped>
/* Mobile-first 設計 - 從小螢幕開始 */

/* 全域容器 */
.app-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

/* Header 樣式 - Mobile first */
.app-header {
  background: linear-gradient(135deg, #013953, #035d89, #005771, #01354d);
  color: white;
  padding: 0 12px;
  height: 50px !important;
  line-height: 50px;
  flex-shrink: 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 漢堡選單按鈕 - 只在手機版顯示 */
.menu-button {
  color: white !important;
  padding: 4px !important;
  margin-right: 4px;
  border: none !important;
  background: transparent !important;
}

.menu-button:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.logo {
  height: 32px;
  width: 32px;
}

.brand-name {
  display: none;
  font-size: 16px;
  font-weight: 600;
}

/* Main Container 樣式 */
.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
}

/* Sidebar 遮罩層 - 只在手機版顯示 */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: block;
}

/* Sidebar 樣式 - Mobile first */
.sidebar {
  background-color: white;
  border-right: 1px solid #e4e7ed;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  width: 240px !important;
  overflow: hidden;
  flex-shrink: 0;
  position: fixed;
  top: 50px;
  left: -240px;
  bottom: 40px;
  z-index: 1000;
  transition: left 0.3s ease;
}

/* 手機版 sidebar 顯示狀態 */
.sidebar-mobile-visible {
  left: 0;
}

.sidebar-menu {
  border-right: none;
  height: 100%;
  overflow: hidden;
  padding: 8px 0;
}

.sidebar-menu .el-menu-item {
  height: 44px;
  line-height: 44px;
  margin: 2px 6px;
  border-radius: 6px;
  transition: all 0.3s;
  font-size: 12px;
  padding: 0 8px !important;
  display: flex;
  align-items: center;
}

.sidebar-menu .el-menu-item span {
  margin-left: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-menu .el-menu-item:hover {
  background-color: #f5f7fa;
  color: #409eff;
}

.sidebar-menu .el-menu-item.is-active {
  background: linear-gradient(135deg, #013953, #035d89, #005771, #01354d);
  color: white;
}

.sidebar-menu .el-menu-item.is-active .el-icon {
  color: white;
}

/* Main Content 樣式 - Mobile first */
.main-content {
  background-color: #f5f5f5;
  padding: 12px;
  flex: 1;
  overflow-y: auto;
  width: 100%;
}

.content-wrapper {
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Footer 樣式 - Mobile first */
.app-footer {
  background-color: #303133;
  color: #909399;
  text-align: center;
  height: 40px !important;
  line-height: 40px;
  flex-shrink: 0;
}

.footer-content {
  font-size: 12px;
  padding: 0 12px;
}

/* Tablet 樣式 (min-width: 576px) */
@media (min-width: 576px) {
  .app-header {
    height: 55px !important;
    line-height: 55px;
    padding: 0 16px;
  }

  .logo {
    height: 28px;
    width: 28px;
  }

  .brand-name {
    display: block;
    font-size: 17px;
  }

  .sidebar {
    width: 240px !important;
    top: 55px;
  }

  .sidebar-menu .el-menu-item {
    height: 46px;
    line-height: 46px;
    margin: 3px 8px;
    font-size: 13px;
    padding: 0 12px !important;
  }

  .main-content {
    padding: 16px;
  }

  .app-footer {
    height: 45px !important;
    line-height: 45px;
  }

  .footer-content {
    font-size: 13px;
  }
}

/* Desktop 樣式 (min-width: 768px) */
@media (min-width: 768px) {
  .app-header {
    height: 60px !important;
    line-height: 60px;
    padding: 0 20px;
  }

  .logo {
    height: 32px;
    width: 32px;
  }

  .brand-name {
    font-size: 20px;
  }

  /* 隱藏漢堡選單按鈕 */
  .menu-button {
    display: none !important;
  }

  /* 桌面版 sidebar 恢復正常顯示 */
  .sidebar {
    position: static !important;
    left: auto !important;
    top: auto !important;
    bottom: auto !important;
    width: 240px !important;
  }

  /* 隱藏遮罩層 */
  .sidebar-overlay {
    display: none !important;
  }

  .sidebar-menu {
    padding: 12px 0;
  }

  .sidebar-menu .el-menu-item {
    height: 50px;
    line-height: 50px;
    margin: 4px 8px;
    font-size: 14px;
    padding: 0 16px !important;
  }

  .sidebar-menu .el-menu-item span {
    margin-left: 8px;
  }

  .main-content {
    padding: 20px;
  }

  .app-footer {
    height: 50px !important;
    line-height: 50px;
  }

  .footer-content {
    font-size: 14px;
  }
}

/* Large Desktop 樣式 (min-width: 1200px) */
@media (min-width: 1200px) {
  .sidebar {
    width: 260px !important;
  }

  .sidebar-menu .el-menu-item {
    height: 52px;
    line-height: 52px;
    margin: 5px 10px;
    font-size: 15px;
    padding: 0 18px !important;
  }
}
</style>
