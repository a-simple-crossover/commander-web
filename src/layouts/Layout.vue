<script setup lang="ts">
import {House, User} from '@element-plus/icons-vue'
</script>

<template>
  <el-container class="container">
    <!-- 左侧导航栏 -->
    <el-aside class="aside">
      <el-menu default-active="1">
        <el-menu-item index="1" @click="$router.push('/')">
          <el-icon>
            <house/>
          </el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/login')">
          <el-icon>
            <user />
          </el-icon>
          <span>登录</span>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/user')">
          <el-icon>
            <user/>
          </el-icon>
          <span>用户</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 右侧内容 -->
    <el-container class="content">
      <el-header class="header">
        <h2>
          Commander
          <label class="author">@Master</label>
        </h2>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
/* 整个页面布局 */
.container {
  height: 100vh;
}

.author {
  margin-left: 2ch;
  font-size: 16px;
}

/* 左侧导航栏 */
.aside {
  width: 200px;
  background-color: #001529;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  /* 确保没有多余的外边距 */
  margin-right: 0;
  /* 移除默认的右边框 */
  border-right: none;
}

/* 右侧内容区域 */
.content {
  /* 让内容区域紧贴导航栏 */
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  flex: 1;
  /* 让内容区域 100% 占满 */
  width: calc(100% - 200px);
  /* 取消可能的 padding */
  padding-left: 0;
}

/* 头部样式 */
.header {
  background-color: rgba(149, 151, 194, 0.61);
  padding: 16px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #a32aa5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  flex-shrink: 0;
}

/* 右侧内容区域 */
.main {
  flex: 1;
  padding: 16px;
  background-color: #f0f2f5;
  overflow: auto;
  box-sizing: border-box;
}

/* 解决 body 可能带来的默认 margin 问题 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
