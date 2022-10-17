<template>
  <div class="header_all" aria-label="A complete example of page header">
    <el-page-header>
      <template #content>
        <div class="flex items-center">
          <img src="../assets/logo.png">
          <span class="text-large font-600 mr-3"> StarEyes </span>
          <span class="text-sm mr-2"> 智慧城市 </span>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button type="danger" class="ml-2">退出登录</el-button>
        </div>
      </template>
    </el-page-header>
  </div>
  
</template>

<script setup lang="ts">
import { ElNotification as notify } from "element-plus";
import { UserFilled } from "@element-plus/icons-vue";
</script>

<style>
.el-page-header__back {
  display: none;
}
.el-divider--vertical {
  display: none;
}
.text-large {
  font-size: 40px;
  color: #f9f7f7;
}
.mr-2 {
  font-size: 20px;
  color: #dbe2ef;
}
.icon {
  margin-right: 20px;
  height: 30px;
  width: 30px;
}
</style>
