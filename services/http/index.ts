import axios, { AxiosRequestConfig } from 'axios'
import { HOST } from '@/constants'
import getToken from '@/utils/getToken'

const defaults: AxiosRequestConfig = {
  baseURL: HOST,
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}

const instance = axios.create(defaults)

instance.interceptors.request.use(
  async (configs) => {
    const token = await getToken()
    if (token) {
      configs.headers.Authorization = `Bearer ${token}`
    }
    return configs
  },
  (error) => {}
)

instance.interceptors.response.use(
  (res) => {
    if (res && res.data && res.data.code !== 0) {
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    if (err.response && err.response.data && err.response.data.msg) {
      return Promise.reject(err.response.data)
    } else {
      return Promise.reject({
        code: -1,
        msg: '网络错误'
      })
    }
  }
)

async function request (options: AxiosRequestConfig): Promise<any> {
  const res = await instance.request(options)
  return Promise.resolve(res.data)
}

export default {
  config (options: AxiosRequestConfig) {
    instance.defaults.baseURL = options.baseURL
  },

  post (url: string, options: AxiosRequestConfig = {}) {
    const config = {
      url,
      method: 'post',
      ...options
    } as AxiosRequestConfig
    return request(config)
  },

  get (url: string, options: AxiosRequestConfig = {}): Promise<any> {
    const config = {
      url,
      method: 'get',
      ...options
    } as AxiosRequestConfig
    return request(config)
  },

  delete (url: string, options: AxiosRequestConfig = {}): Promise<any> {
    const config = {
      url,
      method: 'delete',
      ...options
    } as AxiosRequestConfig
    return request(config)
  }
}
