import axios from 'axios'
const BASE_URL = 'https://api.nuxtjs.dev/mountains'

/**
 * 建立實體，預設值在此處理
 * Create axios instance with some init params
 */
const mountainRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  //   withCredentials: true, // for response with Set-Cookies works
  timeout: 20000
})

// Add a request interceptor
mountainRequest.interceptors.request.use((config) => {
  // Do something before request is sent
  console.log(config)
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
mountainRequest.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(response)
  // return Promise.resolve(response.data)
  return response.data
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

/**
 * Get mountains
 * @method
 */
export const getMountains = () => mountainRequest.get(BASE_URL)

export default {
  getMountains
}
