import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import router from '~/router'

// 配置请求拦截器
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      config.headers.token = window.localStorage.getItem('token') || '' // 添加token
      config.baseURL = baseUrl
      config.timeout = 6000
    }
    return config
  },
  error => Promise.reject(error),
)

// 配置响应拦截器
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (err: any) => {
    try {
      // Message.error(err.response.data.message)
      if (err.response.status === 401) {
        localStorage.removeItem('token')
        router.push('/login')
      }
    }
    catch (error) {
    }
    if (err.code === 'ECONNABORTED' || err.message === 'Network Error' || err.message.includes('timeout'))

      return err.response
  },
)

export default axios
