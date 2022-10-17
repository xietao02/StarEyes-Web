<template>
  <div>
    <el-space fill class="event-map-spcae">
      <el-card class="maps-card">
        <Maps></Maps>
      </el-card>
      <el-card class="maps-card">
        <!-- 事件列表 -->
        <el-table :data="filterTableData" style="width: 100%">
          <el-table-column label="发生时间" prop="time" />
          <el-table-column label="摄像头ID" prop="id" />
          <el-table-column label="地址" prop="address" />
          <el-table-column label="事件类型" prop="eventType" />
          <el-table-column align="right">
            <template #header>
              <el-input v-model="search" size="small" placeholder="搜索全部" />
            </template>
            <template #default="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)"
                >详情</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除事件</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import Maps from "./Maps.vue";
import { computed, ref } from "vue";

interface User {
  time: string;
  id: string;
  address: string;
  eventType: string;
}

const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.id.toLowerCase().includes(search.value.toLowerCase()) ||
			data.address.toLowerCase().includes(search.value.toLowerCase()) ||
			data.eventType.toLowerCase().includes(search.value.toLowerCase()) ||
			data.time.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    time: "2016-05-03",
    id: "00010",
    address: "力行西路",
    eventType: "闯入设定区域",
  },
  {
    time: "2016-05-02",
    id: "00012",
    address: "天水南路",
    eventType: "伤人",
  },
  {
    time: "2016-05-04",
    id: "00042",
    address: "定西路",
    eventType: "闯入设定区域",
  },
  {
    time: "2016-05-01",
    id: "11451",
    address: "东岗西路",
    eventType: "闯入设定区域",
  },
];
</script>

<style>
.maps-card {
  height: 45vh;
  min-width: 400px;
  width: 100vw;
  padding: 0;
}
.maps-card > .el-card__body {
  padding: 0;
}
.event-map-spcae {
  width: 100%;
}
</style>
