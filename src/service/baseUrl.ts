const isDev = import.meta.env.MODE === 'development'

export default isDev
  ? 'http://localhost:3000' // 开发环境
  : 'xxxxxx' // 生产环境
