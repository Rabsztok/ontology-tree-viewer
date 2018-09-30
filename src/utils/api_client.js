import axios from 'axios'
import axiosRetry from 'axios-retry'

const apiClient = axios.create({
  baseURL: process.env.RAZZLE_API_URL
})

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay
})

export default apiClient