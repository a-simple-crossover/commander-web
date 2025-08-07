// utils/request.ts
import axios from 'axios'

const request = axios.create({
    // 基础路径
    baseURL: '/api',
    // 超时时间（ms）
    timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        // 示例：添加 token
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
    response => response.data,
    error => {
        console.error('请求错误：', error)
        return Promise.reject(error)
    }
)

export default request
