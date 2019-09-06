import { Toast } from 'vant';
import errorHandler from './errorHandler'

export default async () => {
  try {
    const token = localStorage.getItem('token')
    return token
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // 测试环境可以使用user id作为token
      return '19336'
    } else {
      errorHandler(Toast, { code: -2 })
    }
  }
}
