<template>
  <el-menu default-active="1" class="sidebar" :collapse="SiderbarStore.isCollapse" @open="handleOpen"
    @close="handleClose" active-text-color="#ffd04b" background-color="#3F72AF" text-color="#F9F7F7">
    <router-link to="/dashboard/overview">
      <el-menu-item index="1">
        <el-icon>
          <DataAnalysis />
        </el-icon>
        <template #title>概览</template>
      </el-menu-item>
    </router-link>

    <router-link to="/dashboard/monitors">
      <el-menu-item index="2">
        <el-icon>
          <VideoCamera />
        </el-icon>
        <template #title>摄像头管理</template>
      </el-menu-item>
    </router-link>

    <router-link to="/dashboard/events">
      <el-menu-item index="3">
        <el-icon>
          <Tickets />
        </el-icon>
        <template #title>事件消息</template>
      </el-menu-item>
    </router-link>

    <router-link to="/dashboard/servers">
      <el-menu-item index="4">
        <el-icon>
          <Cpu />
        </el-icon>
        <template #title>服务器管理</template>
      </el-menu-item>
    </router-link>

    <router-link to="/dashboard/personal_info">
      <el-menu-item index="5">
        <el-icon>
          <User />
        </el-icon>
        <template #title>个人信息管理</template>
      </el-menu-item>
    </router-link>

    <router-link to="/dashboard/about">
      <el-menu-item index="6">
        <el-icon>
          <More />
        </el-icon>
        <template #title>关于</template>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script setup>
import { useSiderbarStore } from "../store/sidebar"

const SiderbarStore = useSiderbarStore();

</script>

<style>
.sidebar:not(.el-menu--collapse) {
  width: 19.55vw;
  min-width: 180px;
  height: 100vh;
}

.sidebar {
  height: 100vh;
}
</style>
