import axios from 'axios'

const BASE_URL = 'http://18.219.144.67:8090'

/**
 * 建立實體，預設值在此處理
 * Create axios instance with some init params
 */
const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // for response with Set-Cookies works
  timeout: 20000,
})

/**
 * 會員登入
 * User login
 * @method
 * @param {string} data 帳密 account/password
 */
export const postUserLogin = (data: string) =>
  userRequest.post('/login', JSON.stringify(data))
export const postUserLoginUrl = `${BASE_URL}/login`

export default {
  postUserLogin,
}
