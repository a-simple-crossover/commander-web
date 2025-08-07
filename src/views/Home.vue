<script setup lang="ts">

</script>

<template>
  <div class="container">
    <el-button type="primary" plain class="welcome">首页</el-button>
  </div>
</template>

<style scoped>
/* 容器占据父节点全部空间，使用 flex 布局实现居中 */
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* 按钮宽度为容器的 10%，高度为容器的 5%，并设置最小尺寸 */
.welcome {
  width: 10%;
  height: 5%;
  min-width: 80px;
  min-height: 30px;
  font-size: 1em;
}

</style>