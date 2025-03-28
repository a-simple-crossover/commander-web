<script setup lang="ts">

</script>

<template>
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">用户管理</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>管理系统</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>

</style>