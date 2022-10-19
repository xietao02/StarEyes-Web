<template>
  <el-menu router :default-active="onRoutes" class="sidebar" :collapse="SiderbarStore.isCollapse" @open="handleOpen"
    @close="handleClose" active-text-color="#ffd04b" background-color="#3F72AF" text-color="#F9F7F7">
    <template v-for="item in items">
      <el-menu-item :index="item.index">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { useSiderbarStore } from "../store/sidebar"
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const items = [
  {
    icon: 'DataAnalysis',
    index: '/dashboard/overview',
    title: '概览'
  },
  {
    icon: 'VideoCamera',
    index: '/dashboard/monitors',
    title: '摄像头管理'
  },
  {
    icon: 'Tickets',
    index: '/dashboard/events',
    title: '事件消息'
  },
  {
    icon: 'Cpu',
    index: '/dashboard/servers',
    title: '服务器管理'
  },
  {
    icon: 'User',
    index: '/dashboard/account',
    title: '个人信息管理'
  },
  {
    icon: 'More',
    index: '/dashboard/about',
    title: '关于'
  }
]

const SiderbarStore = useSiderbarStore();
const handleOpen = (key: string, keyPath: string[]) => { }
const handleClose = (key: string, keyPath: string[]) => { }

const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});
</script>

<style>
.sidebar:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar {
  z-index: 1;
  height: 100vh;
}
</style>