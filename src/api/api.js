import axios from 'axios'

export default axios.create({
  baseURL: process.env.VUE_APP_INSTRAIL_API_URL,
  crossdomain: true,
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
})
