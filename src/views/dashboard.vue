<template>
  <div :style="conheight">
    <Header class="header_total"></Header>
    <el-container>
      <el-aside>
        <MenuLeft></MenuLeft>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style>
body {
  margin: 00;
  padding: 0;
  border: 0;
}
.header_total {
  z-index: 100;
  height: auto;
  background-color: #112d4e;
  margin: -17px 0px 0px 0px;
  padding: 10px 20px 10px 20px;
}
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

<script setup>
import { ElMessage } from "element-plus";
import { getToken, user } from "../common/data";
import Header from "../components/Header.vue";
import MenuLeft from "../components/MenuLeft.vue";
let token = getToken();

ElMessage({
  type: "info",
  message: "Welcome! User " + user.id + ".",
});
</script>

<script>
export default {
  data() {
    conheight: {
      height: "";
    }
  },
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
