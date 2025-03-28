<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  console.log('登录', username.value, password.value)
}
</script>

<template>
  <div>
    <el-card class="login-card">
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
      <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="login">登录</el-button>
    </el-card>
  </div>
</template>

<style scoped>

</style>