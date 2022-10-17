<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#3F72AF"
        class="el-menu-vertical"
        default-active="1"
        text-color="#F9F7F7"
        @open="handleOpen"
        @close="handleClose"
      >
        <router-link to="/dashboard/overview">
          <el-menu-item index="1">
            <el-icon><DataAnalysis /></el-icon>
            <span>概览</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/monitors">
          <el-menu-item index="2">
            <el-icon><VideoCamera /></el-icon>
            <span>摄像头管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/events">
          <el-menu-item index="3">
            <el-icon><Tickets /></el-icon>
            <span>事件消息</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/servers">
          <el-menu-item index="4">
            <el-icon><Cpu /></el-icon>
            <span>服务器管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/personal_info">
          <el-menu-item index="5">
            <el-icon><User /></el-icon>
            <span>个人信息管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/about">
          <el-menu-item index="6">
            <el-icon><More /></el-icon>
            <span>关于</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 19.55vw;
  min-width: 180px;
  min-height: 400px;
  height: 100vh;
}

.tac {
  width: 0px;
  position: fixed;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>
