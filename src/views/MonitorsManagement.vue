<template>
  <el-space class="box-title-space" fill>
    <el-card class="box-card-title">
      <template #header>
        <div class="card-header">
          <span class="header-monitor-num">摄像头数量:{{ monitorNumber }}</span>
          <el-form :inline="true" :model="form" label-width="20px">
            <el-form-item>
              <el-input
                v-model="formInline.queryMonitor"
                placeholder="请输入待查询的摄像头ID"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button class="button-list" type="primary" round
                >查询</el-button
              >
              <el-button class="button-list" type="danger" round
                >删除</el-button
              >
              <el-button class="button-list" type="success" round
                >添加</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </template>
    </el-card>
    <el-card class="maps-card">
      <Maps class="monitor-maps"></Maps>
    </el-card>
  </el-space>

  <div class="monitors-card">
    <!-- <div style="margin-bottom: 15px">fill: <el-switch v-model="fill" /></div> -->
    <el-space fill>
      <el-card v-for="i in 3" :key="i" class="box-card" id="monitor-each">
        <template #header>
          <div class="card-header">
            <span>摄像头{{ i }}</span>
            <el-button id="change-monitor-info" type="warning" round
              >修改信息</el-button
            >
          </div>
        </template>
        <li
          v-for="MonitorStatusName in MonitorStatusNames"
          :key="MonitorStatusName.name"
          class="text-item"
        >
          {{ MonitorStatusName.name + " :" }}
        </li>
      </el-card>
    </el-space>
  </div>
</template>

<script setup>
import Maps from "../components/Maps.vue";
</script>

<script>
export default {
  data() {
    return {
      monitorNumber: 3,
      formInline: {
        queryMonitor: "",
        region: "",
      },
      monitorStatus: {
        monitorID: "00000",
        monitorStatus: "在线",
        monitorPosition: "",
      },
      MonitorStatusNames: [
        { name: "摄像头ID" },
        { name: "摄像头状态" },
        { name: "摄像头位置" },
      ],
    };
  },
};
</script>

<style>
#change-monitor-info {
  float: right;
}
.monitors-card {
  width: 99%;
}
.header-monitor-num {
  float: left;
  font-size: 20px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  display: flex;
  padding-left: 0ch;
  text-align: center;
  padding-bottom: 20px;
}

.el-form--inline {
  float: right;
}

.box-card-title {
  margin-bottom: 10px;
  width: 100%;
  height: 63px;
}
.box-title-space {
  width: 99%;
}
.button-list {
  margin-right: 10px;
}

/* .monitors-card > .box-card {
  height: max-content;
	width: 50vw;
} */

#monitor-each {
  height: max-content;
  padding-bottom: 20px;
  width: 98%;
}
.maps-card {
  width: 99%;
  margin-bottom: 20px;
}

.monitor-maps {
  height: 100%;
  width: 100%;
}
.text-item {
  float: left;
  margin-right: 40px;
  list-style-type: none;
}
</style>
