<template>
  <el-space class="box-title-space" fill>
    <el-card class="box-card-title">
      <template #header>
        <div class="card-header">
          <span class="header-monitor-num">服务器数量:{{ serverNumber }}</span>
          <el-form :inline="true" :model="form" label-width="20px">
            <el-form-item>
              <el-input
                v-model="formInline.queryMonitor"
                placeholder="请输入待查询的服务器编号"
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
  </el-space>
</template>

<script>
export default {
  data() {
    return {
      serverNumber: 0,
      formInline: {
        queryMonitor: "",
        region: "",
      },

    };
  },
};
</script>

<style>
     .el-divider--horizontal{
     color: white;
     
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
    
    .monitors-card > .box-card {
      height: max-content;
        width: 50vw;
    }
    
    #monitor-each {
      height: max-content;
    }
    .maps-card {
      width: 99%;
        margin-bottom: 20px;
    }
    
    .monitor-maps{
        height: 100%;
        width: 100%;
    }
    </style>
    
