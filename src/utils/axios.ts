import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios  = Axios.create({
  baseURL,
  timeout: 20000
})

// 请求拦截器
axios.interceptors.request.use(
  config => {
    /* 根据实际项目情况对config 做处理 */
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 相应拦截器
axios.interceptors.response.use(
  response => {
    /* 根据项目实际情况可以在这里对接口返回状态码进行判断，做对应的处理 */
    return response
  },
  error => {
    /* 错误提示 */
    if(error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`CodeL ${code}, Message:${msg}`)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
