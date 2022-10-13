<template>
  <el-space fill wrap="true" fill-ratio="40" class="all-cards">
    <el-card class="box-card Welcome">
      <div class="all-welcome-texts">
        <p class="welcome-texts">{{ dateState() }},Users!</p>
        <p class="welcome-texts">现在是北京时间</p>
        <p class="welcome-texts">{{ times }}</p>
        <p class="welcome-texts">今日共监测到{{ EventNumber }}起事件。</p>
      </div>
    </el-card>
    <el-card class="box-card Hardwares">
      <template #header>
        <div class="card-header">
          <span>硬件信息</span>
          <el-button type="primary" round>刷新</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>

    <el-card class="box-card Events">
      <template #header>
        <div class="card-header">
          <span>预警信息</span>
          <el-button type="primary" round>刷新</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>

    <el-card class="box-card Personal">
      <template #header>
        <div class="card-header">
          <span>个人信息</span>
          <el-button type="primary" round>修改</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </el-space>
</template>

<style>
.el-card__body {
  /* vertical-align: middle; */

  margin-top: 30px;
}
.welcome-texts {
  font-size: 30px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  display: flex;
  padding-left: 2ch;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 20px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  height: 45vh;

  min-width: 400px;
}

.all-cards {
  max-height: 800px;
}
</style>

<script>
export default {
  data() {
    return {
      EventNumber: 0,
      UserName: "Default",
      times: "",
    };
  },
  methods: {
    dateState() {
      let date = new Date();
      if (date.getHours() >= 6 && date.getHours() < 12) {
        return "上午好";
      } else if (date.getHours() >= 12 && date.getHours() < 18) {
        return "下午好";
      } else {
        return "晚上好";
      }
    },
    getTimes() {
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval: function () {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      _this.times =
        year +
        "." +
        month +
        "." +
        day +
        "  " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    },
  },
  created() {
    this.getTimes();
  },
};
</script>
