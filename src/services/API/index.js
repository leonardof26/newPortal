import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.1.255.34',
  // timeout: 20000,
})

export default api
