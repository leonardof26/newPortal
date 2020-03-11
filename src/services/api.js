import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.1.255.212',
  timeout: 10000,
})

export default api
