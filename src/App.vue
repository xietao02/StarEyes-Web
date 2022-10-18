<template>
  <router-view />
</template>

<style>
@import "./assets/css/main.css";
</style>

<script>
export default{
name: 'App',
provide(){
  return {
    reload: this.reload
  }
}  
}
</script>