import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.1.255.88',
})

export default api
