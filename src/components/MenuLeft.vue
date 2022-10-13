<template>
    <el-row class="tac">   
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#3F72AF"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#F9F7F7"
          @open="handleOpen"
          @close="handleClose"
        >

        <router-link to="/dashboard/Overview">
          <el-menu-item index="1">
              <el-icon><icon-menu /></el-icon>
              <span>概览</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/MonitorsManagement">
          <el-menu-item index="2">
            <el-icon><location /></el-icon>
            <span>摄像头管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/Events">
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span>事件消息</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/ServersManagement">
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>服务器管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/PersonalInformation">
          <el-menu-item index="5">
            <el-icon><setting /></el-icon>
            <span>个人信息管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/dashboard/About">
          <el-menu-item index="6">
            <el-icon><setting /></el-icon>
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
  } from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
    <style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 20vw;
        min-width: 250px;
        min-height: 400px;
        height: 100vh;
    }
    .tac{
        width: 0px;
    }

    </style>