<template>
  <div v-if="isactive">I am here!!</div>
  <el-button type="primary" @click="func"> switch: {{ isactive }} </el-button>
  <test>
    <template v-slot:a>hello</template>
    <template #b>world</template>
  </test>
</template>

<script setup>
import { ref } from "vue";
import test from "./test.vue";

const isactive = ref(true);

const func = () => {
  isactive.value = !isactive.value;
};
</script>
