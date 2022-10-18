<template>
  <div class="content-box">
    <el-container>
      <el-header>
        <v-header ref="header" />
      </el-header>
      <el-container>
        <el-aside>
          <v-sidebar />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { user } from "../common/localStorage";
import vHeader from "../components/Header.vue";
import vSidebar from "../components/Sidebar.vue";


ElMessage({
  type: "info",
  message: "Welcome! User " + user.id + ".",
});
</script>

<script>
export default {
  methods: {
    getHeight() {
      this.conheight.height = window.innerHeight - 170 + "px";
    },
    created() {
      window.addEventListener("resize", this.getHeight);
      this.getHeight();
    },
  },
};
</script>

<style>
.MenuLeft {
  height: 100%;
}
.el-aside {
  width: 20vw;
  max-width: 300px;
  min-width: 180px;
  background-color: #dbe2ef;
}
.el-main {
  background-color: #dbe2ef;
}
</style>